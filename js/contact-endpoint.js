(function () {
  'use strict';
  /**
   * URL do Web App do Google Apps Script (termina em /exec).
   * Em produção (GitHub Actions), o valor é injetado automaticamente a partir do
   * secret ou variable `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL` — ver google-apps-script/README.md.
   * Em cópia local, pode editar esta linha temporariamente ou exportar GAS_URL e correr scripts/inject_gas_url.py.
   */
  window.PORTFOLIO_APPS_SCRIPT_WEBAPP_URL = "";
})();
