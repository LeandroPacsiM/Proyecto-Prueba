/**
 * TERMINAL INTERACTIVE COMPONENT
 * Creates an interactive terminal experience with command history
 */

(function() {
  'use strict';

  class Terminal {
    constructor() {
      this.commands = {
        'help': this.showHelp.bind(this),
        'about': this.showAbout.bind(this),
        'projects': this.showProjects.bind(this),
        'skills': this.showSkills.bind(this),
        'contact': this.showContact.bind(this),
        'clear': this.clear.bind(this),
        'date': this.showDate.bind(this),
        'whoami': this.whoami.bind(this),
        'ls': this.ls.bind(this),
        'cat': this.cat.bind(this)
      };
      
      this.history = [];
      this.historyIndex = -1;
      this.isTyping = false;
      
      this.init();
    }

    init() {
      // Initialize terminal windows if they exist
      const terminalBodies = document.querySelectorAll('.terminal-window__body');
      
      terminalBodies.forEach(body => {
        // Add interactive input line
        const inputLine = document.createElement('div');
        inputLine.className = 'terminal-line';
        inputLine.innerHTML = `
          <span class="prompt">user@matrix:~$</span>
          <input type="text" class="terminal-input" autocomplete="off" spellcheck="false">
        `;
        
        body.appendChild(inputLine);
        
        const input = inputLine.querySelector('.terminal-input');
        
        // Focus input when clicking on terminal
        body.addEventListener('click', () => input.focus());
        
        // Handle keyboard input
        input.addEventListener('keydown', (e) => this.handleKeydown(e, input, inputLine));
        
        // Add initial welcome message
        this.addOutput(body, 'Type "help" for available commands<br>');
      });
    }

    handleKeydown(e, input, line) {
      if (e.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        
        if (command) {
          this.history.push(command);
          this.historyIndex = this.history.length;
          
          // Execute command
          this.execute(command, line.parentElement);
        }
        
        input.value = '';
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (this.historyIndex > 0) {
          this.historyIndex--;
          input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          input.value = '';
        }
      }
    }

    execute(command, terminal) {
      const args = command.split(' ');
      const cmd = args[0];
      const handler = this.commands[cmd] || this.unknown;
      
      // Add command line to history
      this.addLine(terminal, `<span class="prompt">user@matrix:~$</span> <span class="command">${command}</span>`);
      
      // Execute handler
      handler(args.slice(1).join(' '));
    }

    addLine(terminal, html) {
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.innerHTML = html;
      terminal.insertBefore(line, terminal.querySelector('.terminal-input').parentElement);
      terminal.scrollTop = terminal.scrollHeight;
    }

    addOutput(terminal, html) {
      const output = document.createElement('div');
      output.className = 'terminal-output';
      output.innerHTML = html;
      terminal.insertBefore(output, terminal.querySelector('.terminal-input').parentElement);
      terminal.scrollTop = terminal.scrollHeight;
    }

    // Command handlers
    showHelp() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
Available commands:<br>
  <span class="highlight">help</span>    - Show this help message<br>
  <span class="highlight">about</span>   - About me<br>
  <span class="highlight">projects</span> - List projects<br>
  <span class="highlight">skills</span>  - Show skills<br>
  <span class="highlight">contact</span>  - Contact information<br>
  <span class="highlight">whoami</span>  - Display user info<br>
  <span class="highlight">ls</span>      - List directory contents<br>
  <span class="highlight">cat</span>     - Display file contents<br>
  <span class="highlight">date</span>    - Show current date/time<br>
  <span class="highlight">clear</span>   - Clear terminal<br>
`);
      });
    }

    showAbout() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
<span class="highlight">About Me</span><br>
Full Stack Developer | Code Enthusiast | Matrix Operator<br>
<br>
Passionate about creating digital experiences that matter.<br>
Specializing in modern web technologies and clean code.<br>
`);
      });
    }

    showProjects() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
<span class="highlight">Projects:</span><br>
  - Matrix Dashboard (React, Node.js, D3.js)<br>
  - E-Commerce Platform (Vue.js, Python)<br>
  - Fitness Tracker App (React Native)<br>
  - Cyber Runner Game (Unity, C#)<br>
  - Portfolio Generator (Next.js, TypeScript)<br>
  - Secure Chat (Flutter, WebRTC)<br>
<br>
Visit #projects section for more details.
`);
      });
    }

    showSkills() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
<span class="highlight">Technical Skills:</span><br>
<br>
Frontend:  HTML/CSS ████████████ 95%<br>
           JavaScript ███████████░ 90%<br>
           React      ██████████░░ 85%<br>
           Vue.js     █████████░░░ 80%<br>
<br>
Backend:   Node.js    ███████████░ 90%<br>
           Python     ██████████░░ 85%<br>
           PostgreSQL █████████░░░ 80%<br>
<br>
Tools:     Git, Docker, AWS, Linux, Figma<br>
`);
      });
    }

    showContact() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
<span class="highlight">Contact Information:</span><br>
<br>
Email:    neo@matrix.com<br>
LinkedIn: linkedin.com/in/neo<br>
GitHub:   github.com/neo<br>
Twitter:  @neo<br>
<br>
Or use the contact form in #contact section.
`);
      });
    }

    clear() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        // Remove all lines except input
        const lines = terminal.querySelectorAll('.terminal-line, .terminal-output');
        lines.forEach(line => line.remove());
      });
    }

    showDate() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        const now = new Date();
        this.addOutput(terminal, now.toString() + '<br>');
      });
    }

    whoami() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
neo<br>
uid=1000(neo) gid=1000(neo) groups=1000(neo),27(sudo)<br>
`);
      });
    }

    ls() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `
<span style="color: #00ff41;">about.txt</span>  <span style="color: #00ff41;">projects/</span>  <span style="color: #00ff41;">skills/</span>  <span style="color: #00ff41;">contact.txt</span>  <span style="color: #00ff41;">resume.pdf</span><br>
`);
      });
    }

    cat(args) {
      const terminals = document.querySelectorAll('.terminal-window__body');
      
      if (!args) {
        terminals.forEach(terminal => {
          this.addOutput(terminal, 'Usage: cat &lt;filename&gt;<br>');
        });
        return;
      }

      const files = {
        'about.txt': 'Full Stack Developer passionate about creating amazing experiences.',
        'contact.txt': 'Email: neo@matrix.com\nGitHub: @neo',
        'resume.pdf': '[Binary content - cannot display]'
      };

      terminals.forEach(terminal => {
        if (files[args]) {
          this.addOutput(terminal, files[args].replace(/\n/g, '<br>') + '<br>');
        } else {
          this.addOutput(terminal, `cat: ${args}: No such file or directory<br>`);
        }
      });
    }

    unknown() {
      const terminals = document.querySelectorAll('.terminal-window__body');
      terminals.forEach(terminal => {
        this.addOutput(terminal, `Command not found. Type "help" for available commands.<br>`);
      });
    }
  }

  // Initialize terminal when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Terminal());
  } else {
    new Terminal();
  }
})();
