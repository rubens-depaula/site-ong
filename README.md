# ONG Social

Projeto acadêmico de front-end desenvolvido como uma aplicação web para uma organização do terceiro setor. A aplicação reúne páginas institucionais, projetos de doação e voluntariado, formulário de cadastro, navegação responsiva e comportamento SPA com JavaScript modular.

## Tecnologias

- HTML5 semântico
- CSS3
- CSS Grid e Flexbox
- JavaScript ES6+
- ES Modules
- History API
- LocalStorage
- Day.js

## Estrutura do projeto

```text
site-ong/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
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
└── README.md
```

## Funcionalidades

- Navegação responsiva com menu mobile
- SPA baseada em `fetch()`, `DOMParser` e History API
- Conteúdo dinâmico com `<template>` e manipulação do DOM
- Validação de formulários com HTML5 e JavaScript
- Feedback visual por mensagens e toast
- Persistência de estado da interface com LocalStorage
- Registro de rotas visitadas e posições de rolagem
- Componentes responsivos com Grid e Flexbox
- Imagens em PNG, WebP e AVIF

## Arquitetura JavaScript

O código JavaScript utiliza ES Modules e separação de responsabilidades:

- `main.js`: ponto de entrada e registro dos eventos globais
- `router.js`: navegação SPA e integração com History API
- `storage.js`: persistência de estado em LocalStorage
- `projects.js`: geração dinâmica dos projetos a partir de templates
- `form.js`: validação e submissão do formulário
- `ui.js`: feedback visual, menu mobile e estados da interface

## Execução local

Na raiz do projeto, inicie um servidor HTTP local:

```bash
python3 -m http.server 8080
```

Depois acesse:

```text
http://localhost:8080/html/index.html
```

## Controle de versão

O projeto utiliza Git com uma estratégia inspirada em GitFlow:

- `main`: versão estável
- `develop`: integração das funcionalidades
- `feature/*`: desenvolvimento isolado de novas funcionalidades
- `hotfix/*`: correções urgentes em versões estáveis

As mensagens de commit seguem o padrão Conventional Commits, com prefixos como `feat:`, `fix:`, `docs:`, `refactor:` e `chore:`.

## Acessibilidade

O projeto prioriza HTML semântico, textos alternativos em imagens, estados de foco visíveis, suporte à navegação por teclado, atributos ARIA quando necessários e feedback textual nos formulários.

## Versionamento

As releases seguem Semantic Versioning (`MAJOR.MINOR.PATCH`). A tag `v1.0.0` representa a primeira versão estável do projeto.
