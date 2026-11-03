# StyleSync AI

StyleSync AI is a React + TypeScript storefront backed by a Python (FastAPI) service. The frontend remains in TypeScript; checkout and health API routes are handled by Python.

## Requirements

- Node.js 20 or newer
- Python 3.10 or newer
- Razorpay test credentials for checkout (optional for running the storefront)

## Local development

1. Install frontend dependencies: `npm install`.
2. Create and activate a Python virtual environment, then install the API dependencies:
   - macOS/Linux: `python3 -m venv .venv && source .venv/bin/activate`
   - Windows: `py -m venv .venv && .venv\\Scripts\\activate`
   - Install: `python -m pip install -r requirements.txt`
3. Copy `.env.example` to `.env` and set your Razorpay credentials to enable checkout.
4. Start the API in one terminal: `npm run dev:api`.
5. Start Vite in another terminal: `npm run dev`.

Vite forwards `/api/*` requests to the FastAPI service on port 8000. Set `API_PROXY_TARGET` if your local API uses another URL. The API health check is available at `http://localhost:8000/api/health`.

## Production deployment

Build the frontend with `npm run build`, and run the API with `python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000`. Deploy the static `dist/` files and FastAPI service separately, with your reverse proxy routing `/api/*` to FastAPI. Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` as server-side environment variables; never expose the secret in frontend code.
