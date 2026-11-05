# Modern Full-Stack Developer Portfolio

A responsive, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed with a modern dark aesthetic, subtle glow accents, and glassmorphic components.

---

## ⚡ Quick Start

```bash
# 1. Navigate to the project directory
cd "C:\Users\rampe_u1xe9wi\.gemini\antigravity\scratch\portfolio"

# 2. Run the local development server
npm run dev

# 3. Build for production
npm run build
```

Then open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML entry with Inter & JetBrains fonts
├── package.json               # Dependencies & scripts
├── tailwind.config.js         # Tailwind configuration & custom dark theme
├── vite.config.js             # Vite development & build setup
├── src/
│   ├── main.jsx               # Application entry
│   ├── App.jsx                # Main layout composition
│   ├── index.css              # Tailwind directives & glassmorphic styling
│   ├── data/
│   │   └── portfolioData.js   # ⭐️ SINGLE SOURCE OF TRUTH (All your info goes here!)
│   └── components/
│       ├── Navbar.jsx         # Header with blur, logo, nav links & hire badge
│       ├── Hero.jsx           # High-impact headline, CTAs & code card preview
│       ├── About.jsx          # Philosophy, engineering pillars & quick facts
│       ├── Skills.jsx         # Categorized skills with proficiency meters
│       ├── Projects.jsx       # Case studies with live demos & repo links
│       ├── Timeline.jsx       # Work experience & education milestones
│       ├── CertificatesTestimonials.jsx # Credentials & peer endorsements
│       ├── Contact.jsx        # Interactive form with feedback state & socials
│       └── Footer.jsx         # Footer branding, links & back-to-top button
```

---

## 🛠️ Personalizing Your Portfolio

All personal information, projects, links, skills, and experiences are stored in a single easy-to-edit file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

### What you can customize:
1. **Personal Information:** Name, role tagline, bio, location, email, and social media handles.
2. **Featured Projects:** Replace the sample case studies with your own repositories, screenshots, live demo links, and architectural highlights.
3. **Skills & Categories:** Adjust skills, proficiency percentages, and years of experience across Frontend, Backend, Cloud, and DevOps.
4. **Experience & Education:** Update your company history, job titles, achievements, and degrees.
5. **Certifications & Recommendations:** Add your verified AWS, Google Cloud, Meta, or CNCF certifications, along with testimonials.

---

## 🚀 Deployment Options

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder into Netlify Drop, or connect via Git.
```

### Deploy to GitHub Pages
Add `"base": "/<repo-name>/"` to `vite.config.js` and push the build to `gh-pages`.
