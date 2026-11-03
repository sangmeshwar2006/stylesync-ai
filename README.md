# StyleSync AI

StyleSync AI is a React + TypeScript storefront backed by a Python (FastAPI) service. The browser handles the UI while the Python API handles AI stylist requests, recommendations, checkout order creation, and health checks. Gemini and Razorpay secret credentials stay on the server.

## Requirements

- Node.js 20 or newer
- Python 3.10 or newer
- Gemini API key for AI styling and Razorpay test credentials for checkout

## Local development

1. Install frontend dependencies: `npm install`.
2. Create and activate a Python virtual environment, then install API dependencies:
   - macOS/Linux: `python3 -m venv .venv && source .venv/bin/activate`
   - Windows: `py -m venv .venv && .venv\\Scripts\\activate`
   - Install: `python -m pip install -r requirements.txt`
3. Copy `.env.example` to `.env` and set your server-side Gemini and Razorpay credentials.
4. Start the API in one terminal: `npm run dev:api`.
5. Start Vite in another terminal: `npm run dev`.

Vite forwards `/api/*` requests to FastAPI on port 8000. Set `API_PROXY_TARGET` if your API runs elsewhere. The health check is at `http://localhost:8000/api/health`.

## AI API

- `POST /api/ai/fashion-advice` accepts `{ "prompt": "...", "imageData": { "data": "base64", "mimeType": "image/jpeg" } }`. `imageData` is optional; JPEG, PNG, and WebP images up to 5 MB are supported.
- `POST /api/ai/recommendations` accepts `{ "userHistory": ["Luxury", "Accessories"] }`.

The Gemini key is read only by FastAPI and is no longer embedded in the frontend bundle. Configure it as `GEMINI_API_KEY` on the API server.

## Production deployment

Build the frontend with `npm run build`, and run the API with `python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000`. Deploy the static `dist/` files and FastAPI service as appropriate, routing `/api/*` to FastAPI. Set `GEMINI_API_KEY`, `RAZORPAY_KEY_ID`, and `RAZORPAY_KEY_SECRET` as server-side environment variables; never expose secrets in frontend code.
