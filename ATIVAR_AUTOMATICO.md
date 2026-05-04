# Ativação automática do GitHub Pages

## O que já está no repositório

1. **Workflow** (`.github/workflows/deploy.yml`): deploy a cada push na branch `main` (GitHub Pages com artefacto do diretório raiz).
2. **Script de teste** (`testar_site.py`): verifica se `https://lenilsonpinheiro.github.io/portfolio2026/` responde com HTML válido.
3. **Site estático completo**
   - `index.html` — página única (EN padrão; PT/ES via selector ou `?lang=`), SEO, formulário (Google Apps Script), JSON-LD.
   - `css/site.css` — estilos.
   - `js/i18n.js` — traduções e meta dinâmicos.
   - `favicon.svg`, `site.webmanifest` — ícone e manifest.
   - `robots.txt`, `sitemap.xml`, `llms.txt` — crawlers, sitemap, índice para IAs.

## O que fazer uma vez no GitHub

O Pages precisa estar **ativado** nas definições do repositório (o GitHub não liga isto só pelo push).

### Opção 1 — Link direto

```
https://github.com/LenilsonPinheiro/portfolio2026/settings/pages
```

1. Em **Source**: **Branch `main`**, pasta **`/ (root)`**.
2. **Save**.
3. Aguardar 1–5 minutos.

### Opção 2 — Pela interface

1. Repositório: https://github.com/LenilsonPinheiro/portfolio2026  
2. **Settings** → **Pages** → mesma configuração acima.

## Testar

```bash
python testar_site.py
```

URL de produção:

```
https://lenilsonpinheiro.github.io/portfolio2026/
```

## Depois de ativo

- Cada `git push` na `main` atualiza o site em cerca de 1–2 minutos (workflow + Pages).
- **Formulário de contacto:** usa **Google Apps Script** (`MailApp`). Crie o script e a implantação Web **uma vez** no Google (ver `google-apps-script/README.md`). Depois registe a URL `/exec` no GitHub como secret ou variable **`PORTFOLIO_APPS_SCRIPT_WEBAPP_URL`** — o workflow injeta-a automaticamente em cada deploy; não precisa de editar `js/contact-endpoint.js` no repositório para produção.

## Nota

Não é possível ativar Pages 100% por API sem credenciais. Depois de ativar **uma vez**, o resto fica automático com o workflow.

---

Documentação alinhada com `README.md`, `ATIVAR_GITHUB_PAGES.md`, `testar_site.py` e URLs em `index.html` / `js/i18n.js` / `sitemap.xml`.
