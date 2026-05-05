# Portfolio — Lenilson Pinheiro Valério

Landing page estática (HTML + CSS + JS) com **inglês (EUA) como idioma padrão**, opção de **português (BR)** e **espanhol (Espanha)**, SEO técnico (sitemap, robots, JSON-LD, Open Graph, Twitter Cards), `llms.txt` para crawlers de IA, **favicon SVG**, manifest PWA leve e **formulário de contato** que envia e-mail para **lenilsonpinheiro@gmail.com** via **Google Apps Script** (`MailApp`, na infraestrutura Google — ver `google-apps-script/README.md`).

O conteúdo profissional (cargos, datas, métricas e empresas) está **alinhado ao LinkedIn e aos CVs PDF 2026.1 (EN / PT)** do autor — atualize `js/i18n.js` e esta página quando o currículo mudar.

**Produção:** https://lenilsonpinheiro.github.io/portfolio2026/

## Estrutura do repositório

| Ficheiro / pasta | Função |
|------------------|--------|
| `index.html` | Página única: `<header>`, `<main>`, `<footer>`, formulário, alternates `hreflang` |
| `css/site.css` | Estilos (mobile-first, reduced motion, foco visível) |
| `js/i18n.js` | Traduções `en` / `pt` / `es`, meta dinâmicos, JSON-LD `Person` |
| `js/contact-endpoint.js` | URL do Web App (`/exec`); em produção preenchida pelo CI a partir do secret/variable `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL` |
| `scripts/inject_gas_url.py` | Usado no GitHub Actions para injetar a URL antes do deploy |
| `js/contact-form.js` | Liga o `<form>` ao endpoint, aviso se URL em falta, `?sent=1` |
| `google-apps-script/` | Código e instruções para criar o endpoint de e-mail na Google |
| `favicon.svg` | Ícone vetorial |
| `site.webmanifest` | Nome, cores, `start_url` para GitHub Pages |
| `robots.txt` | `Allow` + `Sitemap` + agentes de IA comuns |
| `sitemap.xml` | URL canónica + `hreflang` em XHTML |
| `llms.txt` | Índice legível para assistentes / LLM crawlers |
| `sw.js` | Service Worker — cache de assets estáticos |
| `.github/workflows/deploy.yml` | Deploy GitHub Pages |

## Idioma e URL

- **Padrão:** `en-US` (conteúdo e `<html lang>` após o script de i18n).
- **Trocar idioma:** selector no topo ou query string `?lang=pt` / `?lang=es`.
- Preferência guardada em `localStorage` (`portfolio_lang`) e espelhada num **cookie** pequeno `lp_lang` (1 ano, `SameSite=Lax`, path do repositório) para consistência entre visitas.

## Cache e performance (cliente)

- **`sw.js` (Service Worker):** na segunda e seguintes visitas, **CSS, JS, manifest, favicon, llms/robots/sitemap** tendem a servir a partir do **Cache Storage** (rápido); o **HTML** usa *network-first* com recurso ao cache se estiver offline.
- Após alterações grandes em ficheiros, **incremente `VERSION` em `sw.js`** para forçar renovação do cache.
- **`index.html`** contém textos padrão (EN) no corpo alinhados a `js/i18n.js` para SEO, `Ctrl+F` e carregamento sem depender só do JS; o i18n continua a substituir por `pt`/`es` consoante o idioma.
- **Query `?v=…` em `css/site.css` e `js/*.js`** no `index.html` (e páginas legais) reduz risco de browser a manter ficheiros antigos; alinhe o valor ao deploy quando fizer sentido.
- **Cookies não são usados para guardar o site inteiro** (seria lento e inviável); o cookie `lp_lang` é só o idioma.
- **`preload`** em `index.html` para `css/site.css` e `js/i18n.js`.

## Formulário de contato (Google Apps Script)

1. Crie o projeto em [script.google.com](https://script.google.com), cole `google-apps-script/Code.gs` e **implante** como **aplicativo da Web** (executar como você, acesso **Qualquer pessoa**). Detalhes: `google-apps-script/README.md`.
2. **Automático no deploy:** no GitHub, crie o secret **ou** variable de repositório `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL` com a URL `/exec`. O workflow (`.github/workflows/deploy.yml`) corre `scripts/inject_gas_url.py` antes do upload — não precisa de alterar `js/contact-endpoint.js` no Git para produção.
3. O browser faz `POST` em `application/x-www-form-urlencoded` para o Google; após sucesso o script redireciona para `?sent=1#contact` (`CFG.returnUrl` no Apps Script).
4. **Quotas** de envio: limites oficiais do Gmail / `MailApp` aplicam-se (contas gratuitas têm teto diário).

Para **remover o aviso de app não verificada** no fluxo OAuth (verificação Google Cloud), segue o guia: [`google-apps-script/VERIFICACAO_OAUTH_PASSO_A_PASSO.md`](google-apps-script/VERIFICACAO_OAUTH_PASSO_A_PASSO.md) e a documentação oficial [OAuth Client Verification](https://developers.google.com/apps-script/guides/client-verification).

## SEO e descoberta

- **Canonical:** `https://lenilsonpinheiro.github.io/portfolio2026/`
- **Sitemap:** `sitemap.xml` (atualize `lastmod` quando mudar conteúdo relevante).
- **Schema.org:** `Person`, `WebSite` (ReadAction + CommunicateAction/mailto), `ProfilePage`, `AboutPage`, `FAQPage` — texto da FAQ também está visível em `#faq` (alinhado à política Google para dados estruturados).
- **Open Graph / Twitter:** título, descrição alinhados ao “elevator pitch” para recrutadores; `og:image` com dimensões e `alt`.
- **Monetização (AdSense / ads):** não há blocos de anúncios no código por defeito. Para monetizar com **Google AdSense**, é preciso (1) site aprovado pelo programa, (2) ficheiro **`ads.txt`** na raiz do site com a linha `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` usando o **Publisher ID real** da conta AdSense (substituir o placeholder), (3) espaço de página com conteúdo substancial e política de privacidade — já existe `privacy.html`. Não publique um `ads.txt` inventado.
- **Tópicos / keywords:** JSON-LD + `<template id="discovery-seeds">` (preenchido por JS) + `knowsAbout` no `Person`.

## Testar localmente

```bash
python -m http.server 8080
```

Abra `http://localhost:8080/` (ou a raiz que o servidor mostrar).

Teste de produção: o script faz GET na homepage e em assets críticos (`sw.js`, CSS, i18n, scripts de contacto, manifest, robots, sitemap, `llms.txt`, favicon) e verifica trechos mínimos em cada resposta.

```bash
python testar_site.py
```

## Personalização rápida

- **URL do site** (canonical, redirecionamento pós-formulário): alinhe com o nome do repositório em `index.html`, `js/i18n.js` (`CANONICAL_BASE`), `google-apps-script/Code.gs` (`CFG.returnUrl`), `sitemap.xml`, `robots.txt`, `llms.txt` e `site.webmanifest`.

## Licença

Uso pessoal; pode usar como base para o seu portfólio.

---

**Lenilson Pinheiro** · [LinkedIn](https://www.linkedin.com/in/lenilsonpinheiro/) · [GitHub](https://github.com/LenilsonPinheiro)
