/**
 * MAIN JAVASCRIPT - Portfolio Functionality
 * Handles navigation, animations, form validation, and interactions
 */

(function() {
  'use strict';

  // ============================================
  // NAVIGATION
  // ============================================
  class Navigation {
    constructor() {
      this.nav = document.getElementById('nav');
      this.navMenu = document.getElementById('nav-menu');
      this.navToggle = document.getElementById('nav-toggle');
      this.navLinks = document.querySelectorAll('.nav__link');
      this.sections = document.querySelectorAll('section[id]');
      
      this.init();
    }

    init() {
      // Mobile menu toggle
      if (this.navToggle) {
        this.navToggle.addEventListener('click', () => this.toggleMenu());
      }

      // Close menu when clicking a link
      this.navLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Active link on scroll
      window.addEventListener('scroll', () => this.updateActiveLink());
      
      // Nav scroll effect
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          this.nav?.classList.add('nav--scrolled');
        } else {
          this.nav?.classList.remove('nav--scrolled');
        }
      });

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href !== '#') {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
              section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    }

    toggleMenu() {
      this.navMenu?.classList.toggle('active');
      this.navToggle?.classList.toggle('active');
    }

    closeMenu() {
      this.navMenu?.classList.remove('active');
      this.navToggle?.classList.remove('active');
    }

    updateActiveLink() {
      const scrollPos = window.scrollY + 200;

      this.sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  }

  // ============================================
  // REVEAL ANIMATIONS ON SCROLL
  // ============================================
  class RevealAnimation {
    constructor() {
      this.reveals = document.querySelectorAll('.reveal');
      this.init();
    }

    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      this.reveals.forEach(reveal => {
        observer.observe(reveal);
      });
    }
  }

  // ============================================
  // TYPING EFFECT
  // ============================================
  class TypingEffect {
    constructor() {
      this.elements = document.querySelectorAll('.typewriter');
      this.init();
    }

    init() {
      this.elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        el.style.width = 'auto';
        
        let i = 0;
        const type = () => {
          if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
          }
        };
        
        // Start typing when element is in view
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(type, 500);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(el);
      });
    }
  }

  // ============================================
  // CODE DECODE EFFECT
  // ============================================
  class DecodeEffect {
    constructor() {
      this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
      this.elements = document.querySelectorAll('[data-text]');
      this.init();
    }

    init() {
      this.elements.forEach(el => {
        const finalText = el.getAttribute('data-text');
        if (!finalText) return;

        el.addEventListener('mouseenter', () => this.decode(el, finalText));
        
        // Also decode on reveal
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => this.decode(el, finalText), 500);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(el);
      });
    }

    decode(element, finalText) {
      let iterations = 0;
      const maxIterations = Math.min(finalText.length * 2, 40);
      
      const interval = setInterval(() => {
        element.textContent = finalText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return finalText[index];
            }
            return this.letters[Math.floor(Math.random() * this.letters.length)];
          })
          .join('');
        
        iterations++;
        
        if (iterations > maxIterations) {
          clearInterval(interval);
          element.textContent = finalText;
        }
      }, 50);
    }
  }

  // ============================================
  // PROJECT FILTER
  // ============================================
  class ProjectFilter {
    constructor() {
      this.filterBtns = document.querySelectorAll('.filter-btn');
      this.projects = document.querySelectorAll('.project-card');
      this.init();
    }

    init() {
      this.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => this.filter(btn));
      });
    }

    filter(btn) {
      // Update active state
      this.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      this.projects.forEach((project, index) => {
        const category = project.dataset.category;
        
        if (filter === 'all' || category === filter) {
          project.style.display = 'block';
          
          // Animate in
          setTimeout(() => {
            project.animate([
              { opacity: 0, transform: 'scale(0.9)' },
              { opacity: 1, transform: 'scale(1)' }
            ], {
              duration: 300,
              easing: 'ease-out'
            });
          }, index * 50);
        } else {
          project.style.display = 'none';
        }
      });
    }
  }

  // ============================================
  // SKILLS PROGRESS ANIMATION
  // ============================================
  class SkillsAnimation {
    constructor() {
      this.skillBars = document.querySelectorAll('.skill-progress');
      this.init();
    }

    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const level = entry.target.dataset.level;
            if (level) {
              entry.target.style.width = `${level}%`;
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.skillBars.forEach(bar => {
        observer.observe(bar);
      });
    }
  }

  // ============================================
  // CONTACT FORM VALIDATION
  // ============================================
  class ContactForm {
    constructor() {
      this.form = document.getElementById('contact-form');
      if (!this.form) return;

      this.inputs = this.form.querySelectorAll('.form-input');
      this.status = document.getElementById('form-status');
      this.submitBtn = this.form.querySelector('.form-submit');
      this.loader = this.form.querySelector('.btn-loader');
      this.btnText = this.form.querySelector('.btn-text');

      this.init();
    }

    init() {
      // Validate on blur
      this.inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearError(input));
      });

      // Handle submit
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
      if (this.loader) this.loader.hidden = !loading;
      if (this.btnText) {
        this.btnText.textContent = loading ? 'Transmitting...' : 'Transmit';
      }
    }

    showStatus(message, type) {
      if (!this.status) return;
      
      this.status.textContent = message;
      this.status.className = `form-status ${type}`;
      this.status.hidden = false;

      setTimeout(() => {
        this.status.hidden = true;
      }, 5000);
    }
  }

  // ============================================
  // STATS COUNTER ANIMATION
  // ============================================
  class StatsAnimation {
    constructor() {
      this.statNumbers = document.querySelectorAll('.stat-card__number');
      this.init();
    }

    init() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            const suffix = text.replace(/[0-9]/g, '');
            
            this.animateCounter(entry.target, number, suffix);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.statNumbers.forEach(stat => {
        observer.observe(stat);
      });
    }

    animateCounter(element, target, suffix) {
      let current = 0;
      const increment = target / 50;
      const duration = 2000;
      const stepTime = duration / 50;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
      }, stepTime);
    }
  }

  // ============================================
  // SCROLL INDICATOR
  // ============================================
  class ScrollIndicator {
    constructor() {
      this.indicator = document.querySelector('.scroll-indicator');
      this.init();
    }

    init() {
      if (!this.indicator) return;

      // Hide on scroll
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          this.indicator.style.opacity = '0';
        } else {
          this.indicator.style.opacity = '1';
        }
      });
    }
  }

  // ============================================
  // FOOTER YEAR
  // ============================================
  class FooterYear {
    constructor() {
      this.yearEl = document.getElementById('footer-year');
      this.init();
    }

    init() {
      if (this.yearEl) {
        const currentYear = new Date().getFullYear();
        this.yearEl.textContent = currentYear;
      }
    }
  }

  // ============================================
  // INITIALIZE ALL
  // ============================================
  function init() {
    new Navigation();
    new RevealAnimation();
    new TypingEffect();
    new DecodeEffect();
    new ProjectFilter();
    new SkillsAnimation();
    new ContactForm();
    new StatsAnimation();
    new ScrollIndicator();
    new FooterYear();

    console.log('%c> Portfolio initialized successfully', 'color: #00ff41; font-family: monospace;');
    console.log('%c> Welcome to the Matrix', 'color: #00ff41; font-family: monospace;');
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
