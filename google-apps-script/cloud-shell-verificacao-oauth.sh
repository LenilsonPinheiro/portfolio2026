#!/usr/bin/env bash
#
# Cloud Shell — checagens antes da verificação OAuth (Google Cloud + Apps Script)
#
# O que este script FAZ: define o projeto, confirma conta gcloud, lista APIs ativas,
# testa HTTP das URLs públicas do portfólio e imprime links diretos da consola.
#
# O que NÃO dá para automatizar (Google): "Submeter para verificação" no ecrã de
# consentimento — tem de ser na interface web com a tua conta.
#
# Uso no Cloud Shell:
#   bash cloud-shell-verificacao-oauth.sh
#   # ou: PROJECT_ID=outro-projeto bash cloud-shell-verificacao-oauth.sh
#
set -euo pipefail

# --- Ajuste se o teu projeto tiver outro ID ---
PROJECT_ID="${PROJECT_ID:-portfolio-contact-form-495400}"

# URLs públicas do portfólio (devem responder 200 em produção)
SITE_HOME="${SITE_HOME:-https://lenilsonpinheiro.github.io/portfolio2026/}"
SITE_PRIVACY="${SITE_PRIVACY:-https://lenilsonpinheiro.github.io/portfolio2026/privacy.html}"

echo "=========================================="
echo "  Verificação OAuth — preparação (gcloud)"
echo "=========================================="
echo ""

if ! command -v gcloud >/dev/null 2>&1; then
  echo "[ERRO] gcloud não encontrado. Usa isto dentro do Google Cloud Shell."
  exit 1
fi

echo "[1] Conta ativa (deve ser a dona do projeto):"
gcloud auth list --filter=status:ACTIVE --format="value(account)" || true
echo ""

echo "[2] Projeto: ${PROJECT_ID}"
gcloud config set project "${PROJECT_ID}"
echo ""

echo "[3] Detalhes do projeto:"
gcloud projects describe "${PROJECT_ID}" --format="table(projectId,name,projectNumber,lifecycleState)"
echo ""

echo "[4] APIs ativas (primeiras 30 linhas; truncado):"
gcloud services list --enabled --project="${PROJECT_ID}" --format="table(config.name)" 2>/dev/null | head -n 30 || true
echo "     (lista completa: gcloud services list --enabled --project=${PROJECT_ID})"
echo ""

echo "[5] Teste HTTP das páginas obrigatórias para o consentimento:"
for url in "${SITE_HOME}" "${SITE_PRIVACY}"; do
  code="$(curl -sS -o /dev/null -w "%{http_code}" --max-time 20 -L "$url" || echo "000")"
  if [[ "$code" == "200" ]]; then
    echo "     OK (${code})  $url"
  else
    echo "     AVISO (${code}) $url  — esperado 200 após deploy"
  fi
done
echo ""

echo "[6] Abre estes links no browser (substituição já feita pelo PROJECT_ID):"
echo ""
echo "     Google Auth Platform (público / estado / scopes):"
echo "     https://console.cloud.google.com/auth/audience?project=${PROJECT_ID}"
echo ""
echo "     Ecrã de consentimento OAuth (clássico):"
echo "     https://console.cloud.google.com/apis/credentials/consent?project=${PROJECT_ID}"
echo ""
echo "     Credenciais (cliente OAuth):"
echo "     https://console.cloud.google.com/apis/credentials?project=${PROJECT_ID}"
echo ""
echo "     Search Console (verificar domínio lenilsonpinheiro.github.io):"
echo "     https://search.google.com/search-console"
echo ""

echo "=========================================="
echo "  Passos manuais (oficial)"
echo "=========================================="
echo "  1) Search Console: verificar propriedade do site."
echo "  2) Auth Platform: Branding completo + domínios autorizados + privacy URL."
echo "  3) Scopes: iguais aos do Apps Script (Projeto → Definições → OAuth scopes)."
echo "  4) No ecrã de consentimento: Submeter para verificação."
echo ""
echo "  Documentação:"
echo "  https://developers.google.com/apps-script/guides/client-verification"
echo "  Guia local: google-apps-script/VERIFICACAO_OAUTH_PASSO_A_PASSO.md"
echo "=========================================="
