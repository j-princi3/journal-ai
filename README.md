# 📓 Journal AI App

An AI-powered journaling app that summarizes your entries and detects mood using Cohere AI and stores entries with Prisma and PostgreSQL. Built with Next.js 15 and TypeScript.

## 🚀 Live Demo

👉 [https://your-vercel-deployment.vercel.app](https://your-vercel-deployment.vercel.app)

## ✍️ Sample Journal Entry

> "Today was a rollercoaster of emotions. I started the morning feeling refreshed and optimistic... I reminded myself that growth often comes through discomfort and that constructive criticism is a necessary part of the process."

### 🤖 AI Summary

> The user had a positive start but faced emotional setbacks due to project feedback. They reflected and regained balance by the end of the day.

### 😌 Mood

> Mixed / Reflective

---

## ⚙️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router + TypeScript)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **AI**: [Cohere Summarize API](https://docs.cohere.com/)
- **Styling**: Tailwind CSS

---

## 🛠️ Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/journal-ai.git
cd journal-ai

# 2. Install dependencies
npm install

# 3. Setup Prisma
npx prisma generate
npx prisma migrate dev --name init

# 4. Create a `.env` file
cp .env.example .env
# Fill in your DATABASE_URL and COHERE_API_KEY

# 5. Run the dev server
npm run dev

## 🔐 .env Configuration

DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/journal-ai
COHERE_API_KEY=your-cohere-api-key
