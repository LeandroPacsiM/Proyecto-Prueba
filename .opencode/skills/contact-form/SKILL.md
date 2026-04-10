---
name: contact-form
description: Build contact forms with Matrix styling, validation, and multiple contact options
license: MIT
compatibility: opencode
---

## What I do
- Create styled contact form with terminal aesthetic
- Implement client-side validation with error messages
- Add success/error state animations
- Include alternative contact methods (email, social links)
- Integrate with form services (Formspree, EmailJS, Netlify Forms)

## When to use me
Use this skill when building the contact section of a portfolio with a hacker/Matrix theme.

## Form Structure

```html
<section id="contact" class="contact-section">
  <div class="container">
    <h2 class="section-title">Initialize Connection</h2>
    <p class="section-subtitle">Send a transmission through the matrix</p>
    
    <div class="contact-grid">
      <!-- Contact Form -->
      <form class="matrix-form" id="contact-form" action="https://formspree.io/f/your-id" method="POST">
        <div class="form-group">
          <label for="name" class="form-label">
            <span class="label-prompt">></span> Identity
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            class="form-input" 
            required
            autocomplete="name"
            placeholder="Enter your name"
          >
          <span class="form-error" id="name-error"></span>
        </div>
        
        <div class="form-group">
          <label for="email" class="form-label">
            <span class="label-prompt">></span> Transmission Address
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-input" 
            required
            autocomplete="email"
            placeholder="neo@matrix.com"
          >
          <span class="form-error" id="email-error"></span>
        </div>
        
        <div class="form-group">
          <label for="message" class="form-label">
            <span class="label-prompt">></span> Message Data
          </label>
          <textarea 
            id="message" 
            name="message" 
            class="form-input form-textarea" 
            rows="5"
            required
            placeholder="Enter your message..."
          ></textarea>
          <span class="form-error" id="message-error"></span>
        </div>
        
        <button type="submit" class="form-submit">
          <span class="btn-text">Transmit</span>
          <span class="btn-loader" hidden>
            <span class="loader-dot"></span>
            <span class="loader-dot"></span>
            <span class="loader-dot"></span>
          </span>
        </button>
        
        <div class="form-status" id="form-status" hidden></div>
      </form>
      
      <!-- Alternative Contact -->
      <div class="contact-info">
        <h3 class="contact-title">Direct Connection</h3>
        
        <div class="contact-method">
          <span class="contact-icon">📧</span>
          <div>
            <h4>Email</h4>
            <a href="mailto:neo@matrix.com" class="contact-link">neo@matrix.com</a>
          </div>
        </div>
        
        <div class="contact-method">
          <span class="contact-icon">💼</span>
          <div>
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">Connect</a>
          </div>
        </div>
        
        <div class="contact-method">
          <span class="contact-icon">🐙</span>
          <div>
            <h4>GitHub</h4>
            <a href="https://github.com/yourusername" class="contact-link" target="_blank">View Code</a>
          </div>
        </div>
        
        <div class="contact-method">
          <span class="contact-icon">🐦</span>
          <div>
            <h4>Twitter</h4>
            <a href="https://twitter.com/yourhandle" class="contact-link" target="_blank">Follow</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Matrix Form Styling

```css
.matrix-form {
  background: var(--bg-secondary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 8px;
  padding: 32px;
  box-shadow: var(--glow-sm);
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: block;
  color: var(--matrix-green);
  font-family: var(--font-mono);
  font-size: 14px;
  margin-bottom: 8px;
}

.label-prompt {
  color: var(--matrix-green);
  margin-right: 8px;
  animation: blink 1s infinite;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-tertiary);
  border: 1px solid var(--matrix-green-dim);
  border-radius: 4px;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--matrix-green);
  box-shadow: var(--glow-sm);
}

.form-input::placeholder {
  color: var(--text-dim);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  display: block;
  color: #ff5f56;
  font-size: 12px;
  margin-top: 4px;
  font-family: var(--font-mono);
}

