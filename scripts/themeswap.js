document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const link = document.querySelector('link[rel="stylesheet"]');
  const body = document.body;

  // State: 0 = Dark, 1 = Light, 2 = System
  let themeState = 0;
  let currentTheme = 'system';

  // Load saved theme preference or default to 'system'
  const savedThemeState = localStorage.getItem('pocket-docsify-theme');
  if (savedThemeState !== null) {
    themeState = parseInt(savedThemeState, 10);
    if (themeState !== 0 && themeState !== 1 && themeState !== 2) {
      themeState = 0;
    }
  }

  // Set initial theme
  updateTheme(themeState);

  // Listen for OS theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'system') {
      applyTheme('system');
    }
  });

  // Listen for toggle button clicks
  themeToggle.addEventListener('click', () => {
    themeState = (themeState + 1) % 3;
    localStorage.setItem('pocket-docsify-theme', themeState);
    updateTheme(themeState);
  });

  // Update the theme based on state
  function updateTheme(to) {
    console.log(`update ${to} ${themeState}`);
    let next = 'system';
    switch (to) {
      case 1:
        next = 'dark';
        break;
      case 2:
        next = 'light';
        break;
    }
    applyTheme(next);
  }

  // Apply the theme and update UI
  function applyTheme(theme) {
    console.log(`apply ${theme}`);
    currentTheme = theme;
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      link.href = isDark ? 'style/dark.css' : 'style/light.css';
      body.setAttribute('color-theme', 'system');
      themeIcon.content = 'system';
    } else {
      link.href = `style/${theme}.css`;
      body.setAttribute('color-theme', theme);
    }
    setThemeIcon(theme);
  }

  function setThemeIcon(theme) {
    console.log(`icon ${theme}`);
    switch (theme) {
      case 'system':
        themeIcon.textContent = '󰡛';
        break;
      case 'dark':
        themeIcon.textContent = '';
        break;
      case 'light':
        themeIcon.textContent = '󰖨';
        break;
    }
  }
});
