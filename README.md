cat > README.md <<'EOF'
# ONG Social

Projeto acadêmico de front-end desenvolvido como uma aplicação web para uma organização do terceiro setor.

A aplicação reúne páginas institucionais, projetos de doação e voluntariado, formulário de cadastro, navegação responsiva, comportamento SPA com JavaScript modular, acessibilidade por teclado e pipeline de build para produção com Vite.

## Tecnologias

- HTML5 semântico
- CSS3
- CSS Grid
- Flexbox
- JavaScript ES6+
- ES Modules
- History API
- LocalStorage
- Day.js via npm
- Vite
- Netlify

## Estrutura do projeto

```text
site-ong/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   ├── style.css
│   └── accessibility.css
├── imagens/
│   ├── ong.png
│   ├── ong.webp
│   └── ong.avif
├── js/
│   ├── main.js
│   └── modules/
│       ├── router.js
│       ├── storage.js
│       ├── projects.js
│       ├── form.js
│       └── ui.js
├── package.json
├── package-lock.json
├── vite.config.mjs
├── netlify.toml
├── .gitignore
└── README.md