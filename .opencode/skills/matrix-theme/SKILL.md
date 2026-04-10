---
name: matrix-theme
description: Apply Matrix movie aesthetic with iconic green/black color scheme and cyberpunk styling
license: MIT
compatibility: opencode
---

## What I do
- Define Matrix color palette (neon green, black, dark gray)
- Create CSS custom properties for theming
- Implement glowing text effects and borders
- Add scanline and CRT monitor effects
- Style typography with monospace/terminal fonts

## When to use me
Use this skill when you want to apply the Matrix aesthetic to any component or section.

## Color Palette

```css
:root {
  /* Primary Matrix colors */
  --matrix-green: #00ff41;
  --matrix-green-dim: #008f11;
  --matrix-green-glow: #00ff4180;
  --matrix-black: #000000;
  --matrix-dark: #0a0a0a;
  --matrix-gray: #1a1a1a;
  
  /* Text colors */
  --text-primary: #00ff41;
  --text-secondary: #00cc33;
  --text-dim: #006611;
  
  /* Background */
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --bg-tertiary: #1a1a1a;
  
  /* Effects */
  --glow-sm: 0 0 5px var(--matrix-green-glow);
  --glow-md: 0 0 10px var(--matrix-green-glow);
  --glow-lg: 0 0 20px var(--matrix-green-glow);
  --glow-xl: 0 0 40px var(--matrix-green-glow);
}
```

## Typography

```css
/* Primary font - monospace for code/terminal feel */
--font-mono: 'Courier New', 'Consolas', monospace;

/* Secondary font - clean sans-serif for readability */
--font-sans: 'Arial', 'Helvetica', sans-serif;
```

## Common effects

### Glowing text
```css
.matrix-text {
  color: var(--matrix-green);
  text-shadow: var(--glow-md);
}
```

### Glowing border
```css
.matrix-border {
  border: 1px solid var(--matrix-green);
  box-shadow: var(--glow-sm), inset 0 0 10px var(--matrix-green-glow);
}
```

### Scanline effect
```css
.matrix-scanlines {
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
```

## Guidelines
- Use green sparingly for emphasis (buttons, links, highlights)
- Keep backgrounds dark for contrast
- Add subtle animations for alive feel
- Ensure text is still readable (test contrast ratios)
- Don't overuse glow effects (can cause eye strain)
