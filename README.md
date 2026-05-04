# Portfolio — Lenilson Pinheiro Valério

Landing page estática (HTML + CSS + JS) com **inglês (EUA) como idioma padrão**, opção de **português (BR)** e **espanhol (Espanha)**, SEO técnico (sitemap, robots, JSON-LD, Open Graph, Twitter Cards), `llms.txt` para crawlers de IA, **favicon SVG**, manifest PWA leve e **formulário de contato** que encaminha e-mail para **lenilsonpinheiro@gmail.com** via [FormSubmit](https://formsubmit.co/).

O conteúdo profissional (cargos, datas, métricas e empresas) está **alinhado ao LinkedIn e aos CVs PDF 2026.1 (EN / PT)** do autor — atualize `js/i18n.js` e esta página quando o currículo mudar.

**Produção:** https://lenilsonpinheiro.github.io/portfolio2026/

## Estrutura do repositório

| Ficheiro / pasta | Função |
|------------------|--------|
| `index.html` | Página única: `<header>`, `<main>`, `<footer>`, formulário, alternates `hreflang` |
| `css/site.css` | Estilos (mobile-first, reduced motion, foco visível) |
| `js/i18n.js` | Traduções `en` / `pt` / `es`, meta dinâmicos, JSON-LD `Person` |
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
- **Cookies não são usados para guardar o site inteiro** (seria lento e inviável); o cookie `lp_lang` é só o idioma.
- **`preload`** em `index.html` para `css/site.css` e `js/i18n.js`.

## Formulário de contato (FormSubmit)

1. O formulário faz `POST` para `https://formsubmit.co/lenilsonpinheiro@gmail.com`.
2. **Na primeira utilização**, o FormSubmit costuma enviar um e-mail de **ativação** — confirme na caixa **lenilsonpinheiro@gmail.com** para começar a receber mensagens.
3. Após envio, o utilizador é redirecionado para `?sent=1#contact`.

## SEO e descoberta

- **Canonical:** `https://lenilsonpinheiro.github.io/portfolio2026/`
- **Sitemap:** `sitemap.xml` (atualize `lastmod` quando mudar conteúdo relevante).
- **Schema.org:** `Person`, `WebSite`, `ProfilePage` em JSON-LD.
- **Tópicos / keywords:** JSON-LD + `<template id="discovery-seeds">` (preenchido por JS) + `knowsAbout` no `Person`.

## Testar localmente

```bash
python -m http.server 8080
```

Abra `http://localhost:8080/` (ou a raiz que o servidor mostrar).

Teste de produção: o script faz GET na homepage e em assets críticos (`sw.js`, CSS, i18n, manifest, robots, sitemap, `llms.txt`, favicon) e verifica trechos mínimos em cada resposta.

```bash
python testar_site.py
```

## Personalização rápida

- **URL do site** (canonical, sitemap, `_next` do formulário): alinhe com o nome do repositório em `index.html`, `js/i18n.js` (`CANONICAL_BASE`), `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest` e campo `_next` do `<form>`.

## Licença

Uso pessoal; pode usar como base para o seu portfólio.

---

**Lenilson Pinheiro** · [LinkedIn](https://www.linkedin.com/in/lenilsonpinheiro/) · [GitHub](https://github.com/LenilsonPinheiro)
