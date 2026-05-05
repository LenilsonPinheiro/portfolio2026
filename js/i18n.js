(function () {
  'use strict';

  var CANONICAL_BASE = 'https://lenilsonpinheiro.github.io/portfolio2026/';
  var STORAGE_KEY = 'portfolio_lang';
  var CONSENT_KEY = 'portfolio_cookie_consent';

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

  function hasCookieConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY) === 'essential';
    } catch (e) {
      return false;
    }
  }

  function initCookieBanner() {
    var bar = document.getElementById('cookieBanner');
    var btn = document.getElementById('cookieAccept');
    if (!bar || !btn) return;
    function syncVisibility() {
      if (hasCookieConsent()) {
        bar.setAttribute('hidden', '');
        bar.classList.remove('cookie-banner--visible');
        bar.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('has-cookie-banner');
        return;
      }
      bar.removeAttribute('hidden');
      bar.classList.add('cookie-banner--visible');
      bar.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('has-cookie-banner');
    }
    syncVisibility();
    btn.addEventListener('click', function () {
      try {
        localStorage.setItem(CONSENT_KEY, 'essential');
      } catch (e) {}
      var lg = window.__i18nActive ? normalizeLang(window.__i18nActive) : normalizeLang(getInitialLang());
      setCookie('lp_lang', lg, 31536000);
      syncVisibility();
    });
  }

  var T = {
    en: {
      htmlLang: 'en-US',
      schemaName: 'Lenilson Pinheiro Valério',
      schemaJobTitle: 'Senior Project Manager & Solutions Architect',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Senior PM & Solutions Architect · Digital Transformation, Data & AI',
      metaDescription:
        'Senior PM & Solutions Architect (~25 yrs): Citibank (Qintess), TCS/Petrobras, Banco do Nordeste, SUNAT (Peru). Since Oct 2024: consulting in enterprise SaaS, AI integration, React Native, Kotlin, n8n—client details often confidential. PMP · PSM I · Fortaleza — open to senior roles & advisory.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Senior Project Manager,Solutions Architect,program director,technical program management,PMP,PSM I,n8n,React Native,Kotlin,FastAPI,RAG,Open Finance,Pentaho,IBM Watson,Google Cloud AI,digital transformation,data governance,AI,Machine Learning,executive hiring,talent acquisition,Citibank,Qintess,TCS,Petrobras,SaaS,enterprise SaaS,Banco do Nordeste,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Python,Java,Kubernetes,Kafka,MongoDB,Scrum,agile,ITIL,COBIT,UNIFOR',
      discoveryBio:
        'Lenilson Pinheiro Valério — Senior PM & Solutions Architect, Fortaleza, CE, Brazil (~25 yrs). Citibank (Qintess), TCS/Petrobras, Banco do Nordeste, SUNAT (NTConsult, Peru). Since Oct 2024: independent consulting—enterprise SaaS, AI integration, mobile (React Native, Kotlin), n8n; specific clients/products often confidential. PMP, PSM I. Corroborate dates on LinkedIn and CV PDFs (2026.1). Site: https://lenilsonpinheiro.github.io/portfolio2026/ — /llms.txt',
      ogLocale: 'en_US',
      langLabel: 'Language',
      navSkip: 'Skip to main content',
      navHome: 'Home',
      navAbout: 'About',
      navExperience: 'Experience',
      navTech: 'Skills & tools',
      navProjects: 'Highlights',
      navFaq: 'FAQ',
      navContact: 'Contact',
      heroGreeting: "Hi, I'm",
      heroCtaPrimary: 'View highlights',
      heroCtaSecondary: 'Contact me',
      aboutTitle: 'Profile',
      aboutSubtitle:
        'Executive-grade program delivery across banking, energy, and government—with deep command of data platforms, AI, enterprise architecture, n8n automation, and mobile delivery.',
      aboutP1:
        'I am a <span class="highlight">Senior Project Manager</span> and <span class="highlight">Solutions Architect</span> with <span class="highlight">~25 years</span> leading strategic initiatives for global and regulated organizations—including <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS on Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span>, and <span class="highlight">SUNAT (NTConsult, Peru)</span>. Since <span class="highlight">Oct 2024</span> I deliver independent consulting focused on <span class="highlight">SaaS, intelligent automation (n8n), React Native, Kotlin, Python/FastAPI and RAG</span>. I combine <span class="highlight">PMP and Scrum (PSM I)</span> discipline with deep technical fluency.',
      aboutP2:
        'Recent impact: enterprise SaaS and AI integration under <span class="highlight">confidential consulting</span> engagements; <span class="highlight">Open Finance</span> with SWIFT / ISO 20022 and mobile stacks (<span class="highlight">React Native & Kotlin</span>); <span class="highlight">+15% uplift in fraud-model precision</span> at Citibank; <span class="highlight">Petrobras modernization</span> toward <span class="highlight">OutSystems and SAP</span> with agile outsourcing governance.',
      aboutP3:
        'Education: <span class="highlight">PhD in Applied IT — UNIFOR (on hold)</span> to focus on projects and contracting; MBA in IT Project Management (Farias Brito, 2016); M.Sc. Applied Informatics (UNIFOR, 2014); B.Sc. Computer Science (UNIFOR, 2010). Certifications: <span class="highlight">PMP (PMI)</span> and <span class="highlight">PSM I (Scrum.org)</span>; training in ITIL, COBIT, and TOGAF; recent technical depth in <span class="highlight">n8n, React Native, Kotlin, SAP CPS, OutSystems, Salesforce, and Data Science (2023–2025)</span>.',
      statProjects: 'Years in IT, data & delivery leadership',
      statYears: '% uplift in fraud-model precision (Citibank AI program)',
      statClients: 'Flagship certifications (PMP · PSM I)',
      statTech: 'Years leading Citibank programs (Qintess)',
      expTitle: 'Experience (résumé-aligned)',
      expSubtitle:
        'Independent consulting (enterprise SaaS, mobile, n8n), flagship employers, and credentials—aligned with your latest résumé.',
      exp1Role: 'Independent consulting (PJ) · Solutions Architect',
      exp1Meta: 'Oct 2024 – Present · SaaS, mobile & intelligent automation',
      exp1b1:
        'Architecture and delivery of <span class="highlight">enterprise SaaS and AI-enabled platforms</span> under consulting agreements—<span class="highlight">client and product names omitted when confidential</span>.',
      exp1b2:
        'Cross-platform mobile delivery with <span class="highlight">React Native</span> and native modules in <span class="highlight">Kotlin</span> for high performance.',
      exp1b3:
        'Complex <span class="highlight">n8n</span> business-process automation and API integration—optimizing operations and reducing cost.',
      exp2Role: 'TCS — allocated to Petrobras · Senior Project Manager',
      exp2Meta: 'Mar 2025 – Nov 2025 · Digital transformation & legacy modernization',
      exp2b1:
        'Led high-impact digital transformation programs migrating legacy landscapes to <span class="highlight">OutSystems and SAP</span> within an agile outsourcing model.',
      exp2b2:
        'Owned resource planning, risk mitigation, scheduling, and executive reporting across distributed teams.',
      exp2b3:
        'Aligned delivery cadence with enterprise governance—transparent scope, cost, and quality for executives and partners.',
      exp3Role: 'Citibank — via Qintess · Senior Project Manager / Technical Expert',
      exp3Meta: 'May 2020 – Oct 2024 · Regulated financial services, mobile & AI',
      exp3b1:
        'Open Finance & mobile: led the strategic program (<span class="highlight">~USD 1M</span> EN résumé; <span class="highlight">~R$ 5M</span> PT CV), delivering <span class="highlight">~10%</span> ahead of the regulatory deadline; architected mobile interfaces and integrations with <span class="highlight">React Native and Kotlin</span> (3+ years in the program cycle per résumé).',
      exp3b2:
        'Process automation: orchestrated bank integration flows with <span class="highlight">n8n</span>, connecting global systems (<span class="highlight">SWIFT, ISO 20022</span>) with CI-style automation.',
      exp3b3:
        'AI & fraud: directed ML models for fraud detection—<span class="highlight">+15%</span> predictive accuracy uplift—supported by <span class="highlight">n8n</span> automations for real-time alerting.',
      exp4Role: 'NTConsult, Sonda IT & prior delivery leadership',
      exp4Meta: '2008 – 2019 · Architecture, banking PM, BI & telecom',
      exp4b1:
        'Senior Software Architect for Peru SUNAT National Single Account: data/application architecture with Kubernetes, Kafka, MongoDB, and DevOps.',
      exp4b2:
        'Senior PM at Sonda IT (Banco do Nordeste): full banking project lifecycle—planning, costs, schedule, risk analysis, and strategic alignment.',
      exp4b3:
        'Earlier: BI (ETL, dashboards) for Claro and TIM; web and data-sync systems for telecom operators; Salesforce CRM + SAP/RM and Marketing Cloud at DeVry; requirements & BPM (Bizagi) with SAP MM/FI at LSBD; real-time dashboards at Montreal; function-point analysis and PM scope at Unigex.',
      exp5Role: 'Higher education & credentials',
      exp5Meta: 'Degrees · Certifications · Continuous learning',
      exp5b1:
        'PhD in Applied IT (UNIFOR) <span class="highlight">on hold</span> to prioritize projects and PJ contracts; MBA IT Project Management (Farias Brito, 2016); M.Sc. Applied Informatics & B.Sc. CS (UNIFOR).',
      exp5b2:
        'Certified <span class="highlight">PMP (PMI)</span> and <span class="highlight">PSM I (Scrum.org)</span>; complementary training in ITIL, COBIT, and TOGAF.',
      exp5b3:
        'Recent depth: advanced <span class="highlight">n8n</span> workflows, <span class="highlight">React Native</span>, <span class="highlight">Kotlin</span>, SAP CPS, OutSystems, Salesforce, Data Science (2023–2025).',
      techTitle: 'Skills & tools',
      techSubtitle:
        'Management, data platforms, cloud/AI services, and enterprise development stack—verbatim themes from your 2026.1 CV.',
      projTitle: 'Program highlights',
      projSubtitle:
        'Consulting work (often under confidentiality), regulated banking programs, energy transformation, and automation stacks. Verify dates on LinkedIn / PDF résumés.',
      proj1Title: 'Open Finance & global payments (Citibank / Qintess)',
      proj1Desc:
        'Directed Open Finance with major budget ownership (EN ~USD 1M; PT ~R$ 5M), <span class="highlight">~10% ahead</span> of the regulatory milestone; mobile delivery with <span class="highlight">React Native / Kotlin</span> and SWIFT / ISO 20022 orchestration.',
      proj2Title: 'AI / ML for fraud & risk (Citibank)',
      proj2Desc:
        'Machine-learning models for fraud detection with a <span class="highlight">+15% gain in predictive accuracy</span>; <span class="highlight">n8n</span> automations for real-time operational alerts.',
      proj3Title: 'Petrobras digital transformation (TCS)',
      proj3Desc:
        'Senior PM for Petrobras programs: <span class="highlight">legacy → OutSystems / SAP</span>, agile outsourcing governance, risk mitigation, and executive reporting.',
      proj4Title: 'Enterprise SaaS & AI consulting (confidential engagements)',
      proj4Desc:
        'Solution architecture and delivery for <span class="highlight">enterprise SaaS</span>, <span class="highlight">API platforms</span>, and <span class="highlight">automation</span> since Oct 2024—client and product details shared only when permitted.',
      proj5Title: 'Mobile apps & n8n automation (consulting)',
      proj5Desc:
        'Production <span class="highlight">React Native</span> apps with <span class="highlight">Kotlin</span> native modules; enterprise <span class="highlight">n8n</span> workflows integrating APIs and reducing operational overhead.',
      projCta: 'Corroborate on LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Let’s talk',
      contactLead:
        'Open to <span class="highlight">senior PM / program director</span> and <span class="highlight">Solutions Architect / SaaS</span> roles, <span class="highlight">data & AI transformation</span>, and advisory engagements across banking, energy, and public sector. Share your objectives, constraints, and geography—I respond with a clear plan.',
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
      titleNavFaq: 'Go to recruiter FAQ (roles, certifications, how to reach)',
      titleNavContact: 'Go to contact and message form',
      titleHeroPrimary: 'Scroll to highlights: Open Finance, AI/fraud, Petrobras, consulting',
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
        '#LenilsonPinheiroValerio #LenilsonPinheiro #SeniorProjectManager #SolutionsArchitect #ProgramDirector #PMP #PSM #Scrum #n8n #ReactNative #Kotlin #FastAPI #RAG #EnterpriseSaaS #SaaS #OpenFinance #DigitalTransformation #DataGovernance #MachineLearning #AI #Citibank #Qintess #TCS #Petrobras #BancoDoNordeste #SondaIT #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #CSharp #ITIL #COBIT #TOGAF #UNIFOR #Fortaleza #Hiring #ExecutiveSearch #TalentAcquisition #ProgramManagement #RecruiterFAQ',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brazil',
      footerPrivacyLink: 'Privacy policy',
      footerTermsLink: 'Terms of service',
      cookieBannerAria: 'Privacy and essential cookies notice',
      cookieBannerText:
        'This site uses only <strong>essential cookies</strong> to remember your language. Your theme choice is stored in your browser’s local storage. We do not use advertising or third-party marketing cookies by default. See the <a href="privacy.html">privacy policy</a>.',
      cookieAccept: 'Understood',
      privacyDocTitle: 'Privacy policy · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Privacy policy for this portfolio: contact form data, Google Apps Script, MailApp, GitHub Pages, and your rights (LGPD/GDPR).',
      privacyNavLabel: 'Primary navigation — Privacy policy',
      privacyBackPortfolio: '← Portfolio',
      privacyPageTitle: 'Privacy policy',
      privacyUpdatedLine: 'Last updated: <time datetime="2026-05-08">8 May 2026</time>',
      privacyH2Who: 'Who operates this site',
      privacyPWho:
        'This static portfolio is published by <strong>Lenilson Pinheiro Valério</strong>. Contact: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Cookies: 'Cookies and local storage',
      privacyPCookies:
        'We use one <strong>essential</strong> cookie, <code>lp_lang</code>, to remember your language (about one year; <code>Path</code> scoped to this site; <code>SameSite=Lax</code>). It is stored after you acknowledge the notice. Light/dark theme is stored in <strong>local storage</strong> as <code>portfolio_theme</code>, not in cookies. <strong>No</strong> advertising, analytics, or third-party marketing cookies are set by this portfolio by default. If tags such as Google Tag Manager or AdSense are added later, this section will be updated and non-essential cookies will be handled under applicable law.',
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
      termsUpdatedLine: 'Last updated: <time datetime="2026-05-08">8 May 2026</time>',
      termsH2Acceptance: 'Acceptance',
      termsPAcceptance:
        'By using this website you agree to these terms. If you do not agree, do not use the site or the contact form.',
      termsH2Use: 'Use of the site',
      termsPUse:
        'The content is provided for professional information about <strong>Lenilson Pinheiro Valério</strong>. You must not misuse the site (including attempting to disrupt, scrape unlawfully, or overload systems).',
      termsH2Cookies: 'Cookies and local storage',
      termsPCookies:
        'Essential cookies (<code>lp_lang</code>) and theme preference in local storage are described in the <a href="privacy.html">privacy policy</a>.',
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
      faqTitle: 'Recruiter FAQ',
      faq1Q: 'What roles and engagements are you open to?',
      faq1A:
        'Senior PM / program director and Solutions Architect / SaaS roles, data and AI transformation mandates, and advisory work across banking, energy, and the public sector—as summarized in the Profile and Contact sections.',
      faq2Q: 'Which certifications do you hold?',
      faq2A: 'PMP (PMI) and PSM I (Scrum.org), with complementary training in ITIL, COBIT, and TOGAF.',
      faq3Q: 'Where are you based, and how should recruiters reach you?',
      faq3A:
        'Fortaleza, CE, Brazil. Use email lenilsonpinheiro@gmail.com, phone +55 85 99733-1000, LinkedIn and GitHub via this page, or the contact form.',
      faq4Q: 'Which employers and programs are highlighted on your résumé?',
      faq4A:
        'Examples include Citibank via Qintess, TCS on Petrobras, Banco do Nordeste via Sonda IT, SUNAT via NTConsult, and independent consulting since October 2024 (specific engagements may be confidential).',
      faqEmailActionName: 'Email regarding opportunities',
      typing: [
        'Senior PM & Solutions Architect',
        'Enterprise SaaS · Python · FastAPI · AI integration',
        'React Native · Kotlin · n8n automation',
        'PMP · PSM I · Open Finance · Petrobras',
        'Open to senior roles · advisory · consulting',
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
      schemaJobTitle: 'Gerente de Projetos Sênior e Arquiteto de Soluções',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Gerente de Projetos Sênior & Arquiteto de Soluções · Transformação Digital, Dados e IA',
      metaDescription:
        'Gerente de Projetos Sênior e Arquiteto (~25 anos): Citibank (Qintess), TCS/Petrobras, Banco do Nordeste, SUNAT (Peru). Desde out/2024: consultoria PJ em SaaS empresarial, integração com IA, React Native, Kotlin, n8n—detalhes de cliente frequentemente confidenciais. PMP · PSM I · Fortaleza — contratação e assessoria.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Gerente de Projetos Sênior,Arquiteto de Soluções,diretor de programa,PMP,PSM I,n8n,React Native,Kotlin,FastAPI,RAG,SaaS empresarial,SaaS,Open Finance,Pentaho,transformação digital,governança de dados,IA,Machine Learning,contratação executiva,Citibank,Qintess,TCS,Petrobras,Banco do Nordeste,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Python,Java,Kubernetes,Kafka,MongoDB,Scrum,ágil,ITIL,COBIT,UNIFOR',
      discoveryBio:
        'Lenilson Pinheiro Valério — Gerente de Projetos Sênior e Arquiteto de Soluções, Fortaleza, CE, Brasil (~25 anos). Citibank (Qintess), TCS/Petrobras, Banco do Nordeste (Sonda IT), SUNAT (NTConsult, Peru). Desde out/2024: consultoria PJ—SaaS empresarial, IA, mobile (React Native, Kotlin), n8n; mandatos específicos frequentemente confidenciais. PMP, PSM I. Confirme datas no LinkedIn e CV PDF (2026.1). Site: https://lenilsonpinheiro.github.io/portfolio2026/ — /llms.txt',
      ogLocale: 'pt_BR',
      langLabel: 'Idioma',
      navSkip: 'Pular para o conteúdo principal',
      navHome: 'Início',
      navAbout: 'Sobre',
      navExperience: 'Experiência',
      navTech: 'Competências',
      navProjects: 'Destaques',
      navFaq: 'FAQ',
      navContact: 'Contato',
      heroGreeting: 'Olá, eu sou',
      heroCtaPrimary: 'Ver destaques',
      heroCtaSecondary: 'Falar comigo',
      aboutTitle: 'Perfil',
      aboutSubtitle:
        'Entrega de programas em nível executivo em bancos, energia e governo — dados, IA, arquitetura corporativa, automação n8n e mobile (React Native / Kotlin).',
      aboutP1:
        'Sou <span class="highlight">Gerente de Projetos Sênior</span> e <span class="highlight">Arquiteto de Soluções</span>, com <span class="highlight">cerca de 25 anos</span> em transformação digital em grandes corporações — <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS na Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span> e <span class="highlight">SUNAT (NTConsult, Peru)</span>. Desde <span class="highlight">out/2024</span> atuo em <span class="highlight">consultoria PJ</span> focada em <span class="highlight">SaaS, automação com n8n, React Native, Kotlin, Python/FastAPI e RAG</span>. Metodologia <span class="highlight">PMP e Scrum (PSM I)</span> com profundidade técnica comprovada.',
      aboutP2:
        'Impacto recente: <span class="highlight">SaaS empresarial e integração com IA</span> em mandatos confidenciais de consultoria; <span class="highlight">Open Finance</span> com SWIFT / ISO 20022 e mobile (<span class="highlight">React Native e Kotlin</span>); <span class="highlight">+15% na precisão preditiva</span> em modelos antifraude no Citibank; <span class="highlight">modernização na Petrobras</span> com <span class="highlight">OutSystems e SAP</span> e governança ágil de terceirização.',
      aboutP3:
        'Formação: <span class="highlight">Doutorado em TI Aplicada — UNIFOR (pausado)</span> para dedicação a projetos e contratos PJ; MBA em Gestão de Projetos de TI (Farias Brito, 2016); Mestrado em Informática Aplicada e Bacharelado em Ciência da Computação (UNIFOR). Certificações: <span class="highlight">PMP (PMI)</span> e <span class="highlight">PSM I (Scrum.org)</span>; ITIL, COBIT e TOGAF; aprofundamento em <span class="highlight">n8n, React Native, Kotlin, SAP CPS, OutSystems, Salesforce e Ciência de Dados (2023–2025)</span>.',
      statProjects: 'Anos em TI, dados e liderança de entregas',
      statYears: '% de ganho na precisão de modelos antifraude (Citibank)',
      statClients: 'Certificações carro-chefe (PMP · PSM I)',
      statTech: 'Anos liderando programas no Citibank (Qintess)',
      expTitle: 'Experiência (alinhada ao CV)',
      expSubtitle:
        'Consultoria PJ (SaaS empresarial, mobile, n8n), empregadores-chave e formação — conforme seu currículo atual.',
      exp1Role: 'Consultoria PJ · Arquiteto de Soluções Independente',
      exp1Meta: 'Out 2024 – presente · SaaS, mobile e automação inteligente',
      exp1b1:
        'Arquitetura e entrega de <span class="highlight">plataformas SaaS com IA</span> em contratos de consultoria — <span class="highlight">nomes de cliente/produto omitidos quando confidenciais</span>.',
      exp1b2:
        'Aplicativos multiplataforma com <span class="highlight">React Native</span> e módulos nativos em <span class="highlight">Kotlin</span>, garantindo alta performance.',
      exp1b3:
        'Fluxos complexos de automação de processos e integração de APIs com <span class="highlight">n8n</span>, otimizando operação e reduzindo custos.',
      exp2Role: 'TCS — alocado na Petrobras · Gerente de Projetos Sênior',
      exp2Meta: 'Mar 2025 – nov 2025 · Transformação digital e modernização de legado',
      exp2b1:
        'Projetos de alto impacto migrando sistemas legados para <span class="highlight">OutSystems e SAP</span> em modelo de terceirização ágil.',
      exp2b2:
        'Planejamento de recursos, mitigação de riscos, cronograma e report executivo com times distribuídos.',
      exp2b3:
        'Governança de entrega com transparência de escopo, custo e qualidade para executivos e parceiros.',
      exp3Role: 'Citibank — via Qintess · Gerente de Projetos Sênior / Especialista Técnico',
      exp3Meta: 'Mai 2020 – out 2024 · Serviços financeiros regulados, mobile e IA',
      exp3b1:
        'Open Finance & mobile: projeto estratégico (<span class="highlight">orçamento R$ 5 milhões</span>), entrega <span class="highlight">~10% antes</span> do prazo regulatório; arquitetura e gestão de interfaces e integrações mobile com <span class="highlight">React Native e Kotlin</span> (3+ anos no ciclo do projeto).',
      exp3b2:
        'Automação de processos: orquestração com <span class="highlight">n8n</span>, conectando sistemas globais (<span class="highlight">SWIFT, ISO 20022</span>) de forma automatizada.',
      exp3b3:
        'IA & fraude: implementação de modelos de ML para detecção de fraudes (<span class="highlight">+15% na precisão preditiva</span>), com automações em <span class="highlight">n8n</span> para alertas em tempo real.',
      exp4Role: 'NTConsult, Sonda IT e lideranças anteriores',
      exp4Meta: '2008 – 2019 · Arquitetura, PM bancário, BI e telecom',
      exp4b1:
        'Arquiteto de Software Sênior na SUNAT (Conta Única Nacional): arquitetura com Kubernetes, Kafka, MongoDB e DevOps.',
      exp4b2:
        'Gerente de Projetos Sênior na Sonda IT (Banco do Nordeste): ciclo completo — planejamento, custos, cronograma, riscos e alinhamento estratégico.',
      exp4b3:
        'Anteriormente: BI (ETL, dashboards) para Claro e TIM; sistemas web e sincronização para operadoras; Salesforce CRM + SAP/RM e Marketing Cloud na DeVry; requisitos e BPM (Bizagi) com SAP MM/FI no LSBD; dashboards em tempo real na Montreal; análise de pontos de função na Unigex.',
      exp5Role: 'Formação acadêmica e credenciais',
      exp5Meta: 'Títulos · Certificações · Aperfeiçoamento',
      exp5b1:
        'Doutorado em TI Aplicada (UNIFOR) <span class="highlight">pausado</span> para projetos e contratos PJ; MBA Gestão de Projetos de TI (Farias Brito, 2016); Mestrado e Bacharelado (UNIFOR).',
      exp5b2:
        '<span class="highlight">PMP (PMI)</span> e <span class="highlight">PSM I (Scrum.org)</span>; treinamentos em ITIL, COBIT e TOGAF.',
      exp5b3:
        'Cursos recentes: <span class="highlight">n8n</span> (fluxos avançados), <span class="highlight">React Native</span>, <span class="highlight">Kotlin</span>, SAP CPS, OutSystems, Salesforce, Ciência de Dados (2023–2025).',
      techTitle: 'Competências e ferramentas',
      techSubtitle:
        'Gestão, plataformas de dados, nuvem/IA e stack corporativo — eixos do seu CV 2026.1.',
      projTitle: 'Destaques de programa',
      projSubtitle:
        'Consultoria (muitas vezes sob confidencialidade), programas regulados em banco, transformação na energia e stack de automação. Confira datas no LinkedIn / PDF.',
      proj1Title: 'Open Finance e pagamentos globais (Citibank / Qintess)',
      proj1Desc:
        'Iniciativa Open Finance com orçamento relevante (<span class="highlight">~R$ 5 milhões</span>), <span class="highlight">antecipação ~10%</span> ao marco regulatório; mobile <span class="highlight">React Native / Kotlin</span> e trilhos SWIFT / ISO 20022.',
      proj2Title: 'IA / ML para fraude e risco (Citibank)',
      proj2Desc:
        'Modelos de machine learning para fraude com <span class="highlight">+15% na precisão preditiva</span>; automações em <span class="highlight">n8n</span> para alertas operacionais em tempo real.',
      proj3Title: 'Transformação digital na Petrobras (TCS)',
      proj3Desc:
        'Gerente de projetos na frente Petrobras: <span class="highlight">modernização legado → OutSystems/SAP</span>, terceirização ágil, mitigação de risco e reporting executivo.',
      proj4Title: 'Consultoria — SaaS empresarial e IA (mandatos confidenciais)',
      proj4Desc:
        'Arquitetura e implementação de <span class="highlight">SaaS empresarial</span>, <span class="highlight">APIs</span> e <span class="highlight">automação</span> desde out/2024 — detalhes apenas quando permitido.',
      proj5Title: 'Apps mobile e automação n8n (consultoria)',
      proj5Desc:
        'Apps <span class="highlight">React Native</span> com módulos <span class="highlight">Kotlin</span>; fluxos corporativos em <span class="highlight">n8n</span> integrando APIs e reduzindo custo operacional.',
      projCta: 'Conferir no LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Vamos conversar',
      contactLead:
        'Aberto a <span class="highlight">papéis de gerente / diretor de programa</span> e <span class="highlight">Arquiteto de Soluções / SaaS</span>, <span class="highlight">mandatos de transformação com dados e IA</span> e assessoria em bancos, energia e setor público. Envie objetivos e geografia — respondo com plano claro.',
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
      titleNavFaq: 'Ir para FAQ para recrutadores (papéis, certificações, contacto)',
      titleNavContact: 'Ir para contato e formulário',
      titleHeroPrimary: 'Ir para destaques: Open Finance, IA/fraude, Petrobras, consultoria',
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
        '#LenilsonPinheiroValerio #GerenteDeProjetos #ArquitetoDeSolucoes #DiretorDePrograma #PMP #PSM #Scrum #n8n #ReactNative #Kotlin #FastAPI #RAG #EnterpriseSaaS #SaaS #OpenFinance #TransformacaoDigital #GovernancaDeDados #MachineLearning #IA #Citibank #Qintess #TCS #Petrobras #BancoDoNordeste #SondaIT #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #CSharp #ITIL #COBIT #TOGAF #UNIFOR #Fortaleza #Contratacao #Recrutamento #FAQRecrutadores',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brasil',
      footerPrivacyLink: 'Política de privacidade',
      footerTermsLink: 'Termos de serviço',
      cookieBannerAria: 'Aviso de privacidade e cookies essenciais',
      cookieBannerText:
        'Este site utiliza apenas <strong>cookies essenciais</strong> para memorizar o seu idioma. A preferência de tema é guardada no armazenamento local do navegador. Não utilizamos cookies de publicidade nem de marketing de terceiros por padrão. Consulte a <a href="privacy.html">política de privacidade</a>.',
      cookieAccept: 'Compreendi',
      privacyDocTitle: 'Política de privacidade · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Política de privacidade do portfólio: dados do formulário de contacto, Google Apps Script, MailApp, GitHub Pages e os seus direitos (LGPD/RGPD).',
      privacyNavLabel: 'Navegação principal — Política de privacidade',
      privacyBackPortfolio: '← Portfólio',
      privacyPageTitle: 'Política de privacidade',
      privacyUpdatedLine: 'Última atualização: <time datetime="2026-05-08">8 de maio de 2026</time>',
      privacyH2Who: 'Quem opera este site',
      privacyPWho:
        'Este portfólio estático é publicado por <strong>Lenilson Pinheiro Valério</strong>. Contacto: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Cookies: 'Cookies e armazenamento local',
      privacyPCookies:
        'Utilizamos um cookie <strong>essencial</strong>, <code>lp_lang</code>, para memorizar o idioma (cerca de um ano; <code>Path</code> limitado a este site; <code>SameSite=Lax</code>). É gravado após aceitar o aviso. O tema claro/escuro fica em <strong>armazenamento local</strong> como <code>portfolio_theme</code>, não em cookies. <strong>Não</strong> são utilizados cookies de publicidade, análise ou marketing de terceiros neste portfólio por defeito. Se forem adicionadas etiquetas como Google Tag Manager ou AdSense, esta secção será atualizada e cookies não essenciais serão tratados segundo a lei aplicável.',
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
      termsUpdatedLine: 'Última atualização: <time datetime="2026-05-08">8 de maio de 2026</time>',
      termsH2Acceptance: 'Aceitação',
      termsPAcceptance:
        'Ao utilizar este site aceita estes termos. Se não concordar, não utilize o site nem o formulário de contacto.',
      termsH2Use: 'Utilização do site',
      termsPUse:
        'O conteúdo destina-se a informação profissional sobre <strong>Lenilson Pinheiro Valério</strong>. Não deve utilizar o site de forma abusiva (incluindo perturbação, scraping ilícito ou sobrecarga de sistemas).',
      termsH2Cookies: 'Cookies e armazenamento local',
      termsPCookies:
        'Os cookies essenciais (<code>lp_lang</code>) e a preferência de tema em armazenamento local estão descritos na <a href="privacy.html">política de privacidade</a>.',
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
      faqTitle: 'FAQ para recrutadores',
      faq1Q: 'A que papéis e mandatos você está aberto?',
      faq1A:
        'Papéis de gerente / diretor de programa e Arquiteto de Soluções / SaaS, mandatos de transformação com dados e IA e assessoria em bancos, energia e setor público — conforme o Perfil e Contato.',
      faq2Q: 'Quais certificações você possui?',
      faq2A: 'PMP (PMI) e PSM I (Scrum.org), com formação complementar em ITIL, COBIT e TOGAF.',
      faq3Q: 'Onde você está e como recrutadores devem contatá-lo?',
      faq3A:
        'Fortaleza, CE, Brasil. E-mail lenilsonpinheiro@gmail.com, telefone +55 85 99733-1000, LinkedIn e GitHub nesta página, ou o formulário de contato.',
      faq4Q: 'Quais empregadores e programas aparecem no currículo?',
      faq4A:
        'Entre outros: Citibank via Qintess, TCS na Petrobras, Banco do Nordeste via Sonda IT, SUNAT via NTConsult; consultoria PJ desde outubro de 2024 (mandatos específicos podem ser confidenciais).',
      faqEmailActionName: 'E-mail sobre oportunidades',
      typing: [
        'Gerente de Projetos & Arquiteto de Soluções',
        'SaaS empresarial · Python · FastAPI · integração IA',
        'React Native · Kotlin · n8n',
        'PMP · PSM I · Open Finance · Petrobras',
        'Aberto a papéis sênior · assessoria · consultoria PJ',
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
      schemaJobTitle: 'Director de proyecto senior y Arquitecto de Soluciones',
      metaTitle: 'Lenilson Pinheiro Valério — Portfolio · Director senior & Arquitecto · Transformación digital, datos e IA',
      metaDescription:
        'Director senior PM y Arquitecto (~25 años): Citibank (Qintess), TCS/Petrobras, Banco do Nordeste, SUNAT (Perú). Desde oct 2024: consultoría en SaaS empresarial, integración IA, React Native, Kotlin, n8n—detalles de cliente a menudo confidenciales. PMP · PSM I · Fortaleza — roles y asesoría.',
      metaKeywords:
        'Lenilson Pinheiro Valério,Senior Project Manager,Solutions Architect,director de programa,PMP,PSM I,n8n,React Native,Kotlin,FastAPI,RAG,SaaS empresarial,SaaS,Open Finance,Pentaho,transformación digital,gobierno del dato,IA,Machine Learning,contratación ejecutiva,Citibank,Qintess,TCS,Petrobras,SUNAT,NTConsult,SAP,OutSystems,Salesforce,Power BI,Tableau,Hadoop,Spark,AWS,Azure,GCP,Kubernetes,Kafka,MongoDB,Python,Java,Scrum,ágil,ITIL,COBIT,UNIFOR',
      discoveryBio:
        'Lenilson Pinheiro Valério — Senior PM y Arquitecto de Soluciones, Fortaleza, CE, Brasil (~25 años). Citibank (Qintess), TCS/Petrobras, Banco do Nordeste (Sonda IT), SUNAT (NTConsult, Perú). Desde oct 2024: consultoría independiente—SaaS empresarial, IA, React Native, Kotlin, n8n; mandatos específicos a menudo confidenciales. PMP, PSM I. Verifique fechas en LinkedIn y CV PDF (2026.1). Sitio: https://lenilsonpinheiro.github.io/portfolio2026/ — /llms.txt',
      ogLocale: 'es_ES',
      langLabel: 'Idioma',
      navSkip: 'Saltar al contenido principal',
      navHome: 'Inicio',
      navAbout: 'Sobre mí',
      navExperience: 'Experiencia',
      navTech: 'Competencias',
      navProjects: 'Destacados',
      navFaq: 'FAQ',
      navContact: 'Contacto',
      heroGreeting: 'Hola, soy',
      heroCtaPrimary: 'Ver destacados',
      heroCtaSecondary: 'Contactar',
      aboutTitle: 'Perfil',
      aboutSubtitle:
        'Dirección de programas ejecutivos en banca, energía y sector público — datos, IA, arquitectura empresarial, automatización n8n y mobile (React Native / Kotlin).',
      aboutP1:
        'Soy <span class="highlight">Senior Project Manager</span> y <span class="highlight">Arquitecto de Soluciones</span>, con <span class="highlight">~25 años</span> en transformación digital — <span class="highlight">Citibank (Qintess)</span>, <span class="highlight">TCS en Petrobras</span>, <span class="highlight">Banco do Nordeste (Sonda IT)</span> y <span class="highlight">SUNAT (NTConsult, Perú)</span>. Desde <span class="highlight">oct 2024</span> brindo <span class="highlight">consultoría independiente</span> en <span class="highlight">SaaS, n8n, React Native, Kotlin, Python/FastAPI y RAG</span>. Marco mi trabajo con <span class="highlight">PMP y Scrum (PSM I)</span> y solidez técnica.',
      aboutP2:
        'Impacto reciente: <span class="highlight">SaaS empresarial e integración IA</span> en mandatos confidenciales de consultoría; <span class="highlight">Open Finance</span> con SWIFT / ISO 20022 y mobile (<span class="highlight">React Native y Kotlin</span>); <span class="highlight">+15% en precisión predictiva</span> antifraude en Citibank; <span class="highlight">modernización Petrobras</span> con <span class="highlight">OutSystems y SAP</span> y gobierno ágil de outsourcing.',
      aboutP3:
        'Formación: <span class="highlight">Doctorado en TI aplicada — UNIFOR (en pausa)</span> por foco en proyectos y contratos; MBA gestión de proyectos TI (Farias Brito, 2016); máster y grado (UNIFOR). Certificaciones: <span class="highlight">PMP (PMI)</span> y <span class="highlight">PSM I (Scrum.org)</span>; ITIL, COBIT y TOGAF; profundización en <span class="highlight">n8n, React Native, Kotlin, SAP CPS, OutSystems, Salesforce y ciencia de datos (2023–2025)</span>.',
      statProjects: 'Años en TI, datos y liderazgo de entregas',
      statYears: '% de mejora en precisión antifraude (Citibank)',
      statClients: 'Certificaciones clave (PMP · PSM I)',
      statTech: 'Años liderando programas en Citibank (Qintess)',
      expTitle: 'Experiencia (alineada al CV)',
      expSubtitle:
        'Consultoría independiente (SaaS empresarial, mobile, n8n), empleadores destacados y credenciales según su currículo.',
      exp1Role: 'Consultoría independiente (PJ) · Arquitecto de Soluciones',
      exp1Meta: 'Oct 2024 – actual · SaaS, mobile y automatización inteligente',
      exp1b1:
        'Arquitectura y entrega de <span class="highlight">plataformas SaaS con IA</span> en acuerdos de consultoría — <span class="highlight">nombres de cliente/producto omitidos si son confidenciales</span>.',
      exp1b2:
        'Apps multiplataforma con <span class="highlight">React Native</span> y módulos nativos en <span class="highlight">Kotlin</span> para alto rendimiento.',
      exp1b3:
        'Automatización compleja de procesos e integración de APIs con <span class="highlight">n8n</span>, optimizando operación y costo.',
      exp2Role: 'TCS — asignado a Petrobras · Senior Project Manager',
      exp2Meta: 'Mar 2025 – nov 2025 · Transformación digital y legado',
      exp2b1:
        'Programas de alto impacto migrando legado a <span class="highlight">OutSystems y SAP</span> en outsourcing ágil.',
      exp2b2:
        'Planificación de recursos, riesgos, cronograma y reporting ejecutivo con equipos distribuidos.',
      exp2b3:
        'Gobernanza de entrega con alcance, coste y calidad transparentes para ejecutivos y socios.',
      exp3Role: 'Citibank — vía Qintess · Senior PM / Experto técnico',
      exp3Meta: 'May 2020 – oct 2024 · Servicios financieros regulados, mobile e IA',
      exp3b1:
        'Open Finance y mobile: programa estratégico (<span class="highlight">~USD 1M</span> CV EN; <span class="highlight">~R$ 5M</span> CV PT), entrega <span class="highlight">~10% antes</span> del plazo regulatorio; interfaces e integraciones mobile con <span class="highlight">React Native y Kotlin</span> (3+ años en el ciclo).',
      exp3b2:
        'Automatización: orquestación con <span class="highlight">n8n</span> conectando sistemas globales (<span class="highlight">SWIFT, ISO 20022</span>).',
      exp3b3:
        'IA y fraude: modelos ML antifraude con <span class="highlight">+15% en precisión predictiva</span>; automatizaciones <span class="highlight">n8n</span> para alertas en tiempo real.',
      exp4Role: 'NTConsult, Sonda IT y roles anteriores',
      exp4Meta: '2008 – 2019 · Arquitectura, PM bancario, BI y telecom',
      exp4b1:
        'Arquitecto senior SUNAT (Cuenta Única Nacional): datos y apps con Kubernetes, Kafka, MongoDB y DevOps.',
      exp4b2:
        'Senior PM Sonda IT (Banco do Nordeste): ciclo completo — planificación, costes, cronograma, riesgos y alineación.',
      exp4b3:
        'Anteriormente: BI/ETL para Claro y TIM; web y sincronización para operadores; Salesforce + SAP/RM y Marketing Cloud en DeVry; requisitos y BPM (Bizagi) con SAP MM/FI en LSBD; dashboards en Montreal; puntos de función en Unigex.',
      exp5Role: 'Educación superior y credenciales',
      exp5Meta: 'Títulos · Certificaciones · Formación continua',
      exp5b1:
        'Doctorado TI aplicada (UNIFOR) <span class="highlight">en pausa</span> por proyectos y contratos; MBA proyectos TI (Farias Brito, 2016); máster y grado (UNIFOR).',
      exp5b2:
        '<span class="highlight">PMP (PMI)</span> y <span class="highlight">PSM I (Scrum.org)</span>; formación ITIL, COBIT y TOGAF.',
      exp5b3:
        'Profundización reciente: <span class="highlight">n8n</span>, <span class="highlight">React Native</span>, <span class="highlight">Kotlin</span>, SAP CPS, OutSystems, Salesforce, ciencia de datos (2023–2025).',
      techTitle: 'Competencias y herramientas',
      techSubtitle:
        'Gestión, plataformas de datos, nube/IA y stack empresarial — ejes del CV 2026.1.',
      projTitle: 'Hitos de programa',
      projSubtitle:
        'Consultoría (a menudo confidencial), banca regulada, energía y automatización. Cronología completa en LinkedIn / PDF.',
      proj1Title: 'Open Finance y pagos globales (Citibank / Qintess)',
      proj1Desc:
        'Open Finance con presupuesto relevante (CV EN ~USD 1M; PT ~R$ 5M), <span class="highlight">~10% antes</span> del hito regulatorio; mobile <span class="highlight">React Native / Kotlin</span> e integraciones SWIFT / ISO 20022.',
      proj2Title: 'IA / ML para fraude y riesgo (Citibank)',
      proj2Desc:
        'Modelos ML antifraude con <span class="highlight">+15% de mejora en precisión predictiva</span>; flujos <span class="highlight">n8n</span> para alertas en tiempo real.',
      proj3Title: 'Transformación digital Petrobras (TCS)',
      proj3Desc:
        'Senior PM frente a Petrobras: <span class="highlight">legado → OutSystems/SAP</span>, outsourcing ágil, mitigación de riesgos y reporting ejecutivo.',
      proj4Title: 'Consultoría — SaaS empresarial e IA (mandatos confidenciales)',
      proj4Desc:
        'Arquitectura y entrega de <span class="highlight">SaaS empresarial</span>, <span class="highlight">APIs</span> y <span class="highlight">automatización</span> desde oct 2024 — detalles solo cuando el cliente lo permita.',
      proj5Title: 'Mobile y automatización n8n (consultoría)',
      proj5Desc:
        'Apps <span class="highlight">React Native</span> con <span class="highlight">Kotlin</span>; workflows <span class="highlight">n8n</span> integrando APIs y reduciendo coste operativo.',
      projCta: 'Verificar en LinkedIn <i class="fab fa-linkedin-in" aria-hidden="true"></i>',
      contactTitle: 'Hablemos',
      contactLead:
        'Abierto a <span class="highlight">roles senior PM / director de programa</span> y <span class="highlight">Arquitecto de Soluciones / SaaS</span>, <span class="highlight">mandatos de datos e IA</span> y asesoría en banca, energía y sector público. Comparta objetivos — respondo con un plan claro.',
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
      titleNavFaq: 'Ir al FAQ para reclutadores (roles, certificaciones, contacto)',
      titleNavContact: 'Ir a contacto y formulario',
      titleHeroPrimary: 'Ir a hitos: Open Finance, IA/fraude, Petrobras, consultoría',
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
        '#LenilsonPinheiroValerio #SeniorProjectManager #SolutionsArchitect #DirectorDePrograma #PMP #PSM #Scrum #n8n #ReactNative #Kotlin #FastAPI #RAG #EnterpriseSaaS #SaaS #OpenFinance #TransformacionDigital #GobiernoDelDato #MachineLearning #IA #Citibank #Qintess #TCS #Petrobras #SUNAT #NTConsult #SAP #OutSystems #Salesforce #PowerBI #Tableau #Hadoop #Spark #AWS #Azure #GCP #Kubernetes #Kafka #MongoDB #Python #Java #ITIL #COBIT #TOGAF #UNIFOR #Fortaleza #Contratacion #Reclutamiento #FAQReclutadores',
      footerCopy: 'Lenilson Pinheiro Valério · Fortaleza, CE, Brasil',
      footerPrivacyLink: 'Política de privacidad',
      footerTermsLink: 'Términos del servicio',
      cookieBannerAria: 'Aviso de privacidad y cookies esenciales',
      cookieBannerText:
        'Este sitio solo utiliza <strong>cookies esenciales</strong> para recordar su idioma. La preferencia de tema se guarda en el almacenamiento local del navegador. No utilizamos cookies publicitarias ni de marketing de terceros por defecto. Consulte la <a href="privacy.html">política de privacidad</a>.',
      cookieAccept: 'Entendido',
      privacyDocTitle: 'Política de privacidad · Lenilson Pinheiro Valério',
      privacyMetaDescription:
        'Política de privacidad del portafolio: datos del formulario de contacto, Google Apps Script, MailApp, GitHub Pages y sus derechos (LGPD/RGPD).',
      privacyNavLabel: 'Navegación principal — Política de privacidad',
      privacyBackPortfolio: '← Portafolio',
      privacyPageTitle: 'Política de privacidad',
      privacyUpdatedLine: 'Última actualización: <time datetime="2026-05-08">8 de mayo de 2026</time>',
      privacyH2Who: 'Quién opera este sitio',
      privacyPWho:
        'Este portafolio estático lo publica <strong>Lenilson Pinheiro Valério</strong>. Contacto: <a href="mailto:lenilsonpinheiro@gmail.com">lenilsonpinheiro@gmail.com</a>.',
      privacyH2Cookies: 'Cookies y almacenamiento local',
      privacyPCookies:
        'Usamos una cookie <strong>esencial</strong>, <code>lp_lang</code>, para recordar el idioma (aprox. un año; <code>Path</code> acotado a este sitio; <code>SameSite=Lax</code>). Se guarda tras aceptar el aviso. El tema claro/oscuro se almacena en <strong>almacenamiento local</strong> como <code>portfolio_theme</code>, no en cookies. <strong>No</strong> se implementan por defecto cookies publicitarias, de analítica ni de marketing de terceros. Si se añaden etiquetas (p. ej. Google Tag Manager o AdSense), esta sección se actualizará y las cookies no esenciales se gestionarán según la ley aplicable.',
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
      termsUpdatedLine: 'Última actualización: <time datetime="2026-05-08">8 de mayo de 2026</time>',
      termsH2Acceptance: 'Aceptación',
      termsPAcceptance:
        'Al usar este sitio acepta estos términos. Si no está de acuerdo, no utilice el sitio ni el formulario.',
      termsH2Use: 'Uso del sitio',
      termsPUse:
        'El contenido se ofrece con fines informativos profesionales sobre <strong>Lenilson Pinheiro Valério</strong>. No debe hacer un uso indebido (incluida la interrupción, el scraping ilícito o la sobrecarga).',
      termsH2Cookies: 'Cookies y almacenamiento local',
      termsPCookies:
        'Las cookies esenciales (<code>lp_lang</code>) y la preferencia de tema en almacenamiento local se describen en la <a href="privacy.html">política de privacidad</a>.',
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
      faqTitle: 'FAQ para reclutadores',
      faq1Q: '¿A qué roles y mandatos está abierto?',
      faq1A:
        'Roles senior PM / director de programa y Arquitecto de Soluciones / SaaS, mandatos de datos e IA y asesoría en banca, energía y sector público — según el Perfil y Contacto.',
      faq2Q: '¿Qué certificaciones tiene?',
      faq2A: 'PMP (PMI) y PSM I (Scrum.org), con formación complementaria en ITIL, COBIT y TOGAF.',
      faq3Q: '¿Dónde está y cómo pueden contactarlo los reclutadores?',
      faq3A:
        'Fortaleza, CE, Brasil. Correo lenilsonpinheiro@gmail.com, teléfono +55 85 99733-1000, LinkedIn y GitHub en esta página, o el formulario.',
      faq4Q: '¿Qué empleadores y programas aparecen en el CV?',
      faq4A:
        'Entre otros: Citibank vía Qintess, TCS en Petrobras, Banco do Nordeste vía Sonda IT, SUNAT vía NTConsult; consultoría independiente desde octubre de 2024 (los mandatos pueden ser confidenciales).',
      faqEmailActionName: 'Correo sobre oportunidades',
      typing: [
        'Senior PM y Arquitecto de Soluciones',
        'SaaS empresarial · Python · FastAPI · integración IA',
        'React Native · Kotlin · n8n',
        'PMP · PSM I · Open Finance · Petrobras',
        'Roles senior · asesoría · consultoría independiente',
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
        telephone: '+55-85-99733-1000',
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

    var ldWeb = document.getElementById('jsonld-website');
    if (ldWeb) {
      ldWeb.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: t.schemaName + ' — Portfolio',
        url: CANONICAL_BASE,
        inLanguage: ['en-US', 'pt-BR', 'es-ES'],
        author: {
          '@type': 'Person',
          name: t.schemaName,
          sameAs: [
            'https://www.linkedin.com/in/lenilsonpinheiro/',
            'https://github.com/LenilsonPinheiro',
          ],
        },
        potentialAction: [
          { '@type': 'ReadAction', target: CANONICAL_BASE },
          {
            '@type': 'CommunicateAction',
            name: t.faqEmailActionName || 'Email regarding opportunities',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'mailto:lenilsonpinheiro@gmail.com',
              actionPlatform: [
                'http://schema.org/DesktopWebPosting',
                'http://schema.org/MobileWebPosting',
              ],
            },
          },
        ],
      });
    }

    var ldFaq = document.getElementById('jsonld-faq');
    if (ldFaq && t.faq1Q) {
      ldFaq.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: t.faq1Q,
            acceptedAnswer: { '@type': 'Answer', text: t.faq1A },
          },
          {
            '@type': 'Question',
            name: t.faq2Q,
            acceptedAnswer: { '@type': 'Answer', text: t.faq2A },
          },
          {
            '@type': 'Question',
            name: t.faq3Q,
            acceptedAnswer: { '@type': 'Answer', text: t.faq3A },
          },
          {
            '@type': 'Question',
            name: t.faq4Q,
            acceptedAnswer: { '@type': 'Answer', text: t.faq4A },
          },
        ],
      });
    }

    var ldWp = document.getElementById('jsonld-webpage');
    if (ldWp) {
      ldWp.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': CANONICAL_BASE + '#webpage',
        url: CANONICAL_BASE,
        name: t.metaTitle,
        description: t.metaDescription,
        inLanguage: t.htmlLang,
        isPartOf: {
          '@type': 'WebSite',
          url: CANONICAL_BASE,
          name: t.schemaName + ' — Portfolio',
        },
        about: {
          '@type': 'Person',
          name: t.schemaName,
          url: CANONICAL_BASE,
          sameAs: [
            'https://www.linkedin.com/in/lenilsonpinheiro/',
            'https://github.com/LenilsonPinheiro',
          ],
        },
        significantLink: [CANONICAL_BASE + 'llms.txt', CANONICAL_BASE + 'sitemap.xml'],
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://avatars.githubusercontent.com/LenilsonPinheiro?v=4',
          width: 460,
          height: 460,
        },
      });
    }
  }

  function applyLanguage(lang) {
    lang = normalizeLang(lang);
    window.__i18nActive = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    if (hasCookieConsent()) {
      setCookie('lp_lang', lang, 31536000);
    }
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
          purpose: 'Professional discovery index for search engines and AI crawlers (HTML template; not painted; same HTML for all user agents)',
          lang: lang,
          canonicalUrl: CANONICAL_BASE,
          llmsTxtUrl: CANONICAL_BASE + 'llms.txt',
          sitemapUrl: CANONICAL_BASE + 'sitemap.xml',
          robotsUrl: CANONICAL_BASE + 'robots.txt',
          name: pack.schemaName,
          headline: pack.metaTitle,
          summary: pack.metaDescription,
          oneParagraphBio: pack.discoveryBio || pack.metaDescription,
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
    initCookieBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PortfolioI18n = { applyLanguage: applyLanguage, normalizeLang: normalizeLang, T: T };
})();
