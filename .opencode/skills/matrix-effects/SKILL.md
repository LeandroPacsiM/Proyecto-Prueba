---
name: matrix-effects
description: Implement iconic Matrix visual effects (digital rain, glitch, typing animations)
license: MIT
compatibility: opencode
---

## What I do
- Create digital rain canvas animation (falling characters)
- Implement glitch text effects on hover
- Add typing animation for hero text
- Create cursor blink effects
- Build particle/code particle systems

## When to use me
Use this skill when you want to add dynamic Matrix-style visual effects to enhance the user experience.

## Digital Rain Effect

### Canvas implementation
```javascript
// Falling katakana/latin characters
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

// Character set (katakana + latin + numbers)
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Animation loop
function draw() {
  // Semi-transparent black for trail effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00ff41';
  ctx.font = '14px monospace';
  
  // Draw characters
  drops.forEach((x, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, x * 14, y * 14);
    
    if (y * 14 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}
```

## Glitch Effect

### CSS glitch animation
```css
@keyframes glitch {
  0% {
    text-shadow: 2px 0 #ff00c1, -2px 0 #01ffff;
  }
  25% {
    text-shadow: -2px 0 #ff00c1, 2px 0 #01ffff;
  }
  50% {
    text-shadow: 2px 0 #ff00c1, -2px 0 #01ffff;
  }
  75% {
    text-shadow: -2px 0 #ff00c1, 2px 0 #01ffff;
  }
  100% {
    text-shadow: 2px 0 #ff00c1, -2px 0 #01ffff;
  }
}

.glitch {
  position: relative;
}

.glitch:hover {
  animation: glitch 0.3s infinite;
}
```

## Typing Animation

### CSS typing effect
```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid var(--matrix-green);
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
}
```

## Cursor Effects

### Blinking cursor
```css
.matrix-cursor {
  display: inline-block;
  width: 10px;
  height: 20px;
  background: var(--matrix-green);
  animation: blink 1s infinite;
}
```

## Performance guidelines
- Use `requestAnimationFrame` for smooth animations
- Limit canvas size to viewport
- Pause animations when tab is not visible
- Provide option to disable effects (accessibility)
- Keep frame rate above 60fps
