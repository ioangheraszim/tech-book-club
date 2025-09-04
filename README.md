# 📚 Tech Book Club – One Page React Project

A sleek, animated single-page React project.
Designed to showcase a modern landing page for a subscription-based tech book club.

---

## 🚀 Features

- ⚛️ React + Vite for blazing-fast development
- 🎨 SCSS Modules with BEM naming for clean, scoped styles
- 🎬 Intersection Observer API and CSS for animations
- 📱 Responsive layout with reusable components
- 🧠 Semantic HTML and accessible design

---

## Live site here: [Tech Book Club Landing Page](https://ioangheraszim.github.io/tech-book-club/)

---

## Screenshot

![Desktop](./public/screenshot/desktop.PNG)
![Mobile](./public/screenshot/mobile.PNG)

---

## Challenge

The users should be able to:

- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements
- ✅ Experience smooth scroll-triggered animations
- ✅ Interact with a clean, accessible UI

---

## Tech Stack

| Tool                 | Purpose                         |
| -------------------- | ------------------------------- |
| React                | UI framework                    |
| Vite                 | Build tool & dev server         |
| SCSS Modules         | Scoped styling                  |
| Vitest               | Unit & component testing        |
| Testing Library      | DOM-based test utilities        |
| IntersectionObserver | Scroll-based animation triggers |

---

## Testing

Vitest is configured with `jsdom` and `jest-dom` matchers. All components have baseline tests for rendering and structure.

### ✅ Tested Components

- `Hero`
- `Features`
- `Journey`
- `Membership`
- `Testimonials`

### 🔧 Setup

```bash
npm install
npm run dev
npm run test
```

---

## Performance Optimisation

- Lazy loading with React.lazy() and Suspense

- Terser-based minification (drop_console, drop_debugger)

- Chunk splitting for below-the-fold components

- No sourcemaps in production for smaller bundles

## Author

- Website - [Ioan Gheraszim](https://github.com/ioangheraszim)
- Portfolio - [mreone.dev](https://ioangheraszim.github.io/portofolio/)
