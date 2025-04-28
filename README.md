# 📁 nantasu-site

A personal website project with **React (Frontend)** and **Node.js + Express (Backend)**

---

## 📦 Folder Structure

```
nantasu-site/
├── frontend/              # ReactJS + TailwindCSS
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/               # Node.js + Express
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository & enter the folder
```bash
git clone <your-repo-url>
cd nantasu-site
```

---

## 🖥 Frontend Setup (React + Vite + TailwindCSS)

### 1. Create frontend project
```bash
mkdir frontend
cd frontend
npm create vite@latest . -- --template react
npm install
```

### 2. Install TailwindCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind in `tailwind.config.js`
```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind to `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Run frontend
```bash
npm run dev
```
Visit: `http://localhost:5173`

---

## 🔧 Backend Setup (Node.js + Express)

### 1. Create backend folder & init Node
```bash
cd ..
mkdir backend
cd backend
npm init -y
npm install express
```

### 2. Create a simple server in `server.js`
```js
// server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
```

### 3. Run backend
```bash
node server.js
```
Visit: `http://localhost:5000`

---

## ✅ Next Steps
- Connect Frontend ↔ Backend
- Add route/controllers in `backend/`
- Add project sections, contact form, and animations in `frontend/`

---

Made with 💻 by Worawit Nantasu
