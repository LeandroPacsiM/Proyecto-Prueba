---
name: animation-utils
description: Utility animations and effects for smooth, performant Matrix-style motion
license: MIT
compatibility: opencode
---

## What I do
- Create reusable CSS keyframe animations
- Build JavaScript animation utilities with requestAnimationFrame
- Implement scroll-triggered animations with Intersection Observer
- Add parallax effects for depth
- Optimize animations for 60fps performance

## When to use me
Use this skill when adding motion and life to the interface without compromising performance.

## Core Animations

### Fade animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Pulse and glow
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 10px var(--matrix-green-glow);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 20px var(--matrix-green-glow);
  }
}

@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 5px var(--matrix-green);
  }
  50% {
    text-shadow: 0 0 20px var(--matrix-green), 0 0 30px var(--matrix-green);
  }
}
```

### Slide animations
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Matrix-specific effects
```css
@keyframes flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.1;
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes digitalRain {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100vh;
  }
}
```

## Animation Classes

```css
/* Utility classes */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}

.animate-flicker {
  animation: flicker 4s linear infinite;
}

/* Delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }
.delay-1000 { animation-delay: 1000ms; }

/* Duration */
.duration-fast { animation-duration: 0.3s; }
.duration-normal { animation-duration: 0.5s; }
.duration-slow { animation-duration: 1s; }
```

## Scroll Animations

### Intersection Observer setup
```javascript
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### CSS for scroll animations
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-in-view {
  opacity: 1;
  transform: translateY(0);
}
```

## Performance Guidelines

### Use transform and opacity only
```css
/* Good - GPU accelerated */
.element {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
}

/* Bad - triggers layout */
.element {
  left: 0;
  margin-left: 0;
  transition: left 0.3s, margin-left 0.3s;
}
```

### Will-change hint
```css
.animated-element {
  will-change: transform, opacity;
}

/* Remove after animation completes */
.animated-element.done {
  will-change: auto;
}
```

### Pause animations when not visible
```javascript
// Pause animations in background
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.documentElement.style.setProperty('--animation-play-state', 'paused');
  } else {
    document.documentElement.style.setProperty('--animation-play-state', 'running');
  }
});
```

```css
* {
  animation-play-state: var(--animation-play-state, running);
}
```

## Guidelines
- Keep animations under 300ms for UI feedback
- Use easing curves for natural motion (ease-out for entering, ease-in for exiting)
- Respect `prefers-reduced-motion` media query
- Limit simultaneous animations to avoid overwhelming users
- Test on lower-end devices for smooth performance
