# Promptly Frontend

A modern web application built with Next.js for AI-powered content generation.

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com/) for components
- [Supabase](https://supabase.com/) for authentication and database
- [Geist](https://vercel.com/font) font family

## 🛠️ Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Supabase credentials
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/           # App router pages
├── components/    # React components
├── lib/          # Utility functions
└── styles/       # CSS styles
```

## 🔧 Development

- Edit `app/page.tsx` to modify the home page
- Components are located in `components/` directory
- Styles use Tailwind CSS

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Supabase Documentation](https://supabase.com/docs)

## 🚀 Deployment

Deploy easily using [Vercel](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/promptly)

## 📝 License

MIT License
