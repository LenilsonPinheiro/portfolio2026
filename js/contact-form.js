(function () {
  'use strict';

  var sentShown = false;

  function endpointUrl() {
    return String(window.PORTFOLIO_APPS_SCRIPT_WEBAPP_URL || '').trim();
  }

  function isValidEndpoint(url) {
    var s = typeof url === 'string' ? url.trim() : '';
    if (!s) return false;
    try {
      var u = new URL(s);
      return u.protocol === 'https:' && u.hostname === 'script.google.com' && u.pathname.indexOf('/macros/s/') !== -1;
    } catch (e) {
      return false;
    }
  }

  function stripSentParam() {
    try {
      var u = new URL(window.location.href);
      if (u.searchParams.get('sent') !== '1') return;
      u.searchParams.delete('sent');
      var qs = u.searchParams.toString();
      window.history.replaceState({}, '', u.pathname + (qs ? '?' + qs : '') + u.hash);
    } catch (e) {}
  }

  function prefersReducedMotion() {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  }

  function showSentBanner(pack) {
    var el = document.getElementById('formSuccess');
    if (!el) return;
    if (pack && pack.formSentSuccess) el.textContent = pack.formSentSuccess;
    el.hidden = false;
    el.classList.add('is-visible');
    sentShown = true;
    try {
      el.focus();
    } catch (e) {}
    try {
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
    } catch (e) {}
  }

  function applySentFromQuery() {
    try {
      var p = new URLSearchParams(window.location.search);
      if (p.get('sent') !== '1') return;
      stripSentParam();
      try {
        sessionStorage.setItem('lp_form_sent_flash', '1');
      } catch (e) {}
    } catch (e) {}
  }

  function syncEndpointWarning() {
    var war = document.getElementById('formEndpointWarning');
    var btn = document.querySelector('#contactForm button[type="submit"]');
    if (!war || !btn) return;
    if (!isValidEndpoint(endpointUrl())) {
      war.hidden = false;
      war.classList.add('is-visible');
      btn.disabled = true;
      btn.setAttribute('aria-disabled', 'true');
      btn.removeAttribute('aria-busy');
    } else {
      war.hidden = true;
      war.classList.remove('is-visible');
      btn.disabled = false;
      btn.removeAttribute('aria-disabled');
      btn.removeAttribute('aria-busy');
    }
  }

  function trimFormFields(form) {
    ['name', 'email', 'message'].forEach(function (fieldName) {
      var el = form.elements.namedItem(fieldName);
      if (el && typeof el.value === 'string') el.value = el.value.trim();
    });
  }

  function validateFormVisual(form) {
    if (typeof form.reportValidity === 'function') {
      return form.reportValidity();
    }
    if (typeof form.checkValidity === 'function') {
      return form.checkValidity();
    }
    return true;
  }

  function wireForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    var url = endpointUrl();
    if (isValidEndpoint(url)) {
      form.setAttribute('action', url);
      form.setAttribute('method', 'POST');
      form.setAttribute('enctype', 'application/x-www-form-urlencoded');
      form.setAttribute('target', '_self');
    } else {
      form.setAttribute('action', '#');
      form.removeAttribute('target');
    }
    syncEndpointWarning();

    form.addEventListener(
      'submit',
      function (ev) {
        if (!isValidEndpoint(endpointUrl())) {
          ev.preventDefault();
          syncEndpointWarning();
          var w = document.getElementById('formEndpointWarning');
          if (w) w.focus();
          return;
        }

        trimFormFields(form);

        if (!validateFormVisual(form)) {
          ev.preventDefault();
          return;
        }

        var btn = form.querySelector('button[type="submit"]');
        if (btn) {
          btn.disabled = true;
          btn.setAttribute('aria-busy', 'true');
          btn.setAttribute('aria-disabled', 'true');
        }
      },
      false
    );
  }

  function onI18nApplied(ev) {
    var pack = ev && ev.detail && ev.detail.pack;
    try {
      if (sessionStorage.getItem('lp_form_sent_flash') === '1' && pack) {
        showSentBanner(pack);
        sessionStorage.removeItem('lp_form_sent_flash');
      }
    } catch (e) {}
    if (sentShown && pack && pack.formSentSuccess) {
      var el = document.getElementById('formSuccess');
      if (el) el.textContent = pack.formSentSuccess;
    }
    syncEndpointWarning();
  }

  function init() {
    wireForm();
    applySentFromQuery();
    window.addEventListener('pageshow', function (ev) {
      if (!ev.persisted) return;
      var form = document.getElementById('contactForm');
      var btn = form && form.querySelector('button[type="submit"]');
      if (btn && isValidEndpoint(endpointUrl())) {
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        btn.removeAttribute('aria-disabled');
      }
      syncEndpointWarning();
    });
  }

  window.addEventListener('portfolio:i18n-applied', onI18nApplied);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
