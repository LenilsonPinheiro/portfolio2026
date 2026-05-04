# Formulário de contacto — Google Apps Script

O site estático (GitHub Pages) **não pode** enviar e-mail sozinho. Esta solução usa **Google Apps Script** com `MailApp.sendEmail`: a mensagem sai da infraestrutura Google (quota diária do Gmail/Workspace aplicável).

## Passos (uma vez)

1. Abra [script.google.com](https://script.google.com) e crie um **projeto novo**.
2. Apague o conteúdo predefinido e **cole o código** de `Code.gs` (mesmo ficheiro nesta pasta).
3. Ajuste `CFG.recipient` e `CFG.returnUrl` em `Code.gs` se mudar domínio ou e-mail.
4. **Gravar** (ícone de disco).
5. **Implantar** → **Novo implantação** → tipo **aplicativo da Web**:
   - **Executar como:** a sua conta Google.
   - **Quem pode aceder:** **Qualquer pessoa** (visitantes anónimos do portfólio precisam de poder invocar o `doPost`).
6. Copie a **URL** que termina em `/exec`.
7. No repositório do site, edite `js/contact-endpoint.js` e cole essa URL em `PORTFOLIO_APPS_SCRIPT_WEBAPP_URL`.
8. Faça `git push` para publicar o site com o endpoint configurado.

## Após alterar o código do script

**Implantar** → **Gerir implantações** → ícone de lápis → **Versão: Nova versão** → **Implantar**. A URL `/exec` mantém-se.

## Limitações oficiais

- Quotas de envio do Gmail / Google Workspace: consulte a documentação Google para `MailApp` (contas gratuitas têm limite diário).
- O endpoint público pode receber spam; existe campo *honeypot* (`hp`) no formulário HTML.

## Referência

- [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)
- [Implantação como aplicativo da Web](https://developers.google.com/apps-script/guides/web)
