# Formulário de contacto — Google Apps Script

O site estático (GitHub Pages) **não pode** enviar e-mail sozinho. Esta solução usa **Google Apps Script** com `MailApp.sendEmail`: a mensagem sai da infraestrutura Google (quota diária do Gmail/Workspace aplicável).

**O que não dá para automatizar:** criar o projeto no Google, aceitar o consentimento OAuth do Gmail/MailApp e obter a URL `/exec` — isso exige **login na sua conta** em [script.google.com](https://script.google.com). Ninguém (nem o GitHub) pode fazer isso por si.

**O que fica automático:** depois de copiar a URL **uma vez**, regista-a no GitHub como **secret** ou **variable**; em **cada push** o workflow corre `scripts/inject_gas_url.py` e publica o site **já com o endpoint preenchido**, sem editar `js/contact-endpoint.js` no disco nem no commit.

## Passos no Google (uma vez)

1. Abra [script.google.com](https://script.google.com) e crie um **projeto novo**.
2. Apague o conteúdo predefinido e **cole o código** de `Code.gs` (nesta pasta).
3. Ajuste `CFG.recipient` e `CFG.returnUrl` em `Code.gs` se mudar domínio ou e-mail.
4. **Gravar** (ícone de disco).
5. **Implantar** → **Novo implantação** → tipo **aplicativo da Web**:
   - **Executar como:** a sua conta Google.
   - **Quem pode aceder:** **Qualquer pessoa** (visitantes anónimos precisam de poder invocar o `doPost`).
6. Aceite a autorização do **MailApp** na primeira execução.
7. Copie a **URL** que termina em `/exec`.

## Passos no GitHub (uma vez)

1. Repositório → **Settings** → **Secrets and variables** → **Actions**.
2. Crie **um** dos seguintes (o workflow usa o secret se existir, senão a variable):
   - **Secret** recomendado: nome `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL`, valor = URL completa `/exec`.
   - **Variable** (menos restrita): mesmo nome `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL`.
3. Faça um **push** (ou **Actions** → **Deploy to GitHub Pages** → **Run workflow**). O job **Inject Google Apps Script Web App URL** reescreve `js/contact-endpoint.js` **só dentro do artefacto** antes do deploy.

O ficheiro `js/contact-endpoint.js` no Git pode permanecer com `''`; o site em produção fica com a URL injetada.

## Após alterar o código do script

**Implantar** → **Gerir implantações** → ícone de lápis → **Versão: Nova versão** → **Implantar**. A URL `/exec` mantém-se (não precisa de alterar o secret).

## Limitações oficiais

- Quotas de envio do Gmail / Google Workspace: documentação Google para `MailApp`.
- O endpoint público pode receber spam; existe campo *honeypot* (`hp`) no formulário HTML.

## Referência

- [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)
- [Implantação como aplicativo da Web](https://developers.google.com/apps-script/guides/web)
