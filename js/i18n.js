(function () {
  'use strict';

  var CANONICAL_BASE = 'https://lenilsonpinheiro.github.io/portfolio2026/';
  var STORAGE_KEY = 'portfolio_lang';

  function cookiePath() {
    try {
      var segs = window.location.pathname.split('/').filter(Boolean);
      if (!segs.length) return '/';
      return '/' + segs[0] + '/';
    } catch (e) {
      return '/';
    }
  }

  function getCookie(name) {
    try {
      var re = new RegExp('(?:^|; )' + String(name).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)');
      var m = document.cookie.match(re);
      return m ? decodeURIComponent(m[1]) : '';
    } catch (e) {
      return '';
    }
  }

  function setCookie(name, value, maxAgeSeconds) {
    try {
      var age = maxAgeSeconds || 31536000;
      document.cookie =
        name +
        '=' +
        encodeURIComponent(value) +
        '; max-age=' +
        age +
        '; path=' +
        cookiePath() +
        '; SameSite=Lax';
    } catch (e) {}
  }

  var T = {
    en: {
      htmlLang: 'en-US',
      schemaName: 'Lenilson Pinheiro Valério',
      schemaJobTitle: 'Senior Project Manager',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Senior PM · Digital Transformation, Data & AI',
      metaDescription:
        '~25 years leading programs for Citibank (Qintess), TCS/Petrobras, Banco do Nordeste, and SUNAT (Peru). PhD candidate (Applied IT, UNIFOR). PMP · PSM I. Open Finance, AI/ML for fraud, SAP & OutSystems. Fortaleza, Brazil.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Senior Project Manager,PMP,PSM I,Open Finance,digital transformation,data governance,AI,Machine Learning,Citibank,Qintess,TCS,Petrobras,Banco do Nordeste,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Python,Java,Kubernetes,Kafka,MongoDB,Scrum,agile,ITIL,COBIT,UNIFOR,MBA professor',
      ogLocale: 'en_US',
      langLabel: 'Language',
      navSkip: 'Skip to main content',
      navHome: 'Home',
      navAbout: 'About',
      navExperience: 'Experience',
      navTech: 'Skills & tools',
      navProjects: 'Highlights',
      navContact: 'Contact',
      heroGreeting: "Hi, I'm",
      heroCtaPrimary: 'View highlights',
      heroCtaSecondary: 'Contact me',
      aboutTitle: 'Profile',
      aboutSubtitle:
        'Executive-grade program delivery across banking, energy, and government—with deep command of data platforms, AI, and enterprise architecture.',
      aboutP1:
        'I am a <span class="highlight">Senior Project Manager</span> and <span class="highlight">digital transformation specialist</span> with <span class="highlight">~25 years</span> leading strategic initiatives for global and regulated organizations—including <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS on Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span>, and <span class="highlight">SUNAT (NTConsult, Peru)</span>. I combine <span class="highlight">PMP and Scrum (PSM I)</span> discipline with strong technical fluency across data, cloud, and integration stacks.',
      aboutP2:
        'Recent impact: <span class="highlight">Open Finance</span> and global payments (SWIFT, ISO 20022); <span class="highlight">+15% uplift in fraud-detection model precision</span> on an AI/ML program at Citibank; <span class="highlight">Petrobras modernization</span> migrating legacy systems toward <span class="highlight">OutSystems and SAP</span> with agile outsourcing governance, executive reporting, and risk mitigation.',
      aboutP3:
        'Education: <span class="highlight">PhD candidate in Applied IT — UNIFOR (expected 2027)</span>; MBA in IT Project Management (Farias Brito, 2016); M.Sc. Applied Informatics (UNIFOR, 2014); B.Sc. Computer Science (UNIFOR, 2010). I also taught MBA courses in <span class="highlight">Data Science, BI, and Big Data</span> at FBUNI and UNIFOR (through 2025). Certifications: <span class="highlight">PMP (PMI)</span> and <span class="highlight">PSM I (Scrum.org)</span>; training in ITIL, COBIT, and TOGAF; recent upskilling in SAP CPS, OutSystems, Salesforce, and Data Science.',
      statProjects: 'Years in IT, data & delivery leadership',
      statYears: '% uplift in fraud-model precision (Citibank AI program)',
      statClients: 'Flagship certifications (PMP · PSM I)',
      statTech: 'Years leading Citibank programs (Qintess)',
      expTitle: 'Experience (résumé-aligned)',
      expSubtitle:
        'Scope synthesized from your 2026.1 EN résumé and LinkedIn profile—optimized for recruiters and hiring managers.',
      exp1Role: 'TCS — allocated to Petrobras · Senior Project Manager',
      exp1Meta: 'Mar 2025 – Nov 2025 · Digital transformation & legacy modernization',
      exp1b1:
        'Led high-impact programs migrating legacy landscapes to OutSystems and SAP within an agile outsourcing model.',
      exp1b2:
        'Owned resource planning, risk mitigation, scheduling, and executive reporting across distributed teams.',
      exp1b3:
        'Aligned delivery cadence with enterprise governance while keeping stakeholders informed on scope, cost, and quality.',
      exp2Role: 'Citibank — via Qintess · Senior Project Manager',
      exp2Meta: 'May 2020 – Oct 2024 · Regulated financial services & AI',
      exp2b1:
        'Open Finance: led a strategic program (~$1M budget per EN résumé), delivering ahead of the regulatory baseline (10% per résumé).',
      exp2b2:
        'AI & risk: directed ML models for fraud detection, achieving +15% predictive accuracy improvement (as stated on résumé).',
      exp2b3:
        'Data strategy: governed BI pipelines and integrations involving global payment rails (SWIFT, ISO 20022), including multi-bank coordination as described on the 2026.1 résumé (Citibank / Goldman Sachs context).',
      exp3Role: 'NTConsult, Sonda IT & prior delivery leadership',
      exp3Meta: '2010 – 2019 · Architecture, banking PM, BI & telecom',
      exp3b1:
        'Senior Software Architect for Peru SUNAT National Single Account: data/application architecture with Kubernetes, Kafka, MongoDB, and DevOps practices.',
      exp3b2:
        'Senior PM at Sonda IT (Banco do Nordeste): full project lifecycle—planning, cost estimation, scheduling, risk analysis, and strategic alignment.',
      exp3b3:
        'Earlier: BI and ETL programs for Claro and TIM; web and synchronization services for Vivo and Oi; Salesforce CRM + SAP/RM integrations at DeVry; requirements & BPM with SAP MM/FI at LSBD; real-time dashboards at Montreal; function-point analysis and PMO control at Unigex.',
      exp4Role: 'Higher education & credentials',
      exp4Meta: 'Teaching · Certifications · Continuous learning',
      exp4b1:
        'MBA professor — Data Science, BI & Big Data (FBUNI; Jan 2022–Jun 2025) and analytical management / BI / Big Data (UNIFOR; Jan 2021–Jun 2025) per LinkedIn.',
      exp4b2:
        'Certified PMP (PMI) and Professional Scrum Master I (Scrum.org); complementary training in ITIL, COBIT, and TOGAF.',
      exp4b3:
        'Recent technical refreshers: SAP CPS, OutSystems, Salesforce, and Data Science (2023–2025) per résumé.',
      techTitle: 'Skills & tools',
      techSubtitle:
        'Management, data platforms, cloud/AI services, and enterprise development stack—verbatim themes from your 2026.1 CV.',
      projTitle: 'Program highlights',
      projSubtitle:
        'Representative outcomes from regulated and large-scale environments. Full chronology on LinkedIn and PDF résumés.',
      proj1Title: 'Open Finance & global payments (Citibank / Qintess)',
      proj1Desc:
        'Directed a strategic Open Finance initiative with significant budget ownership (EN résumé: ~USD 1M), <span class="highlight">beating the regulatory deadline by ~10%</span>, while orchestrating SWIFT / ISO 20022 integrations and executive governance.',
      proj2Title: 'AI / ML for fraud & risk (Citibank)',
      proj2Desc:
        'Led implementation of machine-learning models for fraud detection, delivering a <span class="highlight">+15% gain in predictive accuracy</span> versus the prior baseline—documented on the 2026.1 résumé.',
      proj3Title: 'Petrobras digital transformation (TCS)',
      proj3Desc:
        'Senior PM for Petrobras-facing programs: <span class="highlight">legacy-to-OutSystems/SAP</span> modernization, agile outsourcing controls, risk mitigation, and transparent reporting to executives and partners.',
      projCta: 'Corroborate on LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Let’s talk',
      contactLead:
        'Open to <span class="highlight">senior PM / program director</span> roles, <span class="highlight">data & AI transformation</span> mandates, and advisory engagements across banking, energy, and public sector. Share your objectives, constraints, and geography—I respond with a clear plan.',
      formTitle: 'Direct message',
      formHint:
        'Sends email to lenilsonpinheiro@gmail.com via Google Apps Script (your Gmail / Google account). No third-party inbox activation.',
      formNotConfigured:
        'Contact form is disabled until deploy injects your Web App URL. Add the repository secret or variable PORTFOLIO_APPS_SCRIPT_WEBAPP_URL (see google-apps-script/README.md), then run the Pages workflow again.',
      formSentSuccess: 'Thank you — your message was sent. I will reply as soon as I can.',
      labelName: 'Name',
      labelEmail: 'Email',
      labelMessage: 'Message',
      labelSend: 'Send message',
      formPrivacy:
        'By sending, you agree I may reply using your email. No marketing lists; no resale of your data.',
      titleLogo: 'Return to top of the portfolio (home anchor)',
      titleLang: 'Site language: English US default; Portuguese BR or Spanish ES',
      titleNavHome: 'Go to introduction (hero)',
      titleNavAbout: 'Go to profile summary and KPI cards',
      titleNavExperience: 'Go to résumé-aligned experience',
      titleNavTech: 'Go to skills and tools grid',
      titleNavProjects: 'Go to program highlights',
      titleNavContact: 'Go to contact and message form',
      titleHeroPrimary: 'Scroll to highlights: Open Finance, AI/fraud, Petrobras',
      titleHeroSecondary: 'Scroll to contact: email, phone, LinkedIn, form',
      titleStat1: 'KPI: years in IT and delivery leadership (~25 per 2026.1 résumé).',
      titleStat2: 'KPI: fraud-model precision uplift on Citibank program (+15% per résumé).',
      titleStat3: 'KPI: flagship certifications — PMP and PSM I.',
      titleStat4: 'KPI: years leading Citibank programs via Qintess (rounded).',
      titleEmail: 'Compose email to lenilsonpinheiro@gmail.com',
      titlePhone: 'Phone / WhatsApp: +55 85 99733-1000',
      titleLinkedIn: 'Open LinkedIn profile (corroborate experience)',
      titleGitHub: 'Open GitHub (code samples)',
      titleSubmit: 'Send message via Google Apps Script (HTTPS POST to script.google.com)',
      titleTechCard: 'Skill from CV; grid is a visual index',
      titleProjectCard: 'Program narrative; verify on LinkedIn and PDF CV',
      titleFormSection: 'Contact form — each field has a hint below the label',
      hintName: 'How you want to be addressed (e.g. first and last name).',
      hintEmail: 'Use an address you check often so I can reply.',
      hintMsg: 'Role type, region, timeline, and how I can help (max 4000 characters).',
      phName: 'Your name',
      phEmail: 'you@company.com',
      phMsg: 'Your message…',
      loadingTitle: 'Loading portfolio…',
      topicsSummary: 'Recruiting & search keywords',
      topicsBody:
        '#LenilsonPinheiroValerio #LenilsonPinheiro #SeniorProjectManager #PMP #PSM #Scrum #OpenFinance #DigitalTransformation #DataGovernance #MachineLearning #AI #Citibank #Qintess #TCS #Petrobras #BancoDoNordeste #SondaIT #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #CSharp #ITIL #COBIT #TOGAF #PhD #UNIFOR #Fortaleza #Hiring #ProgramManagement',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brazil',
      footerPrivacyLink: 'Privacy policy',
      footerTermsLink: 'Terms of service',
      privacyDocTitle: 'Privacy policy · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Privacy policy for this portfolio: contact form data, Google Apps Script, MailApp, GitHub Pages, and your rights (LGPD/GDPR).',
      privacyNavLabel: 'Primary navigation — Privacy policy',
      privacyBackPortfolio: '← Portfolio',
      privacyPageTitle: 'Privacy policy',
      privacyUpdatedLine: 'Last updated: <time datetime="2026-05-05">5 May 2026</time>',
      privacyH2Who: 'Who operates this site',
      privacyPWho:
        'This static portfolio is published by <strong>Lenilson Pinheiro Valério</strong>. Contact: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Form: 'Contact form',
      privacyPForm1:
        'When you use the contact form, you voluntarily provide your <strong>name</strong>, <strong>email address</strong>, and <strong>message</strong>. The data is sent over HTTPS to a <strong>Google Apps Script</strong> web app and processed with Google’s <strong>MailApp</strong> to deliver email to the portfolio owner. Google processes the request under its own terms and policies.',
      privacyPForm2:
        'A hidden honeypot field helps reduce automated spam; if it is filled, the submission is discarded.',
      privacyH2Purpose: 'Purpose and retention',
      privacyPPurpose:
        'Data is used only to <strong>read and reply</strong> to your message. Content is handled like ordinary email in the owner’s inbox. There is <strong>no sale</strong> of personal data and <strong>no marketing lists</strong> are built from the form.',
      privacyH2Third: 'Third parties',
      privacyPThird:
        'Hosting: <strong>GitHub Pages</strong>. Form backend: <strong>Google Apps Script</strong> / <strong>Google</strong>. Other page resources (e.g. fonts or CDNs) load under those providers’ policies.',
      privacyH2Rights: 'Your rights',
      privacyPRights:
        'Depending on your jurisdiction (e.g. LGPD / GDPR), you may have rights to access, correct, or delete personal data. Contact <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Changes: 'Changes',
      privacyPChanges:
        'This page may be updated when the site or form processing changes. The date above will be revised accordingly.',
      privacyFooterBack: 'Back to portfolio',
      termsDocTitle: 'Terms of service · Lenilson Pinheiro Valério',
      termsMetaDescription:
        'Terms of service for this static portfolio and contact form (GitHub Pages, Google Apps Script).',
      termsNavLabel: 'Primary navigation — Terms of service',
      termsBackPortfolio: '← Portfolio',
      termsPageTitle: 'Terms of service',
      termsUpdatedLine: 'Last updated: <time datetime="2026-05-05">5 May 2026</time>',
      termsH2Acceptance: 'Acceptance',
      termsPAcceptance:
        'By using this website you agree to these terms. If you do not agree, do not use the site or the contact form.',
      termsH2Use: 'Use of the site',
      termsPUse:
        'The content is provided for professional information about <strong>Lenilson Pinheiro Valério</strong>. You must not misuse the site (including attempting to disrupt, scrape unlawfully, or overload systems).',
      termsH2Contact: 'Contact form',
      termsPContact:
        'Messages are sent over HTTPS to a <strong>Google Apps Script</strong> endpoint. You are responsible for the accuracy of the data you send. Use of the form is subject to the <a href="privacy.html">privacy policy</a>.',
      termsH2Disclaimer: 'Disclaimer',
      termsPDisclaimer:
        'Materials are provided “as is” without warranties of any kind. Nothing on this site constitutes legal, financial, or professional advice.',
      termsH2Law: 'Governing law',
      termsPLaw:
        'These terms are governed by the laws of <strong>Brazil</strong>, without prejudice to mandatory consumer or data-protection rules in your jurisdiction.',
      termsH2Changes: 'Changes',
      termsPChanges:
        'These terms may be updated; the date above will be revised. Continued use after changes means you accept the updated terms.',
      termsFooterBack: 'Back to portfolio',
      typing: [
        'Senior Project Manager',
        'Digital transformation & data executive',
        'AI / ML & Open Finance delivery',
        'PhD candidate · PMP · PSM I',
      ],
      ariaMenu: 'Open menu',
      ariaMenuClose: 'Close menu',
      ariaThemeToLight: 'Switch to light theme',
      ariaThemeToDark: 'Switch to dark theme',
      titleThemeToLight: 'Use light theme',
      titleThemeToDark: 'Use dark theme',
    },
    pt: {
      htmlLang: 'pt-BR',
      schemaName: 'Lenilson Pinheiro Valério',
      schemaJobTitle: 'Senior Project Manager',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Gerente de Projetos Sênior · Transformação Digital, Dados e IA',
      metaDescription:
        '~25 anos liderando programas no Citibank (Qintess), TCS/Petrobras, Banco do Nordeste e SUNAT (Peru). Doutorando em TI Aplicada (UNIFOR). PMP · PSM I. Open Finance, IA/ML para fraude, SAP e OutSystems. Fortaleza, CE.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Gerente de Projetos Sênior,PMP,PSM I,Open Finance,transformação digital,governança de dados,IA,Machine Learning,Citibank,Qintess,TCS,Petrobras,Banco do Nordeste,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Python,Java,Kubernetes,Kafka,MongoDB,Scrum,ágil,ITIL,COBIT,UNIFOR,professor MBA',
      ogLocale: 'pt_BR',
      langLabel: 'Idioma',
      navSkip: 'Pular para o conteúdo principal',
      navHome: 'Início',
      navAbout: 'Sobre',
      navExperience: 'Experiência',
      navTech: 'Competências',
      navProjects: 'Destaques',
      navContact: 'Contato',
      heroGreeting: 'Olá, eu sou',
      heroCtaPrimary: 'Ver destaques',
      heroCtaSecondary: 'Falar comigo',
      aboutTitle: 'Perfil',
      aboutSubtitle:
        'Entrega de programas em nível executivo em bancos, energia e governo — com domínio profundo de dados, IA e arquitetura corporativa.',
      aboutP1:
        'Sou <span class="highlight">Gerente de Projetos Sênior</span> e <span class="highlight">especialista em transformação digital</span>, com <span class="highlight">cerca de 25 anos</span> liderando iniciativas estratégicas em organizações globais e reguladas — incluindo <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS na Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span> e <span class="highlight">SUNAT (NTConsult, Peru)</span>. Uno rigor <span class="highlight">PMP e Scrum (PSM I)</span> a fluência técnica em dados, nuvem e integrações.',
      aboutP2:
        'Impacto recente: <span class="highlight">Open Finance</span> e pagamentos globais (SWIFT, ISO 20022); <span class="highlight">+15% na precisão preditiva</span> de modelos de fraude (programa de IA/ML no Citibank, conforme CV); <span class="highlight">modernização na Petrobras</span> migrando legado para <span class="highlight">OutSystems e SAP</span>, com governança ágil de terceirização, riscos e reporting executivo.',
      aboutP3:
        'Formação: <span class="highlight">Doutorando em TI Aplicada — UNIFOR (previsão 2027)</span>; MBA em Gestão de Projetos de TI (Farias Brito, 2016); Mestrado em Informática Aplicada (UNIFOR, 2014); Bacharelado em Ciência da Computação (UNIFOR, 2010). Professor de MBA em <span class="highlight">Ciência de Dados, BI e Big Data</span> na FBUNI e UNIFOR (até 2025). Certificações: <span class="highlight">PMP (PMI)</span> e <span class="highlight">PSM I (Scrum.org)</span>; treinamentos em ITIL, COBIT e TOGAF; aperfeiçoamento em SAP CPS, OutSystems, Salesforce e Ciência de Dados (2023–2025).',
      statProjects: 'Anos em TI, dados e liderança de entregas',
      statYears: '% de ganho na precisão de modelos antifraude (Citibank)',
      statClients: 'Certificações carro-chefe (PMP · PSM I)',
      statTech: 'Anos liderando programas no Citibank (Qintess)',
      expTitle: 'Experiência (alinhada ao CV 2026.1)',
      expSubtitle:
        'Escopo sintetizado a partir do seu currículo EN/PT e do LinkedIn — linguagem orientada a recrutadores.',
      exp1Role: 'TCS — alocado na Petrobras · Gerente de Projetos Sênior',
      exp1Meta: 'Mar 2025 – nov 2025 · Transformação digital e modernização de legado',
      exp1b1:
        'Liderei projetos de alto impacto migrando sistemas legados para OutSystems e SAP em modelo de terceirização ágil.',
      exp1b2:
        'Planejamento de recursos, mitigação de riscos, cronograma e report executivo com times distribuídos.',
      exp1b3:
        'Governança de entrega alinhada a controles corporativos, com transparência de escopo, custo e qualidade.',
      exp2Role: 'Citibank — via Qintess · Gerente de Projetos Sênior',
      exp2Meta: 'Mai 2020 – out 2024 · Serviços financeiros regulados e IA',
      exp2b1:
        'Open Finance: projeto estratégico (orçamento da ordem de <span class="highlight">R$ 5 milhões</span> no CV PT), com entrega <span class="highlight">~10% antes</span> do marco regulatório (conforme currículo).',
      exp2b2:
        'IA & fraude: direção da implementação de modelos de ML para detecção de fraudes, com <span class="highlight">+15% na precisão preditiva</span> (currículo).',
      exp2b3:
        'Dados: governança e pipelines de BI com trilhos de pagamento globais (SWIFT, ISO 20022), incluindo coordenação multi-banco conforme CV 2026.1 (Citibank / Goldman Sachs).',
      exp3Role: 'NTConsult, Sonda IT e lideranças anteriores',
      exp3Meta: '2010 – 2019 · Arquitetura, PM bancário, BI e telecom',
      exp3b1:
        'Arquiteto de Software Sênior na SUNAT (Conta Única Nacional): arquitetura de dados e aplicações com Kubernetes, Kafka, MongoDB e práticas DevOps.',
      exp3b2:
        'Gerente de Projetos Sênior na Sonda IT (Banco do Nordeste): ciclo completo — planejamento, custos, cronograma, análise de risco e alinhamento estratégico.',
      exp3b3:
        'Anteriormente: BI/ETL para Claro e TIM; sistemas web e sincronização para Vivo e Oi; Salesforce + SAP/RM na DeVry; requisitos e BPM com SAP MM/FI no LSBD; dashboards em tempo real na Montreal; análise de pontos de função e PMO na Unigex.',
      exp4Role: 'Ensino superior e credenciais',
      exp4Meta: 'Docência · Certificações · Aperfeiçoamento',
      exp4b1:
        'Professor de MBA — Ciência de Dados, BI e Big Data (FBUNI; jan 2022–jun 2025) e gestão analítica / BI / Big Data (UNIFOR; jan 2021–jun 2025), conforme LinkedIn.',
      exp4b2:
        'PMP (PMI) e Professional Scrum Master I (Scrum.org); treinamentos em ITIL, COBIT e TOGAF.',
      exp4b3:
        'Cursos recentes: SAP CPS, OutSystems, Salesforce e Ciência de Dados (2023–2025), conforme currículo.',
      techTitle: 'Competências e ferramentas',
      techSubtitle:
        'Gestão, plataformas de dados, nuvem/IA e stack corporativo — eixos do seu CV 2026.1.',
      projTitle: 'Destaques de programa',
      projSubtitle:
        'Resultados representativos em ambientes regulados e de grande escala. Linha do tempo completa no LinkedIn e nos PDFs.',
      proj1Title: 'Open Finance e pagamentos globais (Citibank / Qintess)',
      proj1Desc:
        'Liderança de iniciativa Open Finance com orçamento relevante (CV PT: <span class="highlight">~R$ 5 milhões</span>), <span class="highlight">antecipação ~10%</span> ao marco regulatório e integrações SWIFT / ISO 20022 com governança executiva.',
      proj2Title: 'IA / ML para fraude e risco (Citibank)',
      proj2Desc:
        'Coordenação de modelos de machine learning para detecção de fraudes, com <span class="highlight">+15% de ganho na precisão preditiva</span> em relação ao baseline — conforme currículo 2026.1.',
      proj3Title: 'Transformação digital na Petrobras (TCS)',
      proj3Desc:
        'Gerente de projetos em frente à Petrobras: <span class="highlight">modernização legado → OutSystems/SAP</span>, controles de terceirização ágil, mitigação de risco e reporting transparente.',
      projCta: 'Conferir no LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Vamos conversar',
      contactLead:
        'Aberto a <span class="highlight">papéis de gerente / diretor de programa</span>, <span class="highlight">mandatos de transformação com dados e IA</span> e assessoria em bancos, energia e setor público. Envie objetivos, restrições e geografia — respondo com plano claro.',
      formTitle: 'Mensagem direta',
      formHint:
        'Envia e-mail para lenilsonpinheiro@gmail.com via Google Apps Script (MailApp na sua conta Google). Sem ativação de serviço de terceiros.',
      formNotConfigured:
        'Formulário desativado até o deploy injetar a URL do aplicativo Web. Adicione o secret ou variable de repositório PORTFOLIO_APPS_SCRIPT_WEBAPP_URL (veja google-apps-script/README.md) e volte a executar o workflow do Pages.',
      formSentSuccess: 'Obrigado — a mensagem foi enviada. Responderei o quanto antes.',
      labelName: 'Nome',
      labelEmail: 'E-mail',
      labelMessage: 'Mensagem',
      labelSend: 'Enviar mensagem',
      formPrivacy:
        'Ao enviar, você concorda que eu possa responder usando seu e-mail. Sem listas de marketing; sem revenda de dados.',
      titleLogo: 'Voltar ao topo do portfólio (início)',
      titleLang: 'Idioma do site: inglês EUA padrão; português BR ou espanhol ES',
      titleNavHome: 'Ir para a introdução (hero)',
      titleNavAbout: 'Ir para o resumo do perfil e indicadores',
      titleNavExperience: 'Ir para experiência alinhada ao CV',
      titleNavTech: 'Ir para competências e ferramentas',
      titleNavProjects: 'Ir para destaques de programa',
      titleNavContact: 'Ir para contato e formulário',
      titleHeroPrimary: 'Ir para destaques: Open Finance, IA/fraude, Petrobras',
      titleHeroSecondary: 'Ir para contato: e-mail, telefone, LinkedIn, formulário',
      titleStat1: 'Indicador: anos em TI e liderança de entregas (~25 no CV 2026.1).',
      titleStat2: 'Indicador: ganho de precisão em modelo antifraude no Citibank (+15% no CV).',
      titleStat3: 'Indicador: certificações PMP e PSM I.',
      titleStat4: 'Indicador: anos liderando programas no Citibank via Qintess (arredondado).',
      titleEmail: 'Abrir cliente de e-mail para lenilsonpinheiro@gmail.com',
      titlePhone: 'Telefone / WhatsApp: +55 85 99733-1000',
      titleLinkedIn: 'Abrir LinkedIn (conferir experiência)',
      titleGitHub: 'Abrir GitHub (amostras de código)',
      titleSubmit: 'Enviar mensagem via Google Apps Script (POST HTTPS para script.google.com)',
      titleTechCard: 'Competência do CV; grade é índice visual',
      titleProjectCard: 'Narrativa de programa; datas no LinkedIn e CV PDF',
      titleFormSection: 'Formulário — cada campo tem dica abaixo do rótulo',
      hintName: 'Como prefere ser chamado (ex.: nome e sobrenome).',
      hintEmail: 'Um e-mail válido que você acompanha para eu responder.',
      hintMsg: 'Tipo de papel, região, prazo e como posso ajudar (até 4000 caracteres).',
      phName: 'Seu nome',
      phEmail: 'voce@empresa.com',
      phMsg: 'Sua mensagem…',
      loadingTitle: 'A carregar o portfólio…',
      topicsSummary: 'Palavras-chave para recrutamento e busca',
      topicsBody:
        '#LenilsonPinheiroValerio #LenilsonPinheiro #GerenteDeProjetos #PMP #PSM #Scrum #OpenFinance #TransformacaoDigital #GovernancaDeDados #MachineLearning #IA #Citibank #Qintess #TCS #Petrobras #BancoDoNordeste #SondaIT #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #CSharp #ITIL #COBIT #TOGAF #Doutorado #UNIFOR #Fortaleza #Contratacao #GestaoDeProjetos',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brasil',
      footerPrivacyLink: 'Política de privacidade',
      footerTermsLink: 'Termos de serviço',
      privacyDocTitle: 'Política de privacidade · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Política de privacidade do portfólio: dados do formulário de contacto, Google Apps Script, MailApp, GitHub Pages e os seus direitos (LGPD/RGPD).',
      privacyNavLabel: 'Navegação principal — Política de privacidade',
      privacyBackPortfolio: '← Portfólio',
      privacyPageTitle: 'Política de privacidade',
      privacyUpdatedLine: 'Última atualização: <time datetime="2026-05-05">5 de maio de 2026</time>',
      privacyH2Who: 'Quem opera este site',
      privacyPWho:
        'Este portfólio estático é publicado por <strong>Lenilson Pinheiro Valério</strong>. Contacto: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Form: 'Formulário de contacto',
      privacyPForm1:
        'Ao usar o formulário, fornece voluntariamente o <strong>nome</strong>, o <strong>endereço de e-mail</strong> e a <strong>mensagem</strong>. Os dados são enviados por HTTPS para uma aplicação Web <strong>Google Apps Script</strong> e processados com o <strong>MailApp</strong> da Google para entregar o e-mail ao titular do portfólio. A Google trata o pedido segundo os seus próprios termos e políticas.',
      privacyPForm2:
        'Um campo honeypot oculto ajuda a reduzir spam automatizado; se for preenchido, o envio é descartado.',
      privacyH2Purpose: 'Finalidade e conservação',
      privacyPPurpose:
        'Os dados servem apenas para <strong>ler e responder</strong> à sua mensagem. O conteúdo é tratado como e-mail habitual na caixa do titular. <strong>Não há venda</strong> de dados pessoais nem construção de <strong>listas de marketing</strong> a partir do formulário.',
      privacyH2Third: 'Terceiros',
      privacyPThird:
        'Alojamento: <strong>GitHub Pages</strong>. Backend do formulário: <strong>Google Apps Script</strong> / <strong>Google</strong>. Outros recursos da página (ex.: tipos de letra ou CDN) carregam segundo as políticas desses fornecedores.',
      privacyH2Rights: 'Os seus direitos',
      privacyPRights:
        'Conforme a sua jurisdição (ex.: LGPD / RGPD), pode ter direitos de acesso, retificação ou eliminação de dados pessoais. Contacte <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Changes: 'Alterações',
      privacyPChanges:
        'Esta página pode ser atualizada quando o site ou o tratamento no formulário mudarem. A data acima será revista em conformidade.',
      privacyFooterBack: 'Voltar ao portfólio',
      termsDocTitle: 'Termos de serviço · Lenilson Pinheiro Valério',
      termsMetaDescription:
        'Termos de serviço deste portfólio estático e formulário de contacto (GitHub Pages, Google Apps Script).',
      termsNavLabel: 'Navegação principal — Termos de serviço',
      termsBackPortfolio: '← Portfólio',
      termsPageTitle: 'Termos de serviço',
      termsUpdatedLine: 'Última atualização: <time datetime="2026-05-05">5 de maio de 2026</time>',
      termsH2Acceptance: 'Aceitação',
      termsPAcceptance:
        'Ao utilizar este site aceita estes termos. Se não concordar, não utilize o site nem o formulário de contacto.',
      termsH2Use: 'Utilização do site',
      termsPUse:
        'O conteúdo destina-se a informação profissional sobre <strong>Lenilson Pinheiro Valério</strong>. Não deve utilizar o site de forma abusiva (incluindo perturbação, scraping ilícito ou sobrecarga de sistemas).',
      termsH2Contact: 'Formulário de contacto',
      termsPContact:
        'As mensagens são enviadas por HTTPS para um endpoint <strong>Google Apps Script</strong>. É responsável pela veracidade dos dados. O uso está sujeito à <a href="privacy.html">política de privacidade</a>.',
      termsH2Disclaimer: 'Exclusão de garantias',
      termsPDisclaimer:
        'Os materiais são fornecidos “tal como estão”, sem garantias. Nada neste site constitui aconselhamento jurídico, financeiro ou profissional.',
      termsH2Law: 'Lei aplicável',
      termsPLaw:
        'Estes termos regem-se pelas leis de <strong>Brasil</strong>, sem prejuízo de normas imperativas de consumo ou proteção de dados na sua jurisdição.',
      termsH2Changes: 'Alterações',
      termsPChanges:
        'Estes termos podem ser atualizados; a data acima será revista. O uso continuado após alterações implica aceitação.',
      termsFooterBack: 'Voltar ao portfólio',
      typing: [
        'Gerente de Projetos Sênior',
        'Transformação digital e dados',
        'Open Finance e IA/ML em produção',
        'Doutorando · PMP · PSM I',
      ],
      ariaMenu: 'Abrir menu',
      ariaMenuClose: 'Fechar menu',
      ariaThemeToLight: 'Mudar para tema claro',
      ariaThemeToDark: 'Mudar para tema escuro',
      titleThemeToLight: 'Usar tema claro',
      titleThemeToDark: 'Usar tema escuro',
    },
    es: {
      htmlLang: 'es-ES',
      schemaName: 'Lenilson Pinheiro Valério',
      schemaJobTitle: 'Senior Project Manager',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Director de proyecto senior · Transformación digital, datos e IA',
      metaDescription:
        '~25 años liderando programas en Citibank (Qintess), TCS/Petrobras, Banco do Nordeste y SUNAT (Perú). Doctorando en TI aplicada (UNIFOR). PMP · PSM I. Open Finance, IA/ML antifraude, SAP y OutSystems. Fortaleza, Brasil.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Senior Project Manager,PMP,PSM I,Open Finance,transformación digital,gobierno del dato,IA,Machine Learning,Citibank,Qintess,TCS,Petrobras,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Kubernetes,Kafka,MongoDB,Python,Java,Scrum,ágil,ITIL,COBIT,UNIFOR',
      ogLocale: 'es_ES',
      langLabel: 'Idioma',
      navSkip: 'Saltar al contenido principal',
      navHome: 'Inicio',
      navAbout: 'Sobre mí',
      navExperience: 'Experiencia',
      navTech: 'Competencias',
      navProjects: 'Destacados',
      navContact: 'Contacto',
      heroGreeting: 'Hola, soy',
      heroCtaPrimary: 'Ver destacados',
      heroCtaSecondary: 'Contactar',
      aboutTitle: 'Perfil',
      aboutSubtitle:
        'Dirección de programas de nivel ejecutivo en banca, energía y sector público — con dominio profundo de datos, IA y arquitectura empresarial.',
      aboutP1:
        'Soy <span class="highlight">Senior Project Manager</span> y <span class="highlight">especialista en transformación digital</span>, con <span class="highlight">~25 años</span> liderando iniciativas para organizaciones globales y reguladas — <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS en Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span> y <span class="highlight">SUNAT (NTConsult, Perú)</span>. Combino disciplina <span class="highlight">PMP y Scrum (PSM I)</span> con fluidez técnica en datos, nube e integración.',
      aboutP2:
        'Impacto reciente: <span class="highlight">Open Finance</span> y pagos globales (SWIFT, ISO 20022); <span class="highlight">+15% en precisión predictiva</span> de modelos antifraude (programa IA/ML en Citibank, según CV); <span class="highlight">modernización Petrobras</span> hacia <span class="highlight">OutSystems y SAP</span> con gobernanza ágil, riesgos y reporting ejecutivo.',
      aboutP3:
        'Formación: <span class="highlight">Doctorando en TI aplicada — UNIFOR (previsto 2027)</span>; MBA en gestión de proyectos de TI (Farias Brito, 2016); Máster en informática aplicada (UNIFOR, 2014); grado en informática (UNIFOR, 2010). Profesor de MBA en <span class="highlight">ciencia de datos, BI y Big Data</span> (FBUNI y UNIFOR, hasta 2025). Certificaciones: <span class="highlight">PMP (PMI)</span> y <span class="highlight">PSM I (Scrum.org)</span>; formación en ITIL, COBIT y TOGAF; actualización en SAP CPS, OutSystems, Salesforce y ciencia de datos (2023–2025).',
      statProjects: 'Años en TI, datos y liderazgo de entregas',
      statYears: '% de mejora en precisión antifraude (Citibank)',
      statClients: 'Certificaciones clave (PMP · PSM I)',
      statTech: 'Años liderando programas en Citibank (Qintess)',
      expTitle: 'Experiencia (alineada al CV 2026.1)',
      expSubtitle:
        'Alcance sintetizado desde su CV EN/PT y LinkedIn — redacción orientada a reclutadores.',
      exp1Role: 'TCS — asignado a Petrobras · Senior Project Manager',
      exp1Meta: 'Mar 2025 – nov 2025 · Transformación digital y legado',
      exp1b1:
        'Programas de alto impacto migrando sistemas legados a OutSystems y SAP en modelo de outsourcing ágil.',
      exp1b2:
        'Planificación de recursos, riesgos, cronograma y reporting ejecutivo con equipos distribuidos.',
      exp1b3:
        'Gobernanza de entrega alineada a controles corporativos y transparencia de alcance, coste y calidad.',
      exp2Role: 'Citibank — vía Qintess · Senior Project Manager',
      exp2Meta: 'May 2020 – oct 2024 · Servicios financieros regulados e IA',
      exp2b1:
        'Open Finance: programa estratégico con presupuesto significativo (CV EN: ~USD 1M; CV PT: ~R$ 5M), con entrega <span class="highlight">~10% antes</span> del plazo regulatorio (según CV).',
      exp2b2:
        'IA y riesgo: modelos ML para detección de fraude con <span class="highlight">+15% de mejora en precisión predictiva</span> (CV).',
      exp2b3:
        'Datos: gobierno y pipelines de BI con raíles de pago globales (SWIFT, ISO 20022), incluyendo coordinación multi-banco según CV 2026.1 (Citibank / Goldman Sachs).',
      exp3Role: 'NTConsult, Sonda IT y roles anteriores',
      exp3Meta: '2010 – 2019 · Arquitectura, PM bancario, BI y telecom',
      exp3b1:
        'Arquitecto de software senior en SUNAT (Cuenta Única Nacional): arquitectura de datos y apps con Kubernetes, Kafka, MongoDB y DevOps.',
      exp3b2:
        'Senior PM en Sonda IT (Banco do Nordeste): ciclo completo — planificación, costes, cronograma, riesgos y alineación estratégica.',
      exp3b3:
        'Anteriormente: BI/ETL para Claro y TIM; web y sincronización para Vivo y Oi; Salesforce + SAP/RM en DeVry; requisitos y BPM con SAP MM/FI en LSBD; dashboards en Montreal; análisis de puntos de función y PMO en Unigex.',
      exp4Role: 'Educación superior y credenciales',
      exp4Meta: 'Docencia · Certificaciones · Formación continua',
      exp4b1:
        'Profesor MBA — ciencia de datos, BI y Big Data (FBUNI; ene 2022–jun 2025) y gestión analítica / BI / Big Data (UNIFOR; ene 2021–jun 2025), según LinkedIn.',
      exp4b2:
        'PMP (PMI) y Professional Scrum Master I (Scrum.org); formación en ITIL, COBIT y TOGAF.',
      exp4b3:
        'Cursos recientes: SAP CPS, OutSystems, Salesforce y ciencia de datos (2023–2025), según CV.',
      techTitle: 'Competencias y herramientas',
      techSubtitle:
        'Gestión, plataformas de datos, nube/IA y stack empresarial — ejes del CV 2026.1.',
      projTitle: 'Hitos de programa',
      projSubtitle:
        'Resultados en entornos regulados y de gran escala. Cronología completa en LinkedIn y PDFs.',
      proj1Title: 'Open Finance y pagos globales (Citibank / Qintess)',
      proj1Desc:
        'Dirección de Open Finance con presupuesto relevante (CV EN ~USD 1M), <span class="highlight">~10% antes</span> del hito regulatorio e integraciones SWIFT / ISO 20022 con gobierno ejecutivo.',
      proj2Title: 'IA / ML para fraude y riesgo (Citibank)',
      proj2Desc:
        'Implementación de modelos ML antifraude con <span class="highlight">+15% de mejora en precisión predictiva</span> frente al baseline — CV 2026.1.',
      proj3Title: 'Transformación digital Petrobras (TCS)',
      proj3Desc:
        'Senior PM frente a Petrobras: <span class="highlight">modernización legado → OutSystems/SAP</span>, controles de outsourcing ágil, mitigación de riesgos y reporting transparente.',
      projCta: 'Verificar en LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Hablemos',
      contactLead:
        'Abierto a <span class="highlight">roles senior PM / director de programa</span>, <span class="highlight">mandatos de datos e IA</span> y asesoría en banca, energía y sector público. Comparta objetivos y restricciones — respondo con un plan claro.',
      formTitle: 'Mensaje directo',
      formHint:
        'Envía correo a lenilsonpinheiro@gmail.com mediante Google Apps Script (MailApp en tu cuenta Google). Sin activación de terceros.',
      formNotConfigured:
        'Formulario desactivado hasta que el despliegue inyecte la URL del aplicación web. Añade el secret o variable del repositorio PORTFOLIO_APPS_SCRIPT_WEBAPP_URL (ver google-apps-script/README.md) y vuelve a ejecutar el workflow de Pages.',
      formSentSuccess: 'Gracias — tu mensaje fue enviado. Responderé lo antes posible.',
      labelName: 'Nombre',
      labelEmail: 'Correo',
      labelMessage: 'Mensaje',
      labelSend: 'Enviar mensaje',
      formPrivacy:
        'Al enviar, aceptas que pueda responder usando tu correo. Sin listas de marketing; sin reventa de datos.',
      titleLogo: 'Volver al inicio del portafolio',
      titleLang: 'Idioma: inglés EE.UU. por defecto; portugués BR o español ES',
      titleNavHome: 'Ir a la introducción (hero)',
      titleNavAbout: 'Ir al resumen del perfil e indicadores',
      titleNavExperience: 'Ir a experiencia alineada al CV',
      titleNavTech: 'Ir a competencias y herramientas',
      titleNavProjects: 'Ir a hitos de programa',
      titleNavContact: 'Ir a contacto y formulario',
      titleHeroPrimary: 'Ir a hitos: Open Finance, IA/fraude, Petrobras',
      titleHeroSecondary: 'Ir a contacto: correo, teléfono, LinkedIn, formulario',
      titleStat1: 'KPI: años en TI y liderazgo de entregas (~25 en CV 2026.1).',
      titleStat2: 'KPI: mejora de precisión antifraude en Citibank (+15% en CV).',
      titleStat3: 'KPI: certificaciones PMP y PSM I.',
      titleStat4: 'KPI: años liderando programas en Citibank vía Qintess (redondeado).',
      titleEmail: 'Abrir cliente de correo para lenilsonpinheiro@gmail.com',
      titlePhone: 'Teléfono / WhatsApp: +55 85 99733-1000',
      titleLinkedIn: 'Abrir LinkedIn (verificar experiencia)',
      titleGitHub: 'Abrir GitHub (código)',
      titleSubmit: 'Enviar mediante Google Apps Script (POST HTTPS a script.google.com)',
      titleTechCard: 'Habilidad del CV; cuadrícula visual',
      titleProjectCard: 'Relato de programa; fechas en LinkedIn y CV PDF',
      titleFormSection: 'Formulario — cada campo tiene una pista bajo la etiqueta',
      hintName: 'Cómo prefiere que le llamemos.',
      hintEmail: 'Un correo válido que revise para poder responder.',
      hintMsg: 'Tipo de rol, región, plazo y en qué ayudo (máx. 4000 caracteres).',
      phName: 'Su nombre',
      phEmail: 'usted@empresa.com',
      phMsg: 'Su mensaje…',
      loadingTitle: 'Cargando portafolio…',
      topicsSummary: 'Palabras clave para reclutamiento',
      topicsBody:
        '#LenilsonPinheiroValerio #LenilsonPinheiro #SeniorProjectManager #PMP #PSM #Scrum #OpenFinance #TransformacionDigital #GobiernoDelDato #MachineLearning #IA #Citibank #Qintess #TCS #Petrobras #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #ITIL #COBIT #TOGAF #Doctorado #UNIFOR #Fortaleza #Contratacion',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brasil',
      footerPrivacyLink: 'Política de privacidad',
      footerTermsLink: 'Términos del servicio',
      privacyDocTitle: 'Política de privacidad · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Política de privacidad del portafolio: datos del formulario de contacto, Google Apps Script, MailApp, GitHub Pages y sus derechos (LGPD/RGPD).',
      privacyNavLabel: 'Navegación principal — Política de privacidad',
      privacyBackPortfolio: '← Portafolio',
      privacyPageTitle: 'Política de privacidad',
      privacyUpdatedLine: 'Última actualización: <time datetime="2026-05-05">5 de mayo de 2026</time>',
      privacyH2Who: 'Quién opera este sitio',
      privacyPWho:
        'Este portafolio estático lo publica <strong>Lenilson Pinheiro Valério</strong>. Contacto: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Form: 'Formulario de contacto',
      privacyPForm1:
        'Al usar el formulario, usted proporciona voluntariamente su <strong>nombre</strong>, <strong>correo electrónico</strong> y <strong>mensaje</strong>. Los datos se envían por HTTPS a una aplicación web de <strong>Google Apps Script</strong> y se procesan con <strong>MailApp</strong> de Google para entregar el correo al titular del portafolio. Google trata la solicitud según sus propios términos y políticas.',
      privacyPForm2:
        'Un campo honeypot oculto ayuda a reducir el spam automatizado; si se rellena, el envío se descarta.',
      privacyH2Purpose: 'Finalidad y conservación',
      privacyPPurpose:
        'Los datos se usan solo para <strong>leer y responder</strong> a su mensaje. El contenido se gestiona como correo ordinario en la bandeja del titular. <strong>No hay venta</strong> de datos personales ni creación de <strong>listas de marketing</strong> a partir del formulario.',
      privacyH2Third: 'Terceros',
      privacyPThird:
        'Alojamiento: <strong>GitHub Pages</strong>. Backend del formulario: <strong>Google Apps Script</strong> / <strong>Google</strong>. Otros recursos de la página (p. ej. fuentes o CDN) se cargan según las políticas de esos proveedores.',
      privacyH2Rights: 'Sus derechos',
      privacyPRights:
        'Según su jurisdicción (p. ej. LGPD / RGPD), puede tener derechos de acceso, rectificación o supresión de datos personales. Contacte a <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Changes: 'Cambios',
      privacyPChanges:
        'Esta página puede actualizarse cuando cambie el sitio o el tratamiento del formulario. La fecha superior se revisará en consecuencia.',
      privacyFooterBack: 'Volver al portafolio',
      termsDocTitle: 'Términos del servicio · Lenilson Pinheiro Valério',
      termsMetaDescription:
        'Términos del servicio de este portafolio estático y formulario de contacto (GitHub Pages, Google Apps Script).',
      termsNavLabel: 'Navegación principal — Términos del servicio',
      termsBackPortfolio: '← Portafolio',
      termsPageTitle: 'Términos del servicio',
      termsUpdatedLine: 'Última actualización: <time datetime="2026-05-05">5 de mayo de 2026</time>',
      termsH2Acceptance: 'Aceptación',
      termsPAcceptance:
        'Al usar este sitio acepta estos términos. Si no está de acuerdo, no utilice el sitio ni el formulario.',
      termsH2Use: 'Uso del sitio',
      termsPUse:
        'El contenido se ofrece con fines informativos profesionales sobre <strong>Lenilson Pinheiro Valério</strong>. No debe hacer un uso indebido (incluida la interrupción, el scraping ilícito o la sobrecarga).',
      termsH2Contact: 'Formulario de contacto',
      termsPContact:
        'Los mensajes se envían por HTTPS a un endpoint de <strong>Google Apps Script</strong>. Usted es responsable de la exactitud de los datos. El uso está sujeto a la <a href="privacy.html">política de privacidad</a>.',
      termsH2Disclaimer: 'Descargo de responsabilidad',
      termsPDisclaimer:
        'Los materiales se ofrecen “tal cual” sin garantías. Nada en este sitio constituye asesoramiento legal, financiero o profesional.',
      termsH2Law: 'Ley aplicable',
      termsPLaw:
        'Estos términos se rigen por las leyes de <strong>Brasil</strong>, sin perjuicio de normas imperativas de consumo o protección de datos en su jurisdicción.',
      termsH2Changes: 'Cambios',
      termsPChanges:
        'Estos términos pueden actualizarse; la fecha superior se revisará. El uso continuado implica aceptación.',
      termsFooterBack: 'Volver al portafolio',
      typing: [
        'Senior Project Manager',
        'Transformación digital y datos',
        'Open Finance e IA/ML',
        'Doctorando · PMP · PSM I',
      ],
      ariaMenu: 'Abrir menú',
      ariaMenuClose: 'Cerrar menú',
      ariaThemeToLight: 'Cambiar a tema claro',
      ariaThemeToDark: 'Cambiar a tema oscuro',
      titleThemeToLight: 'Usar tema claro',
      titleThemeToDark: 'Usar tema oscuro',
    },
  };

  function normalizeLang(code) {
    if (!code) return 'en';
    var c = String(code).toLowerCase();
    if (c === 'pt' || c === 'pt-br' || c === 'pt_br') return 'pt';
    if (c === 'es' || c === 'es-es' || c === 'es_es') return 'es';
    return 'en';
  }

  function getLangFromQuery() {
    try {
      var p = new URLSearchParams(window.location.search);
      return normalizeLang(p.get('lang'));
    } catch (e) {
      return 'en';
    }
  }

  function getInitialLang() {
    var q = getLangFromQuery();
    if (q !== 'en') return q;
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s) return normalizeLang(s);
    } catch (e) {}
    var c = getCookie('lp_lang');
    if (c) return normalizeLang(c);
    return 'en';
  }

  function setMeta(name, content, attrName) {
    attrName = attrName || 'name';
    if (!content) return;
    var el = document.querySelector('meta[' + attrName + '="' + name + '"]');
    if (el) el.setAttribute('content', content);
  }

  function applySeo(lang) {
    var t = T[lang];
    if (document.body && document.body.getAttribute('data-page') === 'privacy') {
      document.documentElement.lang = t.htmlLang;
      document.title = t.privacyDocTitle;
      setMeta('description', t.privacyMetaDescription);
      setMeta('og:title', t.privacyDocTitle, 'property');
      setMeta('og:description', t.privacyMetaDescription, 'property');
      setMeta('og:locale', t.ogLocale, 'property');
      setMeta('og:url', CANONICAL_BASE + 'privacy.html', 'property');
      setMeta('twitter:title', t.privacyDocTitle);
      setMeta('twitter:description', t.privacyMetaDescription);
      var pj = document.getElementById('privacy-jsonld');
      if (pj) {
        pj.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: t.privacyDocTitle,
          url: CANONICAL_BASE + 'privacy.html',
          inLanguage: t.htmlLang,
          description: t.privacyMetaDescription,
          isPartOf: { '@type': 'WebSite', url: CANONICAL_BASE, name: t.schemaName + ' — Portfolio' },
        });
      }
      return;
    }

    if (document.body && document.body.getAttribute('data-page') === 'terms') {
      document.documentElement.lang = t.htmlLang;
      document.title = t.termsDocTitle;
      setMeta('description', t.termsMetaDescription);
      setMeta('og:title', t.termsDocTitle, 'property');
      setMeta('og:description', t.termsMetaDescription, 'property');
      setMeta('og:locale', t.ogLocale, 'property');
      setMeta('og:url', CANONICAL_BASE + 'terms.html', 'property');
      setMeta('twitter:title', t.termsDocTitle);
      setMeta('twitter:description', t.termsMetaDescription);
      var tj = document.getElementById('terms-jsonld');
      if (tj) {
        tj.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: t.termsDocTitle,
          url: CANONICAL_BASE + 'terms.html',
          inLanguage: t.htmlLang,
          description: t.termsMetaDescription,
          isPartOf: { '@type': 'WebSite', url: CANONICAL_BASE, name: t.schemaName + ' — Portfolio' },
        });
      }
      return;
    }

    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
    setMeta('description', t.metaDescription);
    setMeta('keywords', t.metaKeywords);
    setMeta('og:title', t.metaTitle, 'property');
    setMeta('og:description', t.metaDescription, 'property');
    setMeta('og:locale', t.ogLocale, 'property');
    setMeta('twitter:title', t.metaTitle);
    setMeta('twitter:description', t.metaDescription);

    var ld = document.getElementById('jsonld-person');
    if (ld) {
      var knows = t.metaKeywords.split(',').map(function (s) {
        return s.trim();
      });
      var data = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: t.schemaName,
        url: CANONICAL_BASE,
        email: 'mailto:lenilsonpinheiro@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/lenilsonpinheiro/',
          'https://github.com/LenilsonPinheiro',
        ],
        jobTitle: t.schemaJobTitle,
        description: t.metaDescription,
        knowsAbout: knows,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fortaleza',
          addressRegion: 'CE',
          addressCountry: 'BR',
        },
      };
      ld.textContent = JSON.stringify(data);
    }

    var ldAbout = document.getElementById('jsonld-about');
    if (ldAbout) {
      ldAbout.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: t.schemaName + ' — Portfolio',
        url: CANONICAL_BASE,
        description: t.metaDescription,
        keywords: t.metaKeywords,
        inLanguage: t.htmlLang,
        isPartOf: { '@type': 'WebSite', url: CANONICAL_BASE },
      });
    }
  }

  function applyLanguage(lang) {
    lang = normalizeLang(lang);
    window.__i18nActive = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    setCookie('lp_lang', lang, 31536000);
    try {
      var u = new URL(window.location.href);
      if (lang === 'en') u.searchParams.delete('lang');
      else u.searchParams.set('lang', lang);
      window.history.replaceState({}, '', u.pathname + u.search + u.hash);
    } catch (e) {}

    var pack = T[lang];
    applySeo(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var useHtml = el.getAttribute('data-i18n-html') === '1';
      if (!pack[key]) return;
      if (useHtml) el.innerHTML = pack[key];
      else el.textContent = pack[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-title');
      if (pack[k]) el.setAttribute('title', pack[k]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (pack[k]) el.setAttribute('placeholder', pack[k]);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var ka = el.getAttribute('data-i18n-aria-label');
      if (pack[ka]) el.setAttribute('aria-label', pack[ka]);
    });

    var tmpl = document.getElementById('discovery-seeds');
    if (tmpl) {
      tmpl.textContent = JSON.stringify(
        {
          purpose: 'Professional discovery index (HTML template; not painted; same document for all user agents)',
          lang: lang,
          name: pack.schemaName,
          headline: pack.metaTitle,
          summary: pack.metaDescription,
          keywordList: pack.metaKeywords.split(',').map(function (s) {
            return s.trim();
          }),
          hashtagLine: pack.topicsBody || '',
          resumeRef: '2026.1 EN / PT PDF + LinkedIn',
        },
        null,
        0
      );
    }

    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.value = lang;
      sel.setAttribute('aria-label', pack.langLabel || 'Language');
    }

    var mbtn = document.getElementById('mobileMenuToggle');
    var nlinks = document.getElementById('navLinks');
    if (mbtn && nlinks) {
      mbtn.setAttribute('aria-label', nlinks.classList.contains('active') ? pack.ariaMenuClose : pack.ariaMenu);
    }

    window.dispatchEvent(new CustomEvent('portfolio:lang', { detail: { lang: lang, typing: pack.typing } }));
    window.dispatchEvent(new CustomEvent('portfolio:i18n-applied', { detail: { lang: lang, pack: pack } }));
  }

  function init() {
    var initial = getInitialLang();
    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.value = initial;
      sel.addEventListener('change', function () {
        applyLanguage(sel.value);
      });
    }
    applyLanguage(initial);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PortfolioI18n = { applyLanguage: applyLanguage, normalizeLang: normalizeLang, T: T };
})();
