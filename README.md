# Portfólio Pessoal - Lenilson Pinheiro

Uma landing page moderna e tecnológica desenvolvida com HTML5, CSS3 e JavaScript puro, apresentando um design dark theme com efeitos neon e animações fluidas.

## 🚀 Características

### Design
- **Dark Theme** com acentos neon (ciano, roxo, verde)
- **Glassmorphism** em cards e elementos
- **Animações suaves** de scroll reveal
- **Cursor personalizado** interativo
- **Tipografia moderna** (Inter + Roboto Mono)

### Funcionalidades
- ✅ Efeito de digitação dinâmico no Hero
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Contadores animados nas estatísticas
- ✅ Cards de projetos com hover effects
- ✅ Links de contato interativos
- ✅ Totalmente responsivo (Mobile, Tablet, Desktop)
- ✅ Acessibilidade (WAI-ARIA, focus-visible)
- ✅ Performance otimizada

### Seções
1. **Hero Section** - Apresentação impactante com efeito de digitação
2. **Sobre** - Resumo profissional com estatísticas animadas
3. **Stack Tecnológico** - Grid de tecnologias dominadas
4. **Projetos** - Cards de projetos em destaque
5. **Contato** - Links para redes sociais e email

## 📋 Pré-requisitos

Nenhum! O arquivo `index.html` é standalone e pode ser aberto diretamente no navegador.

## 🛠️ Como Usar

### Opção 1: Abrir Diretamente
1. Abra o arquivo `index.html` no seu navegador

### Opção 2: Servidor Local
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 🎨 Personalização

### Alterar Informações Pessoais

1. **Nome e Título** (linha ~350):
```html
<h1 class="hero-name">Seu Nome</h1>
<h2 class="hero-title">Eu sou <span class="typing-effect" id="typingText"></span></h2>
```

2. **Títulos do Efeito de Digitação** (linha ~680):
```javascript
const titles = [
    'Desenvolvedor Fullstack',
    'Arquiteto de Software',
    // Adicione seus títulos aqui
];
```

3. **Texto Sobre** (linha ~380):
```html
<div class="about-text">
    <p>Seu texto aqui...</p>
</div>
```

4. **Estatísticas** (linha ~400):
```html
<span class="stat-number" data-target="50">0</span>
<span class="stat-label">Projetos Concluídos</span>
```

5. **Tecnologias** (linha ~440):
```html
<div class="tech-card">
    <i class="fab fa-python tech-icon"></i>
    <div class="tech-name">Python</div>
</div>
```

6. **Projetos** (linha ~480):
```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Nome do Projeto</h3>
        <p class="project-description">Descrição...</p>
        <a href="SEU_LINK_GITHUB" class="project-link">Ver no GitHub</a>
    </div>
</div>
```

7. **Links de Contato** (linha ~540):
```html
<a href="mailto:seuemail@exemplo.com" class="contact-link">
<a href="https://www.linkedin.com/in/seuperfil/" class="contact-link">
<a href="https://github.com/seuusuario" class="contact-link">
```

### Alterar Cores

Edite as variáveis CSS no início do arquivo (linha ~30):
```css
:root {
    --accent-cyan: #00f0ff;      /* Cor principal */
    --accent-purple: #b026ff;    /* Cor secundária */
    --accent-green: #00ff88;     /* Cor de destaque */
    --bg-primary: #0a0a0f;       /* Fundo principal */
    --bg-secondary: #111118;     /* Fundo secundário */
}
```

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Pequeno**: < 480px

## ♿ Acessibilidade

- Atributos ARIA nos elementos interativos
- Navegação por teclado funcional
- Focus-visible para indicadores visuais
- Suporte a `prefers-reduced-motion` para usuários sensíveis a animações
- Contraste adequado em todos os elementos

## 🎯 Performance

- CSS e JavaScript inline (sem requisições externas além de fontes)
- Animações otimizadas com `requestAnimationFrame`
- Lazy loading preparado para imagens futuras
- Transições suaves sem impacto na performance

## 📝 Notas

- As fontes são carregadas do Google Fonts
- Os ícones são do Font Awesome (CDN)
- Todos os links externos abrem em nova aba (`target="_blank"`)
- O cursor personalizado funciona apenas em desktop

## 🔄 Atualizações Futuras

Para adicionar mais funcionalidades:
- Formulário de contato funcional
- Blog/Artigos
- Seção de certificações
- Testimonials/Depoimentos
- Modo claro/escuro toggle
- Animações com GSAP (opcional)

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio portfólio!

---

**Desenvolvido com ❤️ por Lenilson Pinheiro**
