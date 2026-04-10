---
name: terminal-ui
description: Create terminal/command-line inspired UI components with Matrix aesthetic
license: MIT
compatibility: opencode
---

## What I do
- Build terminal-style command input interfaces
- Create console output displays with typing effects
- Implement command history navigation
- Add auto-complete suggestions
- Style code blocks and inline code with Matrix theme

## When to use me
Use this skill when you want to add terminal/console elements for a hacker/Matrix feel.

## Terminal Component

### HTML structure
```html
<div class="terminal" data-component="terminal">
  <div class="terminal__header">
    <span class="terminal__title">guest@matrix:~</span>
    <div class="terminal__controls">
      <span class="terminal__btn close"></span>
      <span class="terminal__btn minimize"></span>
      <span class="terminal__btn maximize"></span>
    </div>
  </div>
  <div class="terminal__body">
    <div class="terminal__line">
      <span class="terminal__prompt">guest@matrix:~$</span>
      <span class="terminal__command">whoami</span>
    </div>
    <div class="terminal__output">
      Welcome to the Matrix...
    </div>
  </div>
</div>
```

### CSS styling
```css
.terminal {
  background: var(--bg-secondary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 8px;
  box-shadow: var(--glow-sm);
  font-family: var(--font-mono);
  overflow: hidden;
}

.terminal__header {
  background: var(--bg-tertiary);
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--matrix-green-dim);
}

.terminal__title {
  color: var(--matrix-green);
  font-size: 12px;
}

.terminal__controls {
  display: flex;
  gap: 6px;
}

.terminal__btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
}

.terminal__btn.close { background: #ff5f56; }
.terminal__btn.minimize { background: #ffbd2e; }
.terminal__btn.maximize { background: #27ca40; }

.terminal__body {
  padding: 16px;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

.terminal__line {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.terminal__prompt {
  color: var(--matrix-green);
  white-space: nowrap;
}

.terminal__command {
  color: var(--text-primary);
}

.terminal__output {
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}
```

## Interactive Terminal

### JavaScript command handler
```javascript
class Terminal {
  constructor(element) {
    this.element = element;
    this.history = [];
    this.historyIndex = -1;
    this.commands = {
      'help': () => this.showHelp(),
      'about': () => this.showAbout(),
      'projects': () => this.showProjects(),
      'contact': () => this.showContact(),
      'clear': () => this.clear()
    };
    this.init();
  }
  
  init() {
    this.input = document.createElement('input');
    this.input.className = 'terminal__input';
    this.input.addEventListener('keydown', (e) => this.handleKeydown(e));
    this.body.appendChild(this.input);
  }
  
  handleKeydown(e) {
    if (e.key === 'Enter') {
      const command = this.input.value.trim().toLowerCase();
      this.history.push(command);
      this.execute(command);
      this.input.value = '';
    }
  }
  
  execute(cmd) {
    const handler = this.commands[cmd] || this.unknown;
    handler.call(this, cmd);
  }
}
```

## Code Block Styling

### Syntax highlighting base
```css
.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 4px;
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 14px;
  overflow-x: auto;
}

.code-block .keyword { color: #ff79c6; }
.code-block .string { color: #f1fa8c; }
.code-block .comment { color: #6272a4; }
.code-block .function { color: #8be9fd; }
.code-block .variable { color: var(--matrix-green); }
```

## Guidelines
- Make terminal interactive when possible
- Support keyboard navigation (arrow keys for history)
- Add realistic cursor blink
- Include easter egg commands for fun
- Ensure terminal is responsive on mobile
