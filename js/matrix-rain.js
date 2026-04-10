/**
 * MATRIX DIGITAL RAIN EFFECT
 * Creates the iconic falling characters animation from The Matrix
 */

(function() {
  'use strict';

  const canvas = document.getElementById('matrix-rain');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Set canvas to full screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Matrix characters (katakana + latin + numbers)
  const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charArray = chars.split('');

  // Font settings
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);

  // Drops array - one for each column
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100; // Start at random positions above screen
  }

  // Drawing the characters
  function draw() {
    // Black BG with slight transparency for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text color and font
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    // Loop over drops
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const char = charArray[Math.floor(Math.random() * charArray.length)];

      // X = i * fontSize, Y = value of drops[i] * fontSize
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Draw the character
      ctx.fillText(char, x, y);

      // Reset drop to top randomly after it has crossed the screen
      // Adding randomness to the reset to make the drops scattered
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // Increment Y coordinate
      drops[i]++;
    }
  }

  // Animation loop - 33ms = ~30fps for that authentic digital feel
  let animationId;
  function animate() {
    draw();
    animationId = requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Pause animation when tab is not visible (performance optimization)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

  // Reduce opacity on mobile for better readability
  function updateOpacity() {
    if (window.innerWidth < 768) {
      canvas.style.opacity = '0.15';
    } else {
      canvas.style.opacity = '0.3';
    }
  }

  updateOpacity();
  window.addEventListener('resize', updateOpacity);
})();
