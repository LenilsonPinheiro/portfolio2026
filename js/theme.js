(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio_theme';

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  function applyTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme === 'light' ? 'light' : 'dark';
    setStored(theme);

    var meta = document.getElementById('theme-color-meta');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#e2e8f0' : '#0a0a0f');

    var apple = document.getElementById('apple-status-bar');
    if (apple) apple.setAttribute('content', theme === 'light' ? 'default' : 'black-translucent');

    syncToggleUi();
  }

  function syncToggleUi() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var pack =
      window.PortfolioI18n && window.PortfolioI18n.T && window.__i18nActive
        ? window.PortfolioI18n.T[window.__i18nActive]
        : null;
    if (pack) {
      btn.setAttribute('aria-label', isLight ? pack.ariaThemeToDark : pack.ariaThemeToLight);
      btn.setAttribute('title', isLight ? pack.titleThemeToDark : pack.titleThemeToLight);
    }
    var icon = btn.querySelector('i');
    if (icon) icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
  }

  function resolveInitial() {
    var v = getStored();
    if (v === 'light' || v === 'dark') return v;
    try {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    } catch (e) {}
    return 'dark';
  }

  function init() {
    applyTheme(resolveInitial());

    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        applyTheme(cur === 'light' ? 'dark' : 'light');
      });
    }

    window.addEventListener('portfolio:i18n-applied', syncToggleUi);
  }

  window.PortfolioTheme = { applyTheme: applyTheme, syncToggleUi: syncToggleUi };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
