import base64
import os
import uuid
from decimal import Decimal, InvalidOperation

import razorpay
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from google import genai
from google.genai import types
from pydantic import BaseModel, Field

load_dotenv()

app = FastAPI(title="StyleSync AI API", version="1.1.0")
FASHION_PROMPT = (
    "You are StyleSync AI, a luxury fashion stylist. Give concise, practical advice "
    "about outfits, color matching, fit, and current style. Be warm and specific. "
    "When an image is supplied, discuss only visible clothing and avoid identifying people."
)
ALLOWED_IMAGE_TYPES = {"image/jpeg", "image/png", "image/webp"}
MAX_IMAGE_BYTES = 5 * 1024 * 1024


class CreateOrderRequest(BaseModel):
    amount: Decimal = Field(gt=0, le=1_000_000, description="Amount in INR")
    currency: str = Field(default="INR", pattern="^INR$")


class ImageInput(BaseModel):
    data: str = Field(min_length=1, max_length=7_000_000)
    mimeType: str


class FashionAdviceRequest(BaseModel):
    prompt: str = Field(default="", max_length=2000)
    imageData: ImageInput | None = None


class RecommendationsRequest(BaseModel):
    userHistory: list[str] = Field(default_factory=list, max_length=20)


def get_genai_client():
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=503, detail="AI stylist is not configured")
    return genai.Client(api_key=api_key)


@app.get("/api/health")
def health():
    return {"status": "ok", "message": "StyleSync AI API is running"}


@app.post("/api/ai/fashion-advice")
def fashion_advice(request: FashionAdviceRequest):
    prompt = request.prompt.strip() or "Please suggest a look for this item."
    contents: list = [f"{FASHION_PROMPT}\n\nUser's question: {prompt}"]

    if request.imageData:
        if request.imageData.mimeType not in ALLOWED_IMAGE_TYPES:
            raise HTTPException(status_code=415, detail="Use a JPEG, PNG, or WebP image")
        try:
            image_bytes = base64.b64decode(request.imageData.data, validate=True)
        except (ValueError, base64.binascii.Error):
            raise HTTPException(status_code=400, detail="Image data is not valid base64")
        if len(image_bytes) > MAX_IMAGE_BYTES:
            raise HTTPException(status_code=413, detail="Image must be 5 MB or smaller")
        contents.append(types.Part.from_bytes(data=image_bytes, mime_type=request.imageData.mimeType))

    try:
        client = get_genai_client()
        response = client.models.generate_content(
            model=os.getenv("GEMINI_MODEL", "gemini-2.5-flash"),
            contents=contents,
        )
        return {"text": response.text or "I couldn't create a styling suggestion. Please try again."}
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=502, detail="AI stylist is temporarily unavailable")


@app.post("/api/ai/recommendations")
def recommendations(request: RecommendationsRequest):
    categories = [category[:80] for category in request.userHistory]
    prompt = (
        "Suggest exactly three fashion categories this shopper may enjoy based on "
        f"these recent interests: {', '.join(categories) or 'no history provided'}. "
        "Return only a comma-separated list of category names."
    )
    try:
        client = get_genai_client()
        response = client.models.generate_content(
            model=os.getenv("GEMINI_MODEL", "gemini-2.5-flash"),
            contents=f"{FASHION_PROMPT}\n\n{prompt}",
        )
        suggestions = [item.strip() for item in (response.text or "").split(",") if item.strip()]
        return {"recommendations": suggestions[:3]}
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(status_code=502, detail="Recommendations are temporarily unavailable")


@app.post("/api/checkout/create-order")
def create_order(request: CreateOrderRequest):
    key_id = os.getenv("RAZORPAY_KEY_ID")
    key_secret = os.getenv("RAZORPAY_KEY_SECRET")
    if not key_id or not key_secret:
        raise HTTPException(status_code=503, detail="Payment service is not configured")

    try:
        amount_paise = int((request.amount * 100).quantize(Decimal("1")))
        client = razorpay.Client(auth=(key_id, key_secret))
        order = client.order.create(
            data={
                "amount": amount_paise,
                "currency": request.currency,
                "receipt": f"stylesync_{uuid.uuid4().hex[:20]}",
            }
        )
        return order
    except (InvalidOperation, razorpay.errors.BadRequestError):
        raise HTTPException(status_code=400, detail="Unable to create payment order")
    except Exception:
        raise HTTPException(status_code=502, detail="Payment provider is temporarily unavailable")
