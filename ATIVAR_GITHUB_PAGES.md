# GitHub Pages — guia rápido

## URL de produção

```
https://lenilsonpinheiro.github.io/portfolio2026/
```

## Ativar (uma vez)

1. Abra: https://github.com/LenilsonPinheiro/portfolio2026  
2. **Settings** → **Pages**  
3. **Source**: *Deploy from a branch* → **Branch: `main`**, pasta **`/ (root)`** → **Save**  
4. Aguarde 1–5 minutos até o link aparecer como publicado.

## Atualizar o site

Faça `git push` na branch `main`. O workflow em `.github/workflows/deploy.yml` publica o conteúdo da raiz (incluindo `index.html`, `css/`, `js/`, `robots.txt`, `sitemap.xml`, `llms.txt`, etc.).

## Verificar

```bash
python testar_site.py
```

Mais detalhes: `ATIVAR_AUTOMATICO.md` e `README.md`.
