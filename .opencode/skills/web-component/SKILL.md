---
name: web-component
description: Create reusable web components following modern standards and best practices
license: MIT
compatibility: opencode
---

## What I do
- Create semantic HTML5 components with proper accessibility
- Write modular CSS with BEM naming or CSS custom properties
- Implement vanilla JavaScript components or framework-specific ones
- Ensure responsive design and mobile-first approach
- Add ARIA attributes when needed for screen readers

## When to use me
Use this skill when building UI components like headers, footers, cards, navigation, forms, or any reusable element.

## Component structure

### HTML
- Use semantic tags (header, nav, main, section, article, footer)
- Include proper heading hierarchy (h1 → h2 → h3)
- Add data attributes for JS hooks (data-component, data-action)

### CSS
- Mobile-first media queries
- CSS custom properties for theming
- Consistent spacing scale (4px, 8px, 16px, 32px)
- Color palette with CSS variables

### JavaScript
- ES6+ syntax with const/let
- Event delegation for dynamic elements
- Clean separation of concerns

## Example component pattern

```html
<div class="card" data-component="card">
  <div class="card__header">...</div>
  <div class="card__body">...</div>
  <div class="card__footer">...</div>
</div>
```
