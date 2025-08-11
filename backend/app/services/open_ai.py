import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_text(prompt: str) -> str:
    """Generate text using OpenAI GPT"""
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message["content"]
