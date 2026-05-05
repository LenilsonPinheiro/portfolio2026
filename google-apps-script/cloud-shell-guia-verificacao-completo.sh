#!/usr/bin/env bash
#
# Cloud Shell — guia + testes para Search Console, Auth Platform, scopes e verificação OAuth.
#
# IMPORTANTE (honesto): Não existe comando gcloud/curl que:
#   - adicione a propriedade no Search Console por ti,
#   - preencha branding no Google Auth Platform,
#   - alinhe scopes com o Apps Script,
#   - ou clique em "Submeter para verificação".
# Isso é só na consola web com a tua conta.
#
# Este script: confirma projeto, testa URLs públicas e, se quiseres, testa o ficheiro
# HTML de verificação depois de o colocares no repositório GitHub Pages.
#
# Uso:
#   bash cloud-shell-guia-verificacao-completo.sh
#
# Depois de descarregares o ficheiro google*.html do Search Console para a raiz do site:
#   VERIFY_HTML_FILENAME=googleXXXXXXXX.html bash cloud-shell-guia-verificacao-completo.sh
#
set -euo pipefail

PROJECT_ID="${PROJECT_ID:-portfolio-contact-form-495400}"
SITE_PREFIX="${SITE_PREFIX:-https://lenilsonpinheiro.github.io/portfolio2026}"
SITE_HOME="${SITE_HOME:-${SITE_PREFIX}/}"
SITE_PRIVACY="${SITE_PRIVACY:-${SITE_PREFIX}/privacy.html}"

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  1) LIMITAÇÃO: o que NÃO dá para fazer só com este shell        ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo "  • Search Console: criar propriedade + pedido de verificação → browser."
echo "  • Auth Platform: domínios, links, branding → browser."
echo "  • Igualar scopes ao Apps Script → copiar/colar entre duas páginas (browser)."
echo "  • Submeter para verificação OAuth → browser."
echo ""

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  2) gcloud — projeto e rede básica                                ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
if ! command -v gcloud >/dev/null 2>&1; then
  echo "[ERRO] Usa isto dentro do Google Cloud Shell (tem gcloud)."
  exit 1
fi
echo "Conta ativa:"
gcloud auth list --filter=status:ACTIVE --format="value(account)" || true
echo ""
gcloud config set project "${PROJECT_ID}"
gcloud projects describe "${PROJECT_ID}" --format="table(projectId,name,projectNumber,lifecycleState)"
echo ""

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  3) HTTP — páginas que a Google espera para o consentimento       ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
for url in "${SITE_HOME}" "${SITE_PRIVACY}"; do
  code="$(curl -sS -o /dev/null -w "%{http_code}" --max-time 20 -L "$url" || echo "000")"
  if [[ "$code" == "200" ]]; then
    echo "  OK (${code})  $url"
  else
    echo "  FALTA (${code}) $url"
  fi
done
echo ""

if [[ -n "${VERIFY_HTML_FILENAME:-}" ]]; then
  echo "╔══════════════════════════════════════════════════════════════════╗"
  echo "║  4) Ficheiro HTML de verificação (Search Console)                 ║"
  echo "╚══════════════════════════════════════════════════════════════════╝"
  vurl="${SITE_PREFIX}/${VERIFY_HTML_FILENAME#/}"
  code="$(curl -sS -o /dev/null -w "%{http_code}" --max-time 20 -L "$vurl" || echo "000")"
  if [[ "$code" == "200" ]]; then
    echo "  OK (${code})  $vurl"
    echo "  → No Search Console, usa \"Verificar\" depois de o ficheiro estar no GitHub."
  else
    echo "  AINDA NÃO (${code})  $vurl"
    echo "  → Coloca o ficheiro que a Google te deu na raiz do site (repo), faz commit/push e volta a correr:"
    echo "     VERIFY_HTML_FILENAME=${VERIFY_HTML_FILENAME} bash $0"
  fi
  echo ""
else
  echo "╔══════════════════════════════════════════════════════════════════╗"
  echo "║  4) Ficheiro HTML de verificação (opcional)                       ║"
  echo "╚══════════════════════════════════════════════════════════════════╝"
  echo "  Se escolheres o método \"Ficheiro HTML\" no Search Console:"
  echo "  1. Descarrega o ficheiro (ex.: googleXXXXXXXX.html)."
  echo "  2. Coloca-o na raiz do site publicado (mesmo nível que index.html no Pages)."
  echo "  3. Corre de novo:"
  echo "     VERIFY_HTML_FILENAME=googleXXXXXXXX.html bash cloud-shell-guia-verificacao-completo.sh"
  echo ""
fi

echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  5) Abre estes links e segue a ordem A → D                       ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
echo "  A) Search Console — adicionar propriedade (prefixo de URL):"
echo "     ${SITE_PREFIX}/"
echo "     Abrir: https://search.google.com/search-console"
echo "     Métodos comuns: ficheiro HTML na raiz | etiqueta HTML no <head> | Google Analytics."
echo ""
echo "  B) Google Auth Platform (público / scopes):"
echo "     https://console.cloud.google.com/auth/audience?project=${PROJECT_ID}"
echo ""
echo "  C) Apps Script — copiar OAuth scopes (para comparar com o ecrã B):"
echo "     https://script.google.com/home/projects"
echo "     Abre o projeto do formulário → Engrenagem → Definições do projeto → \"Scopes OAuth\"."
echo ""
echo "  D) Ecrã de consentimento + Submeter verificação:"
echo "     https://console.cloud.google.com/apis/credentials/consent?project=${PROJECT_ID}"
echo "     (ou o fluxo equivalente em Auth Platform, conforme a consola mostrar)"
echo ""
echo "  Documentação oficial Apps Script:"
echo "     https://developers.google.com/apps-script/guides/client-verification"
echo ""
echo "  Guia em texto no repositório:"
echo "     google-apps-script/VERIFICACAO_OAUTH_PASSO_A_PASSO.md"
echo ""
echo "Feito. O shell preparou testes e links; os cliques são teus na consola Google."
echo ""
