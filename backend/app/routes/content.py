from fastapi import APIRouter
from app.services.open_ai import generate_text
from app.services.supabase_service import save_generated_content

router = APIRouter()

@router.post("/generate")
def generate(prompt: str, title: str):
    """Generate AI text and save to Supabase"""
    content = generate_text(prompt)
    save_generated_content(title, content)
    return {"title": title, "content": content}
