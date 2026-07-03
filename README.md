# 🍽️ Food‑A‑Holic — AI Recipe Generator

Food‑A‑Holic is a sleek, vibrant web app that generates creative recipes based on user‑provided ingredients.  
It features a **glass‑neumorphic UI**, elegant typography, and real‑time recipe generation powered by the **Grok API**.

---

## 🌟 Features
- 🧠 AI‑powered recipe generation using Grok API  
- 💎 Sleek glass + neumorphic design with vibrant gradients  
- 🧾 Recipe history with elegant cards and smooth fonts  
- ⚡ Responsive layout for desktop and mobile  
- 🎨 Customizable fonts and color themes  

---

## 🧰 Tech Stack
- **Frontend:** React.js, CSS3 (Glassmorphism + Neumorphism)  
- **Backend:** Node.js / Express (for API proxy if needed)  
- **Styling:** Poppins / Raleway fonts, Gradient backgrounds  
- **Deployment:** InfinityFree / Vercel / Netlify  

---

## 🔑 Grok API Key Setup
1. Sign up and get your **Grok API key**.  
2. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```
3. Add your API key:
   ```env
   REACT_APP_GROK_API_KEY=your_api_key_here
   ```
4. In your code, access it via:
   ```javascript
   const apiKey = process.env.REACT_APP_GROK_API_KEY;
   ```

⚠️ **Important:** Never commit your `.env` file to GitHub. Add it to `.gitignore`.

---

## 🚀 Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/food-a-holic.git
   cd food-a-holic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm start (in backend)
   npm run dev (in frontend)
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🛠️ Troubleshooting
- **Favicon not showing:** ensure `favicon.ico` is inside `/public` and linked in `<head>`.  
- **Stars appearing in recipe text:** use regex replacements in `RecipeForm.jsx` to clean Markdown.  
- **Font mismatch:** verify Google Fonts link in `index.html`.  
- **API errors:** check `.env` file and confirm `REACT_APP_GROK_API_KEY` is set correctly.

---

## 💬 Credits
Developed by **Abinithi KB**  
Guided by **Webstack Academy Internship (2026)**  
Design inspired by modern glass‑neumorphic UI trends.

---

## 📜 License
This project is licensed under the MIT License — feel free to use and modify.
