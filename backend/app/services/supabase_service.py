import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Validate environment variables
if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing required Supabase environment variables. Please check your .env file.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def save_generated_content(title: str, content: str):
    """Save AI-generated content to Supabase"""
    supabase.table("generated_content").insert({
        "title": title,
        "content": content
    }).execute()

def test_connection() -> bool:
    """Test the Supabase connection by fetching a single row"""
    try:
        print(f"Testing Supabase connection with URL: {SUPABASE_URL[:30]}...")
        response = supabase.table("generated_content").select("*").limit(1).execute()
        data = response.data
        print("Supabase connection successful!")
        print(f"Retrieved {len(data)} rows from generated_content table")
        return True
    except Exception as e:
        print(f"Supabase connection failed with error: {str(e)}")
        print("Please check your:")
        print("1. SUPABASE_URL in .env file")
        print("2. SUPABASE_KEY in .env file")
        print("3. Network connection")
        print("4. If the 'generated_content' table exists in your Supabase project")
        return False