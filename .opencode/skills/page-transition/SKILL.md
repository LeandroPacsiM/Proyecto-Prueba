---
name: page-transition
description: Create smooth page transitions with Matrix-style fade, glitch, and code decode effects
license: MIT
compatibility: opencode
---

## What I do
- Implement page load transitions with fade-in effects
- Create navigation transitions between sections
- Add glitch transition effects between pages
- Build code decode text animations (scramble → descramble)
- Handle smooth scroll with easing

## When to use me
Use this skill when implementing navigation or page changes that need Matrix-style flair.

## Page Load Transition

### Fade in on load
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    filter: blur(10px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

body {
  animation: fadeIn 1.5s ease-out;
}
```

### Staggered content reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  animation: revealUp 0.8s ease-out forwards;
}

.reveal-delay-1 { animation-delay: 0.1s; }
.reveal-delay-2 { animation-delay: 0.2s; }
.reveal-delay-3 { animation-delay: 0.3s; }

@keyframes revealUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Code Decode Effect

### JavaScript text scramble
```javascript
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function decodeText(element, finalText, duration = 2000) {
  let iterations = 0;
  const maxIterations = duration / 50;
  
  const interval = setInterval(() => {
    element.textContent = finalText
      .split('')
      .map((char, index) => {
        if (index < iterations) return finalText[index];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');
    
    iterations++;
    
    if (iterations > maxIterations) clearInterval(interval);
  }, 50);
}

// Usage: decodeText(element, 'Welcome to the Matrix')
```

## Smooth Scroll

### CSS smooth scroll
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed header */
}
```

### JavaScript enhanced scroll
```javascript
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
```

## Navigation Transition

### Active section indicator
```css
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--matrix-green);
  transition: width 0.3s ease;
}

.nav-link.active {
  color: var(--matrix-green);
}

.nav-link.active::after {
  width: 100%;
}
```

## Guidelines
- Keep transitions under 500ms for responsiveness
- Use easing functions for natural motion
- Provide reduced-motion alternative for accessibility
- Trigger transitions on intersection observer for scroll animations
