from app.services.supabase_service import save_generated_content

def test_write():
    try:
        test_title = "Test Content"
        test_content = "This is a test content entry"
        save_generated_content(test_title, test_content)
        print("✅ Test write successful!")
    except Exception as e:
        print(f"❌ Test write failed: {str(e)}")

if __name__ == "__main__":
    test_write()