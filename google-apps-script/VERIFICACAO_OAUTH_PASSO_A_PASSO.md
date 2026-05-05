# Passo a passo: reduzir/remover o aviso “aplicativo não verificado” (OAuth)

**O que a Google exige (oficial):** para deixar de mostrar o ecrã de **app não verificada** a utilizadores **fora** do teu domínio Workspace, o cliente OAuth do projeto tem de ser **submetido e aprovado** pela Google. Isto aplica-se a scripts que pedem **scopes sensíveis** (o `MailApp` costuma incluir envio de e-mail).

**O que ninguém pode fazer por ti:** abrir a [Google Cloud Console](https://console.cloud.google.com/) e o [Search Console](https://search.google.com/search-console) já autenticado **com a tua conta**. Um assistente ou repositório **não** consegue clicar “Submeter para verificação” no teu lugar.

**Referências oficiais:**

- [OAuth Client Verification (Apps Script)](https://developers.google.com/apps-script/guides/client-verification)
- [Associar o script a um projeto Cloud standard](https://developers.google.com/apps-script/guides/cloud-platform-projects)
- [Apps não verificadas (ajuda Google)](https://support.google.com/cloud/answer/7454865)

---

## Pré-requisitos (obrigatórios pela Google)

1. **Domínio com conteúdo público**  
   A Google exige **homepage** e **política de privacidade** em URLs públicas. Neste repositório existe **`privacy.html`** em produção, por exemplo:  
   `https://lenilsonpinheiro.github.io/portfolio2026/privacy.html`  
   **Página inicial da app (para o consentimento):**  
   `https://lenilsonpinheiro.github.io/portfolio2026/`

2. **Verificar propriedade do domínio** no [Google Search Console](https://search.google.com/search-console)  
   - Adiciona a propriedade URL-prefix (ex.: `https://lenilsonpinheiro.github.io/portfolio2026/` ou o prefixo que a Google aceitar para o teu site).  
   - Usa um método de verificação permitido (ficheiro HTML, meta tag na página, etc.).  
   - O **domínio autorizado** no ecrã de consentimento OAuth deve corresponder ao sítio onde estão a política e a homepage (ex.: `lenilsonpinheiro.github.io`).

3. **Projeto Google Cloud “standard”** ligado ao Apps Script  
   Se o script ainda usa o projeto Cloud **predefinido** do Apps Script, tens de [mudar para um projeto standard](https://developers.google.com/apps-script/guides/cloud-platform-projects#use_a_different_standard_project) que tu controles (criar projeto em Cloud Console e associar no editor Apps Script: **Projeto** → **Configurações do projeto** → **Projeto Google Cloud**).

4. **Assets para o ecrã de consentimento OAuth** (Cloud Console → **APIs e serviços** → **Ecrã de consentimento OAuth**):  
   - Nome da aplicação  
   - Logótipo (imagem ≤ 1 MB)  
   - Email de suporte  
   - **Domínios autorizados** (ex.: `lenilsonpinheiro.github.io`)  
   - **URL da página inicial** (portfolio)  
   - **URL da política de privacidade** (`…/privacy.html`)  
   - **URL dos termos de serviço** (`…/terms.html`) — página pública no repositório  

5. **Scopes**  
   No editor Apps Script: **Projeto** → **Definições do projeto** → copia **OAuth Scopes** que o projeto usa (com o código que chama `MailApp`). No Cloud Console, em **Adicionar ou remover scopes**, inclui esses scopes; se não aparecerem na lista automática, usa **Adicionar manualmente** conforme a [lista de scopes](https://developers.google.com/apps-script/concepts/scopes) (ex.: scope de envio de e-mail associado ao MailApp — confirma sempre no teu projeto).

---

## Sequência recomendada (cliques)

1. Publica o site com `privacy.html` (já no repositório) e confirma que abre em produção.  
2. **Search Console:** verifica a propriedade do site.  
3. **Cloud Console:** cria ou escolhe um projeto → ativa as APIs que o assistente pedir (muitas vezes já coberto pelo Apps Script).  
4. **Apps Script:** associa o projeto a esse projeto Cloud standard.  
5. **OAuth consent screen:** preenche tudo (External, dados de contacto, URLs, domínios, scopes). Guarda.  
6. **Submeter para verificação** (botão no ecrã de consentimento).  
7. Aguarda email/resposta da Google (a documentação indica muitas vezes **24–72 h** para pedidos simples; scopes **sensíveis/restritos** podem demorar mais — vê [FAQ de verificação](https://support.google.com/cloud/answer/9110914)).

---

## Notas realistas

- **“Este aplicativo foi criado por um utilizador do Google Apps Script”** pode aparecer em contextos do **script.google.com** mesmo com OAuth verificado, consoante o tipo de página; o objetivo da verificação é sobretudo remover o **bloqueio / aviso forte** no **fluxo OAuth** para utilizadores externos e levantar limites de utilizadores em modo não verificado.  
- Se a Google pedir **vídeo**, explicação do uso de dados ou ajustes à política de privacidade, responde no formulário de verificação — por isso `privacy.html` deve estar correto e alinhado com o que o script faz.

---

## Depois de aprovado

- Mantém o mesmo **projeto Cloud** ligado ao Apps Script.  
- Se mudares de projeto Cloud ou de scopes, pode ser necessário **voltar a verificar**.

Se quiseres, no próximo passo descreve **exatamente** o ecrã que ainda vês (captura ou texto completo) — às vezes é só o aviso de “app criada por utilizador” no rodapé, que é diferente do ecrã de “app não verificada” no OAuth.
