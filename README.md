# 📚 Page Vibe

A clean and simple book tracking app where you can browse books, mark what you've read, and save what you want to read next. Everything stays saved even after you close the tab — no account needed.

🌐 **Live Site:** [page-vibe.netlify.app](https://page-vibe.netlify.app/)

---

## What it does

- Browse a collection of popular books
- Add books to your **Read List** or **Wish List**
- Sort your lists by pages or rating
- Get instant toast notifications on actions
- All data saved to localStorage — no backend needed

---

## Built with

- **React 18** + **Vite**
- **Tailwind CSS** + **DaisyUI**
- **React Router** for navigation
- **Context API** for global state
- **React Toastify** for notifications

---

## Project Structure

```
src/
├── components/
│   ├── HomePage/        # Banner & book grid
│   ├── ListedBooks/     # Read & Wish list views
│   └── Shared/          # Navbar, Footer, BookCard
├── context/             # BookContext + BookProvider
├── pages/               # Homepage, Books, BookDetails, ErrorPage
├── routes/              # App routes
└── utils/
    └── localDB.js       # localStorage helpers
```

---

## Getting Started

```bash
git clone https://github.com/your-username/page-vibe.git
cd page-vibe
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/books` | Read & Wish lists |
| `/books/:id` | Book details |
| `*` | 404 page |

---

