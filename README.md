# Adharsh Donthagani — Portfolio

Built with **Next.js 14** + **Tailwind CSS** · Dark theme, clean & professional.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
app/
  layout.tsx       # Root layout + fonts
  page.tsx         # Main page (assembles all sections)
  globals.css      # Global styles, animations, scrollbar

components/
  Navbar.tsx       # Sticky nav with mobile menu
  Hero.tsx         # Hero section with photo placeholder
  Skills.tsx       # Skills grouped by category
  Tools.tsx        # Tools grid
  Experience.tsx   # Timeline experience
  Projects.tsx     # Project cards
  Contact.tsx      # Contact cards + CTA
  Footer.tsx       # Footer with social links
```

## 🖼️ Adding Your Photo

Replace the avatar placeholder in `components/Hero.tsx`:

```tsx
// Find this block and replace with:
<Image
  src="/photo.jpg"       // ← put your photo in /public/photo.jpg
  alt="Adharsh Donthagani"
  fill
  className="object-cover"
/>
```

Then add `import Image from "next/image"` at the top.

## 🔗 Update Links

- LinkedIn: search `adharshdonthagani` in `Hero.tsx`, `Contact.tsx`, `Footer.tsx`
- Email: search `adharshdont hagani18` — remove the space
- Phone: already set to `+91 9666207144`
- Project repo links: update in `Projects.tsx`

## 🎨 Customization

Colors are in `tailwind.config.ts`:
- `accent: "#6ee7b7"` — main green accent
- `accent2: "#38bdf8"` — blue accent
- `bg: "#0a0a0f"` — background