.form-input.error {
  border-color: #ff5f56;
  box-shadow: 0 0 10px rgba(255, 95, 86, 0.3);
}
```

## Submit Button

```css
.form-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 24px;
  background: transparent;
  border: 2px solid var(--matrix-green);
  border-radius: 4px;
  color: var(--matrix-green);
  font-family: var(--font-mono);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.form-submit:hover {
  background: var(--matrix-green);
  color: var(--bg-primary);
  box-shadow: var(--glow-md);
}

.form-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Loading animation */
.btn-loader {
  display: flex;
  gap: 4px;
}

.loader-dot {
  width: 8px;
  height: 8px;
  background: var(--matrix-green);
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loader-dot:nth-child(1) { animation-delay: -0.32s; }
.loader-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```

## Form Status Messages

```css
.form-status {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 14px;
  text-align: center;
}

.form-status.success {
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--matrix-green);
  color: var(--matrix-green);
}

.form-status.error {
  background: rgba(255, 95, 86, 0.1);
  border: 1px solid #ff5f56;
  color: #ff5f56;
}
```

## Form Validation

```javascript
class MatrixForm {
  constructor(formElement) {
    this.form = formElement;
    this.inputs = this.form.querySelectorAll('.form-input');
    this.status = document.getElementById('form-status');
    this.submitBtn = this.form.querySelector('.form-submit');
    this.loader = this.form.querySelector('.btn-loader');
    this.btnText = this.form.querySelector('.btn-text');
    
    this.init();
  }
  
  init() {
    this.inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
    
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  validateField(input) {
    const errorEl = document.getElementById(`${input.id}-error`);
    let error = '';
    
    if (!input.value.trim()) {
      error = 'This field is required';
    } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
      error = 'Enter a valid email address';
    } else if (input.id === 'message' && input.value.length < 10) {
      error = 'Message must be at least 10 characters';
    }
    
    if (error) {
      this.showError(input, error, errorEl);
      return false;
    }
    
    this.clearError(input);
    return true;
  }
  
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  showError(input, message, errorEl) {
    input.classList.add('error');
    if (errorEl) errorEl.textContent = message;
  }
  
  clearError(input) {
    input.classList.remove('error');
    const errorEl = document.getElementById(`${input.id}-error`);
    if (errorEl) errorEl.textContent = '';
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    this.inputs.forEach(input => {
      if (!this.validateField(input)) isValid = false;
    });
    
    if (!isValid) return;
    
    // Show loading state
    this.setLoading(true);
    
    try {
      const formData = new FormData(this.form);
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        this.showStatus('Transmission received. Response time: 24-48 cycles.', 'success');
        this.form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      this.showStatus('Transmission failed. Try direct connection (email).', 'error');
    } finally {
      this.setLoading(false);
    }
  }
  
  setLoading(loading) {
    this.submitBtn.disabled = loading;
    this.loader.hidden = !loading;
    this.btnText.textContent = loading ? 'Transmitting...' : 'Transmit';
  }
  
  showStatus(message, type) {
    this.status.textContent = message;
    this.status.className = `form-status ${type}`;
    this.status.hidden = false;
    
    setTimeout(() => {
      this.status.hidden = true;
    }, 5000);
  }
}

// Initialize
const form = document.getElementById('contact-form');
if (form) new MatrixForm(form);
```

## Contact Info Styling

```css
.contact-grid {
  display: grid;
  gap: 32px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-info {
  padding: 32px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--matrix-green-dim);
}

.contact-icon {
  font-size: 24px;
}

.contact-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.contact-link:hover {
  color: var(--matrix-green);
  text-shadow: var(--glow-sm);
}
```

## Guidelines
- Always provide alternative contact methods
- Use a form service for static sites (Formspree, EmailJS)
- Show clear success/error feedback
- Validate on blur and before submit
- Keep error messages helpful and specific
- Add spam protection (honeypot field or CAPTCHA)
