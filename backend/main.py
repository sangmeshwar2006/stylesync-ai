import os
import uuid
from decimal import Decimal, InvalidOperation

import razorpay
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

load_dotenv()

app = FastAPI(title="StyleSync AI API", version="1.0.0")


class CreateOrderRequest(BaseModel):
    amount: Decimal = Field(gt=0, le=1_000_000, description="Amount in INR")
    currency: str = Field(default="INR", pattern="^INR$")


@app.get("/api/health")
def health():
    return {"status": "ok", "message": "StyleSync AI API is running"}


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
