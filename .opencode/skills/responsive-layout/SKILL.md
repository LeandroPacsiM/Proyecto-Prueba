---
name: responsive-layout
description: Build responsive layouts that adapt seamlessly from mobile to desktop with Matrix styling
license: MIT
compatibility: opencode
---

## What I do
- Create mobile-first responsive grid systems
- Implement flexible container and section layouts
- Add breakpoint-specific styling for tablet/desktop
- Ensure touch-friendly interactions on mobile
- Optimize typography scale for each viewport

## When to use me
Use this skill when building any layout that needs to work across all device sizes.

## Breakpoints

```css
:root {
  /* Mobile first - base styles */
  --breakpoint-sm: 640px;   /* Small phones */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large screens */
}
```

## Container System

```css
.container {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 720px; }
}

@media (min-width: 1024px) {
  .container { max-width: 960px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}
```

## Grid System

```css
.grid {
  display: grid;
  gap: 16px;
}

/* Responsive columns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Mobile-first responsive grid */
@media (min-width: 640px) {
  .sm\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .sm\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}
```

## Flex Layout

```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: 16px; }
.gap-8 { gap: 32px; }

/* Stack on mobile, row on desktop */
.stack-md {
  flex-direction: column;
}

@media (min-width: 768px) {
  .stack-md {
    flex-direction: row;
  }
}
```

## Typography Scale

```css
/* Mobile first */
.text-xs { font-size: 12px; }
.text-sm { font-size: 14px; }
.text-base { font-size: 16px; }
.text-lg { font-size: 18px; }
.text-xl { font-size: 20px; }
.text-2xl { font-size: 24px; }
.text-3xl { font-size: 30px; }
.text-4xl { font-size: 36px; }

/* Desktop scaling */
@media (min-width: 1024px) {
  .text-2xl { font-size: 28px; }
  .text-3xl { font-size: 36px; }
  .text-4xl { font-size: 48px; }
}
```

## Guidelines
- Always design mobile-first, then add desktop enhancements
- Test on real devices when possible
- Use relative units (rem, em, %) over fixed pixels
- Ensure touch targets are at least 44x44px
- Keep line length between 45-75 characters for readability
