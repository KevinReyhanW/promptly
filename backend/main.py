from fastapi import FastAPI
from dotenv import load_dotenv
from app.services.supabase_service import test_connection

import os

from app.routes import content

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Promptly Backend",
    description="Backend API for generating and storing AI content",
    version="1.0.0"
)

# Include routes
app.include_router(content.router, prefix="/content", tags=["Content"])

@app.get("/")
def root():
    return {"message": "Backend is running!"}

from app.services.supabase_service import test_connection

if test_connection():
    print("Ready to use Supabase!")
else:
    print("Please check your Supabase configuration")