# 🚀 Ativação Automática do GitHub Pages

## ✅ O que já foi configurado:

1. ✅ **Workflow do GitHub Actions** (`.github/workflows/deploy.yml`)
   - Deploy automático a cada push
   - Funciona APÓS ativar o Pages

2. ✅ **Script de teste** (`testar_site.py`)
   - Testa se o site está online
   - Executa: `python testar_site.py`

3. ✅ **Código completo no repositório**
   - `index.html` pronto
   - Tudo commitado e enviado

## ⚠️ O que precisa ser feito (1 vez apenas):

O GitHub Pages precisa ser **ativado manualmente** nas configurações do repositório.

### Opção 1: Link Direto (MAIS RÁPIDO)
```
https://github.com/LenilsonPinheiro/portfolio2026/settings/pages
```

Lá você:
1. Em "Source", selecione: **Branch: main** e **Folder: / (root)**
2. Clique em **"Save"**
3. Aguarde 1-5 minutos

### Opção 2: Via Interface do GitHub
1. Acesse: https://github.com/LenilsonPinheiro/portfolio2026
2. Clique em **"Settings"** (última aba)
3. No menu lateral, clique em **"Pages"**
4. Configure e salve

## 🧪 Testar após ativar:

Execute o script de teste:
```bash
python testar_site.py
```

Ou acesse diretamente:
```
https://lenilsonpinheiro.github.io/portfolio2026/
```

## 📱 Link Final de Produção:

```
https://lenilsonpinheiro.github.io/portfolio2026/
```

## 🔄 Após ativar:

- ✅ Qualquer `git push` atualiza o site automaticamente
- ✅ O workflow do GitHub Actions cuida do deploy
- ✅ Site fica disponível em 1-2 minutos após cada push

---

**Nota:** O GitHub não permite ativar Pages 100% automaticamente sem autenticação via API. Mas após ativar UMA VEZ, tudo fica automático!
