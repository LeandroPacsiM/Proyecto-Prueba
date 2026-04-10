---
name: project-showcase
description: Display portfolio projects with interactive cards, filters, and Matrix-style hover effects
license: MIT
compatibility: opencode
---

## What I do
- Create project card components with consistent styling
- Implement project filtering by category/tech
- Add hover effects with glitch and glow animations
- Build project modal/lightbox for details
- Include tech stack badges and live/repo links

## When to use me
Use this skill when showcasing portfolio projects in a visually engaging way.

## Project Card Structure

```html
<article class="project-card" data-category="web-app" data-tech="react,node">
  <div class="project-card__image">
    <img src="project-thumb.jpg" alt="Project name" loading="lazy">
    <div class="project-card__overlay">
      <a href="#" class="project-card__link">View Demo</a>
    </div>
  </div>
  <div class="project-card__content">
    <h3 class="project-card__title">Project Name</h3>
    <p class="project-card__description">Brief description of the project...</p>
    <div class="project-card__tech">
      <span class="tech-badge">React</span>
      <span class="tech-badge">Node.js</span>
      <span class="tech-badge">MongoDB</span>
    </div>
    <div class="project-card__links">
      <a href="#" class="project-card__btn">
        <span class="icon">🔗</span> Live Demo
      </a>
      <a href="#" class="project-card__btn">
        <span class="icon">📦</span> Source
      </a>
    </div>
  </div>
</article>
```

## Matrix Card Styling

```css
.project-card {
  background: var(--bg-secondary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: var(--matrix-green);
  box-shadow: var(--glow-md);
  transform: translateY(-5px);
}

.project-card__image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-card__image img {
  transform: scale(1.05);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__link {
  color: var(--matrix-green);
  text-decoration: none;
  font-size: 18px;
  text-shadow: var(--glow-sm);
}
```

## Tech Badges

```css
.tech-badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 20px;
  color: var(--matrix-green);
  font-size: 12px;
  font-family: var(--font-mono);
  transition: all 0.2s ease;
}

.tech-badge:hover {
  background: var(--matrix-green);
  color: var(--bg-primary);
  box-shadow: var(--glow-sm);
}
```

## Filter System

```html
<div class="project-filter">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="web-app">Web Apps</button>
  <button class="filter-btn" data-filter="mobile">Mobile</button>
  <button class="filter-btn" data-filter="game">Games</button>
</div>
```

```css
.filter-btn {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid var(--matrix-green-dim);
  color: var(--text-secondary);
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--matrix-green);
  color: var(--bg-primary);
  box-shadow: var(--glow-sm);
}
```

```javascript
// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Filter projects
    const filter = btn.dataset.filter;
    projects.forEach(project => {
      if (filter === 'all' || project.dataset.category === filter) {
        project.style.display = 'block';
        project.animate([
          { opacity: 0, transform: 'scale(0.9)' },
          { opacity: 1, transform: 'scale(1)' }
        ], { duration: 300 });
      } else {
        project.style.display = 'none';
      }
    });
  });
});
```

## Guidelines
- Limit projects to 6-12 best works (quality over quantity)
- Include diverse project types to show range
- Always provide live demo when possible
- Use high-quality thumbnails (1200x675px minimum)
- Write clear, concise descriptions (2-3 sentences)
- Link to both demo and source code
