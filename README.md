# Navaneed P — AI Engineer Portfolio

A modern, terminal-futurist portfolio landing page for Navaneed P, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Identity

**Aesthetic:** Terminal-Futurist — Raw, precise, and intelligent. A research lab's internal dashboard crossed with a hacker's notebook.

**Color Palette:**
- Background: `#07090F`
- Surface: `#0D1117`
- Accent (Teal): `#2DD4BF`
- Accent 2 (Indigo): `#818CF8`
- Accent 3 (Amber): `#F59E0B`
- Text Primary: `#E6EDF3`
- Text Muted: `#7D8590`

**Fonts:**
- Body & UI: `Space Grotesk` (Google Fonts)
- Code & Labels: `JetBrains Mono` (Google Fonts)

## 🚀 Features

- **Hero Section** - Animated introduction with typewriter effect and stats counter
- **Tech Stack Marquee** - Auto-scrolling technology badges
- **About Section** - Personal bio with terminal-style interface
- **Projects Section** - Showcase of AI/ML projects with descriptions
- **Experience Timeline** - Professional experience with timeline visualization
- **Skills Section** - Technical skills organized by category
- **Achievements Section** - Awards and certifications display
- **Contact/Footer** - Call-to-action and contact information
- **Custom Cursor** - Teal circular cursor that expands on hover
- **Smooth Animations** - Framer Motion for all transitions and interactions
- **Fully Responsive** - Mobile-first design with Tailwind CSS
- **Performance Optimized** - GPU-composited animations, lazy loading

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📦 Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## 🏗 Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── FadeIn.tsx
│   ├── TypewriterText.tsx
│   ├── CountUp.tsx
│   ├── TerminalWindow.tsx
│   ├── HireButton.tsx
│   ├── GhostButton.tsx
│   └── CustomCursor.tsx
├── sections/            # Page sections
│   ├── HeroSection.tsx
│   ├── TechStackMarquee.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── AchievementsSection.tsx
│   └── ContactSection.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles with CSS variables
```

## 🎯 Key Components

### FadeIn
Animated wrapper using Framer Motion's `whileInView` trigger.
```tsx
<FadeIn delay={0.2} y={20} duration={0.7}>
  Content here
</FadeIn>
```

### TypewriterText
Character-by-character text animation with blinking cursor.
```tsx
<TypewriterText 
  text="AI Engineer & ML Researcher"
  delay={500}
  speed={40}
/>
```

### CountUp
Numerical animation triggered on scroll.
```tsx
<CountUp target={6} suffix="+" duration={2} />
```

### TerminalWindow
Terminal-style UI for code/output display.
```tsx
<TerminalWindow 
  lines={terminalLines}
  title="navaneed@portfolio:~"
/>
```

## 🎨 Customization

Edit these files to customize:
- **Colors:** `src/index.css` (CSS variables)
- **Content:** Individual section components
- **Fonts:** `index.html` (Google Fonts link) and `tailwind.config.ts`
- **Animations:** Components use Framer Motion delays and transitions

## 📱 Responsive Design

The portfolio is built mobile-first and fully responsive:
- Mobile: 375px+
- Tablet: 640px+
- Desktop: 768px+
- Wide: 1024px+

## ⚡ Performance

- GPU-composited animations (transform, opacity only)
- `will-change` optimization for marquee
- Lazy loading support
- Smooth scrolling behavior
- Custom cursor with pointer-events: none

## 🔗 Contact

- Email: navaneedp29@gmail.com
- LinkedIn: [navaneed-p](https://linkedin.com/in/navaneed-p-97169b299)
- GitHub: [navvv29](https://github.com/navvv29)

## 📄 License

© 2026 Navaneed P. All rights reserved.
