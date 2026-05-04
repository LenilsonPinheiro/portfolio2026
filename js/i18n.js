(function () {
  'use strict';

  var CANONICAL_BASE = 'https://lenilsonpinheiro.github.io/portfolio2026/';
  var STORAGE_KEY = 'portfolio_lang';

  var T = {
    en: {
      htmlLang: 'en-US',
      metaTitle: 'Lenilson Pinheiro | Senior Full-Stack Engineer · Data & LLM Systems',
      metaDescription:
        'Senior full-stack engineer (Python, JavaScript/TypeScript, APIs, cloud). Data pipelines, LLM/RAG integrations, performance and security. Open to strategic roles. LinkedIn: lenilsonpinheiro.',
      metaKeywords:
        'full stack engineer,senior developer,Python,FastAPI,JavaScript,TypeScript,React,Node.js,AWS,Docker,PostgreSQL,MongoDB,Redis,microservices,REST,GraphQL,LLM,RAG,data engineering,remote,hire Lenilson Pinheiro',
      ogLocale: 'en_US',
      langLabel: 'Language',
      navSkip: 'Skip to main content',
      navHome: 'Home',
      navAbout: 'About',
      navExperience: 'Experience',
      navTech: 'Stack',
      navProjects: 'Projects',
      navContact: 'Contact',
      heroGreeting: "Hi, I'm",
      heroCtaPrimary: 'View projects',
      heroCtaSecondary: 'Contact me',
      aboutTitle: 'About',
      aboutSubtitle:
        'I turn complex product and engineering constraints into measurable outcomes: reliability, velocity, and total cost of ownership.',
      aboutP1:
        'As a <span class="highlight">senior full-stack engineer</span>, I ship end-to-end systems—from API design and data models to polished UIs—balancing <span class="highlight">architecture</span>, <span class="highlight">performance</span>, and <span class="highlight">security</span> with clear business trade-offs.',
      aboutP2:
        'I build services and platforms ready for <span class="highlight">high concurrency</span>, with observability, caching, and pragmatic automation. I collaborate like a <span class="highlight">tech lead</span>: clear RFCs, code review, and predictable delivery.',
      aboutP3:
        'I stay current on <span class="highlight">modern Python and JS ecosystems</span>, cloud-native patterns, and responsible <span class="highlight">LLM integration</span> (evaluation, guardrails, cost control).',
      statProjects: 'Projects delivered',
      statYears: 'Years of experience',
      statClients: 'Satisfied stakeholders',
      statTech: 'Technologies in active use',
      expTitle: 'Experience depth (recruiter-ready)',
      expSubtitle:
        'Role-aligned technical narrative: scope, stack, and outcomes—written the way hiring managers and staff engineers scan CVs.',
      exp1Role: 'Senior Full-Stack Engineer · Product & platform delivery',
      exp1Meta: 'Scope: web apps, APIs, integrations · Stakeholders: product, design, infra',
      exp1b1:
        'Owned features across the stack: REST/JSON APIs, auth/session flows, role-based access, background jobs, and admin dashboards with measurable UX improvements.',
      exp1b2:
        'Performance work: query tuning, indexing strategy, caching layers (HTTP + application), payload minimization, and realistic load testing before releases.',
      exp1b3:
        'Engineering hygiene: CI/CD, typed interfaces (where applicable), structured logging, error budgets, and postmortems that convert incidents into durable fixes.',
      exp2Role: 'Data-aware engineering · Analytics & reliability',
      exp2Meta: 'Pipelines, metrics, quality · Decisions grounded in data',
      exp2b1:
        'Built and maintained ETL/ELT-style pipelines and reporting surfaces; aligned KPI definitions with stakeholders to avoid “metric drift”.',
      exp2b2:
        'Data quality: validation rules, idempotency, reconciliation jobs, and monitoring that catches silent failures early.',
      exp2b3:
        'Collaborated on experiment instrumentation (events, funnels) to support product iteration without compromising privacy posture.',
      exp3Role: 'LLM systems integration · Practical AI in production',
      exp3Meta: 'RAG patterns, evaluation, safety · Cost/latency aware',
      exp3b1:
        'Implemented retrieval-augmented workflows with chunking strategies, metadata filters, and reranking where it materially improved precision.',
      exp3b2:
        'Evaluation loops: golden sets, regression checks, prompt/version tracking, and human-in-the-loop review for high-risk outputs.',
      exp3b3:
        'Operational concerns: rate limits, token budgets, caching embeddings, and graceful degradation when providers degrade.',
      techTitle: 'Tech stack',
      techSubtitle:
        'A pragmatic toolkit for SaaS backends, modern frontends, cloud deploys, and data-heavy features.',
      projTitle: 'Highlighted work',
      projSubtitle:
        'Representative initiatives illustrating architecture, scale thinking, and delivery rigor—details on GitHub.',
      proj1Title: 'Enterprise management platform',
      proj1Desc:
        'React + Node ecosystem; modular services; PostgreSQL as source of truth; Dockerized deploys. Focus on <span class="highlight">sub-200ms p95</span> paths for core reads, horizontal scaling patterns, and operational dashboards for support teams.',
      proj2Title: 'High-performance web experience',
      proj2Desc:
        'Mobile-first UI, semantic structure, accessibility checks, and performance budgets. Targets strong Lighthouse signals and <span class="highlight">low CLS</span> through stable layout, font strategy, and image discipline.',
      proj3Title: 'Scalable API platform',
      proj3Desc:
        'Python (FastAPI-style) service design: JWT auth, rate limiting, OpenAPI documentation, idempotent writes, and Redis-backed throttling/caching where appropriate—architected for <span class="highlight">high daily request volume</span> with clear SLOs.',
      projCta: 'View on GitHub <i class="fas fa-arrow-right" aria-hidden="true"></i>',
      contactTitle: 'Let’s work together',
      contactLead:
        'Open to <span class="highlight">senior IC</span> roles, <span class="highlight">contract engagements</span>, and high-trust collaborations. Tell me about your stack, constraints, and timeline—I respond with clarity and next steps.',
      formTitle: 'Direct message',
      formHint:
        'Sends an email to lenilsonpinheiro@gmail.com via FormSubmit (first use may require a one-time inbox confirmation from FormSubmit).',
      labelName: 'Name',
      labelEmail: 'Email',
      labelMessage: 'Message',
      labelSend: 'Send message',
      formPrivacy:
        'By sending, you agree I may reply using your email. No marketing lists; no resale of your data.',
      topicsSummary: 'Topics index (skills & recruiting keywords)',
      topicsBody:
        '#FullStack #SeniorEngineer #Python #FastAPI #Django #JavaScript #TypeScript #React #NodeJS #PostgreSQL #MongoDB #Redis #Docker #AWS #GCP #REST #GraphQL #Microservices #CI_CD #Observability #LLM #RAG #PromptEngineering #DataEngineering #SystemDesign #StaffEngineer #TechLead #Remote #SaaS #FinTech #B2B #Hiring #OpenToWork #LenilsonPinheiro',
      footerCopy: 'Lenilson Pinheiro. Built with care and production-minded defaults.',
      typing: [
        'Senior Full-Stack Engineer',
        'Data-aware builder',
        'LLM systems integrator',
        'Product-minded problem solver',
      ],
      ariaMenu: 'Open menu',
      ariaMenuClose: 'Close menu',
    },
    pt: {
      htmlLang: 'pt-BR',
      metaTitle: 'Lenilson Pinheiro | Engenheiro Full-Stack Sênior · Dados e LLMs',
      metaDescription:
        'Engenheiro full-stack sênior (Python, JavaScript/TypeScript, APIs, nuvem). Pipelines de dados, integração com LLM/RAG, performance e segurança. LinkedIn: lenilsonpinheiro.',
      metaKeywords:
        'desenvolvedor full stack sênior,Python,FastAPI,JavaScript,TypeScript,React,Node.js,AWS,Docker,PostgreSQL,microserviços,API REST,LLM,RAG,engenharia de dados,contratação,Lenilson Pinheiro',
      ogLocale: 'pt_BR',
      langLabel: 'Idioma',
      navSkip: 'Pular para o conteúdo principal',
      navHome: 'Início',
      navAbout: 'Sobre',
      navExperience: 'Experiência',
      navTech: 'Stack',
      navProjects: 'Projetos',
      navContact: 'Contato',
      heroGreeting: 'Olá, eu sou',
      heroCtaPrimary: 'Ver projetos',
      heroCtaSecondary: 'Falar comigo',
      aboutTitle: 'Sobre',
      aboutSubtitle:
        'Transformo restrições de produto e engenharia em resultados mensuráveis: confiabilidade, velocidade de entrega e custo total.',
      aboutP1:
        'Como <span class="highlight">engenheiro full-stack sênior</span>, entrego ponta a ponta—de APIs e modelos de dados a interfaces polidas—equilibrando <span class="highlight">arquitetura</span>, <span class="highlight">performance</span> e <span class="highlight">segurança</span> com trade-offs claros de negócio.',
      aboutP2:
        'Construo serviços prontos para <span class="highlight">alta concorrência</span>, com observabilidade, cache e automação pragmática. Atuo como <span class="highlight">tech lead</span> no dia a dia: RFCs, revisão de código e entrega previsível.',
      aboutP3:
        'Mantenho-me atualizado em <span class="highlight">ecossistemas modernos de Python e JS</span>, padrões cloud-native e <span class="highlight">integração responsável de LLM</span> (avaliação, guardrails, controle de custo).',
      statProjects: 'Projetos entregues',
      statYears: 'Anos de experiência',
      statClients: 'Stakeholders satisfeitos',
      statTech: 'Tecnologias em uso ativo',
      expTitle: 'Profundidade de experiência (para recrutadores)',
      expSubtitle:
        'Narrativa técnica alinhada a cargo: escopo, stack e resultados—no formato que gestores e staff engineers escaneiam em CVs.',
      exp1Role: 'Engenheiro Full-Stack Sênior · Produto e plataforma',
      exp1Meta: 'Escopo: apps web, APIs, integrações · Áreas: produto, design, infra',
      exp1b1:
        'Features ponta a ponta: APIs REST/JSON, fluxos de autenticação/sessão, RBAC, jobs assíncronos e painéis admin com melhorias mensuráveis de UX.',
      exp1b2:
        'Performance: tuning de queries, estratégia de índices, cache (HTTP + aplicação), redução de payload e testes de carga realistas pré-release.',
      exp1b3:
        'Higiene de engenharia: CI/CD, contratos tipados (quando aplicável), logs estruturados, error budgets e postmortems que viram correções duráveis.',
      exp2Role: 'Engenharia orientada a dados · Analytics e confiabilidade',
      exp2Meta: 'Pipelines, métricas, qualidade · Decisões com base em dados',
      exp2b1:
        'Pipelines no estilo ETL/ELT e superfícies de reporting; alinhamento de KPIs com stakeholders para evitar “métrica errada”.',
      exp2b2:
        'Qualidade de dados: regras de validação, idempotência, jobs de reconciliação e monitoramento que pega falhas silenciosas cedo.',
      exp2b3:
        'Instrumentação para experimentos (eventos, funis) apoiando iteração de produto sem comprometer privacidade.',
      exp3Role: 'Integração de sistemas com LLM · IA prática em produção',
      exp3Meta: 'RAG, avaliação, segurança · Custo e latência sob controle',
      exp3b1:
        'Fluxos RAG com estratégias de chunking, filtros de metadata e reranking quando isso melhora precisão de forma material.',
      exp3b2:
        'Loops de avaliação: conjuntos dourados, regressões, versionamento de prompts e revisão humana para saídas de alto risco.',
      exp3b3:
        'Operação: rate limits, orçamento de tokens, cache de embeddings e degradação elegante quando provedores oscilam.',
      techTitle: 'Stack tecnológico',
      techSubtitle:
        'Toolkit pragmático para backends SaaS, frontends modernos, deploy em nuvem e features com alto volume de dados.',
      projTitle: 'Destaques',
      projSubtitle:
        'Iniciativas representativas de arquitetura, pensamento de escala e rigor de entrega—detalhes no GitHub.',
      proj1Title: 'Plataforma de gestão enterprise',
      proj1Desc:
        'Ecossistema React + Node; serviços modulares; PostgreSQL como fonte da verdade; deploy com Docker. Foco em leituras core com <span class="highlight">p95 abaixo de 200ms</span>, padrões de escala horizontal e painéis operacionais.',
      proj2Title: 'Experiência web de alta performance',
      proj2Desc:
        'UI mobile-first, estrutura semântica, checagens de acessibilidade e orçamentos de performance. Objetivo: bons sinais no Lighthouse e <span class="highlight">CLS baixo</span> com layout estável, fontes e imagens disciplinadas.',
      proj3Title: 'Plataforma de API escalável',
      proj3Desc:
        'Design de serviço Python (estilo FastAPI): JWT, rate limiting, OpenAPI, writes idempotentes e Redis para throttle/cache quando faz sentido—pensado para <span class="highlight">alto volume diário</span> com SLOs claros.',
      projCta: 'Ver no GitHub <i class="fas fa-arrow-right" aria-hidden="true"></i>',
      contactTitle: 'Vamos trabalhar juntos?',
      contactLead:
        'Aberto a papéis <span class="highlight">sênior IC</span>, <span class="highlight">projetos sob contrato</span> e parcerias de alta confiança. Conte stack, restrições e prazo—respondo com clareza e próximos passos.',
      formTitle: 'Mensagem direta',
      formHint:
        'Envia e-mail para lenilsonpinheiro@gmail.com via FormSubmit (no primeiro envio pode ser necessário confirmar o inbox uma vez no FormSubmit).',
      labelName: 'Nome',
      labelEmail: 'E-mail',
      labelMessage: 'Mensagem',
      labelSend: 'Enviar mensagem',
      formPrivacy:
        'Ao enviar, você concorda que eu possa responder usando seu e-mail. Sem listas de marketing; sem revenda de dados.',
      topicsSummary: 'Índice de tópicos (skills e palavras-chave para recrutamento)',
      topicsBody:
        '#FullStack #EngenheiroSênior #Python #FastAPI #Django #JavaScript #TypeScript #React #NodeJS #PostgreSQL #MongoDB #Redis #Docker #AWS #GCP #REST #GraphQL #Microserviços #CI_CD #Observabilidade #LLM #RAG #PromptEngineering #EngenhariaDeDados #SystemDesign #TechLead #Remoto #SaaS #Contratação #OpenToWork #LenilsonPinheiro',
      footerCopy: 'Lenilson Pinheiro. Feito com cuidado e padrões de produção.',
      typing: [
        'Engenheiro Full-Stack Sênior',
        'Builder orientado a dados',
        'Integrador de sistemas LLM',
        'Resolvedor de problemas com visão de produto',
      ],
      ariaMenu: 'Abrir menu',
      ariaMenuClose: 'Fechar menu',
    },
    es: {
      htmlLang: 'es-ES',
      metaTitle: 'Lenilson Pinheiro | Ingeniero Full-Stack Senior · Datos y LLM',
      metaDescription:
        'Ingeniero full-stack senior (Python, JavaScript/TypeScript, APIs, nube). Pipelines de datos, integración LLM/RAG, rendimiento y seguridad. LinkedIn: lenilsonpinheiro.',
      metaKeywords:
        'ingeniero full stack senior,Python,FastAPI,JavaScript,TypeScript,React,Node.js,AWS,Docker,PostgreSQL,microservicios,API REST,LLM,RAG,ingeniería de datos,contratación,Lenilson Pinheiro',
      ogLocale: 'es_ES',
      langLabel: 'Idioma',
      navSkip: 'Saltar al contenido principal',
      navHome: 'Inicio',
      navAbout: 'Sobre mí',
      navExperience: 'Experiencia',
      navTech: 'Stack',
      navProjects: 'Proyectos',
      navContact: 'Contacto',
      heroGreeting: 'Hola, soy',
      heroCtaPrimary: 'Ver proyectos',
      heroCtaSecondary: 'Contactar',
      aboutTitle: 'Sobre mí',
      aboutSubtitle:
        'Convierto restricciones de producto e ingeniería en resultados medibles: fiabilidad, velocidad de entrega y coste total.',
      aboutP1:
        'Como <span class="highlight">ingeniero full-stack senior</span>, entrego de extremo a extremo—APIs, modelos de datos y UI pulida—equilibrando <span class="highlight">arquitectura</span>, <span class="highlight">rendimiento</span> y <span class="highlight">seguridad</span> con trade-offs de negocio claros.',
      aboutP2:
        'Construyo servicios listos para <span class="highlight">alta concurrencia</span>, con observabilidad, caché y automatización pragmática. Colaboro como <span class="highlight">tech lead</span>: RFCs, revisión de código y entrega predecible.',
      aboutP3:
        'Me mantengo al día en <span class="highlight">ecosistemas modernos de Python y JS</span>, patrones cloud-native e <span class="highlight">integración responsable de LLM</span> (evaluación, guardrails, control de coste).',
      statProjects: 'Proyectos entregados',
      statYears: 'Años de experiencia',
      statClients: 'Stakeholders satisfechos',
      statTech: 'Tecnologías en uso activo',
      expTitle: 'Profundidad de experiencia (para reclutadores)',
      expSubtitle:
        'Narrativa técnica alineada al rol: alcance, stack y resultados—en el formato que managers y staff engineers escanean en CVs.',
      exp1Role: 'Ingeniero Full-Stack Senior · Producto y plataforma',
      exp1Meta: 'Alcance: apps web, APIs, integraciones · Áreas: producto, diseño, infra',
      exp1b1:
        'Features de extremo a extremo: APIs REST/JSON, auth/sesión, RBAC, jobs en background y paneles admin con mejoras medibles de UX.',
      exp1b2:
        'Rendimiento: tuning de queries, indexación, caché (HTTP + aplicación), reducción de payload y pruebas de carga realistas pre-release.',
      exp1b3:
        'Higiene de ingeniería: CI/CD, contratos tipados (cuando aplica), logs estructurados, error budgets y postmortems accionables.',
      exp2Role: 'Ingeniería con enfoque en datos · Analytics y fiabilidad',
      exp2Meta: 'Pipelines, métricas, calidad · Decisiones basadas en datos',
      exp2b1:
        'Pipelines tipo ETL/ELT y reporting; alineación de KPIs con stakeholders para evitar “métricas incorrectas”.',
      exp2b2:
        'Calidad de datos: validaciones, idempotencia, reconciliaciones y monitorización que detecta fallos silenciosos pronto.',
      exp2b3:
        'Instrumentación para experimentación (eventos, embudos) apoyando iteración de producto sin comprometer privacidad.',
      exp3Role: 'Integración de sistemas LLM · IA práctica en producción',
      exp3Meta: 'RAG, evaluación, seguridad · Coste y latencia bajo control',
      exp3b1:
        'Flujos RAG con chunking, filtros de metadata y reranking cuando mejora la precisión de forma material.',
      exp3b2:
        'Bucles de evaluación: conjuntos dorados, regresiones, versionado de prompts y revisión humana para salidas de alto riesgo.',
      exp3b3:
        'Operación: rate limits, presupuesto de tokens, caché de embeddings y degradación elegante ante incidencias de proveedor.',
      techTitle: 'Stack tecnológico',
      techSubtitle:
        'Toolkit pragmático para backends SaaS, frontends modernos, despliegue en nube y features data-intensive.',
      projTitle: 'Proyectos destacados',
      projSubtitle:
        'Iniciativas representativas de arquitectura, escala y rigor de entrega—detalles en GitHub.',
      proj1Title: 'Plataforma de gestión enterprise',
      proj1Desc:
        'Ecosistema React + Node; servicios modulares; PostgreSQL como fuente de verdad; Docker. Enfoque en rutas core <span class="highlight">p95 &lt; 200ms</span>, escalado horizontal y paneles operativos.',
      proj2Title: 'Experiencia web de alto rendimiento',
      proj2Desc:
        'UI mobile-first, HTML semántico, accesibilidad y presupuestos de rendimiento. Objetivo: buenos indicadores Lighthouse y <span class="highlight">CLS bajo</span> con layout estable y disciplina de assets.',
      proj3Title: 'Plataforma API escalable',
      proj3Desc:
        'Diseño de servicio Python (estilo FastAPI): JWT, rate limiting, OpenAPI, escrituras idempotentes y Redis para throttle/caché—pensado para <span class="highlight">alto volumen diario</span> con SLOs claros.',
      projCta: 'Ver en GitHub <i class="fas fa-arrow-right" aria-hidden="true"></i>',
      contactTitle: 'Trabajemos juntos',
      contactLead:
        'Abierto a roles <span class="highlight">senior IC</span>, <span class="highlight">contratos</span> y colaboraciones de alta confianza. Cuéntame stack, restricciones y timeline—respondo con claridad y siguientes pasos.',
      formTitle: 'Mensaje directo',
      formHint:
        'Envía correo a lenilsonpinheiro@gmail.com vía FormSubmit (la primera vez puede requerir confirmación única en el inbox de FormSubmit).',
      labelName: 'Nombre',
      labelEmail: 'Correo',
      labelMessage: 'Mensaje',
      labelSend: 'Enviar mensaje',
      formPrivacy:
        'Al enviar, aceptas que pueda responder usando tu correo. Sin listas de marketing; sin reventa de datos.',
      topicsSummary: 'Índice de temas (skills y keywords de reclutamiento)',
      topicsBody:
        '#FullStack #IngenieroSenior #Python #FastAPI #Django #JavaScript #TypeScript #React #NodeJS #PostgreSQL #MongoDB #Redis #Docker #AWS #GCP #REST #GraphQL #Microservicios #CI_CD #Observabilidad #LLM #RAG #PromptEngineering #IngenieríaDeDatos #SystemDesign #TechLead #Remoto #SaaS #Contratación #OpenToWork #LenilsonPinheiro',
      footerCopy: 'Lenilson Pinheiro. Hecho con mimo y criterios de producción.',
      typing: [
        'Ingeniero Full-Stack Senior',
        'Builder con mentalidad de datos',
        'Integrador de sistemas LLM',
        'Solucionador de problemas orientado a producto',
      ],
      ariaMenu: 'Abrir menú',
      ariaMenuClose: 'Cerrar menú',
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
        name: 'Lenilson Pinheiro',
        url: CANONICAL_BASE,
        email: 'mailto:lenilsonpinheiro@gmail.com',
        sameAs: [
          'https://www.linkedin.com/in/lenilsonpinheiro/',
          'https://github.com/LenilsonPinheiro',
        ],
        jobTitle: 'Senior Full-Stack Engineer',
        description: t.metaDescription,
        knowsAbout: knows,
      };
      ld.textContent = JSON.stringify(data);
    }
  }

  function applyLanguage(lang) {
    lang = normalizeLang(lang);
    window.__i18nActive = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
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
