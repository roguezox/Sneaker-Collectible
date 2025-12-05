# Sneaker Collectibles Landing Page

This document covers the architecture, components, and patterns used in this React landing page.

---

## Tech Stack

A modern, production-ready stack:

- **React 18** with **TypeScript** for type safety
- **Vite** as the build tool — fast HMR and optimized builds
- **Tailwind CSS** for utility-first styling
- **Lucide React** for clean, consistent icons
- **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for component variants

---

## Project Structure

```
src/
├── components/ui/     → Reusable UI primitives (Button, Card)
├── lib/utils.ts       → Helper functions
├── screens/Collers/   → Main page component
└── index.tsx          → App entry
```

The `components/ui` folder contains atomic components. The main page lives in `screens/` — scalable for multi-page apps.

---

## Components

### Button

A flexible Button using the **CVA pattern** for type-safe variants:

- **6 style variants**: default, destructive, outline, secondary, ghost, link
- **4 sizes**: default, sm, lg, icon
- **Polymorphic support**: Can render as a link using `asChild` prop

Uses `forwardRef` for proper ref handling and spreads all native button props.

### Card System

A composable set of 5 components:

`Card` → `CardHeader` / `CardContent` / `CardFooter` → `CardTitle` / `CardDescription`

This compound component pattern makes building different layouts straightforward.

### Utility: `cn()`

Merges Tailwind classes intelligently:

```ts
cn("p-4 text-red-500", "p-2")  // → "p-2 text-red-500"
```

Uses `clsx` for conditionals and `tailwind-merge` to handle conflicts.

---

## Page Sections

The landing page has 11 sections:

1. **Header** — Sticky nav with mobile menu
2. **Hero** — Main CTA with product image
3. **Features** — 3-column benefits grid
4. **Best Products** — Cards on dark background
5. **Why Join Us** — Video preview + checklist
6. **Testimonials** — Horizontal scroll with arrows
7. **Grow Collection** — Layered browser mockups
8. **Stats** — World map with markers
9. **Events** — Timeline with wave background
10. **CTA** — Final call-to-action
11. **Footer** — Links and socials

---

## Design Patterns

### Responsive Design

Mobile-first with Tailwind breakpoints:

```tsx
className="text-3xl sm:text-4xl lg:text-5xl"
```

### Layered Elements

Visual depth using z-index stacking:

```tsx
<div className="relative">
  <img className="absolute z-0" src="/bg.png" />
  <div className="relative z-10">Content</div>
</div>
```

### Browser Window Effect

macOS-style window with traffic light dots:

```tsx
<div className="rounded-2xl border-4 shadow-2xl">
  <div className="h-8 bg-gray-100 flex gap-2 px-4">
    <div className="w-3 h-3 rounded-full bg-red-400" />
    <div className="w-3 h-3 rounded-full bg-yellow-400" />
    <div className="w-3 h-3 rounded-full bg-green-400" />
  </div>
</div>
```

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `class-variance-authority` | Type-safe component variants |
| `@radix-ui/react-slot` | Polymorphic component support |
| `clsx` + `tailwind-merge` | Smart class merging |
| `lucide-react` | Icon library |

---

## Running the Project

```bash
npm install
npm run dev     # → http://localhost:5173
npm run build   # Production build
```

---

## Assets

Image assets for decorative backgrounds, product photos, and UI mockups are stored in `/assets` and referenced via absolute paths. All assets are imported from given figma file.
