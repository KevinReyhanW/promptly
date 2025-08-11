# Promptly

Promptly is a full-stack AI-powered content generation app that lets you:
- Create prompts
- Generate AI content (text/images)
- Store results in Supabase for future use

## 🚀 Tech Stack
**Frontend**
- [Next.js](https://nextjs.org/) with [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) (authentication + database)

**Backend**
- [FastAPI](https://fastapi.tiangolo.com/)
- [Supabase Python Client](https://github.com/supabase-community/supabase-py)
- [OpenAI API](https://platform.openai.com/)
- [Stable Diffusion API](https://stablediffusionapi.com/)

---

## 📂 Project Structure
```
promptly/
├── frontend/   # Next.js app
├── backend/    # FastAPI app
```

---

## ⚙️ Setup

### 1. Clone repo
```bash
git clone https://github.com/<your-username>/promptly.git
cd promptly
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🔑 Environment Variables

**Frontend (`frontend/.env.local`)**
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

**Backend (`backend/.env`)**
```
OPENAI_API_KEY=...
STABLE_DIFFUSION_API_KEY=...
SUPABASE_URL=...
SUPABASE_KEY=...
```

---

## 📸 Screenshots
![Promptly UI](docs/screenshot.png)

---

## 📜 License
MIT License
