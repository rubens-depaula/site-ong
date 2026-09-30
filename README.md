# ONG Social

Projeto acadêmico de front-end desenvolvido como uma aplicação web para uma organização do terceiro setor.

A aplicação reúne páginas institucionais, projetos de doação e voluntariado, formulário de cadastro, navegação responsiva, comportamento SPA com JavaScript modular, acessibilidade por teclado e pipeline de build para produção com Vite.

## Tecnologias

- HTML5 semântico
- CSS3
- CSS Grid e Flexbox
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
- Imagens em AVIF, WebP e PNG
- Modo escuro automático com `prefers-color-scheme`
- Alto contraste com `prefers-contrast`
- Navegação por teclado
- Skip link para o conteúdo principal
- Menu mobile acessível com atributos ARIA
- Suporte a `prefers-reduced-motion`

## Arquitetura JavaScript

O código JavaScript utiliza ES Modules e separação de responsabilidades:

- `main.js`: ponto de entrada e registro dos eventos globais
- `router.js`: navegação SPA e integração com History API
- `storage.js`: persistência de estado no LocalStorage
- `projects.js`: geração dinâmica dos projetos a partir de templates
- `form.js`: validação e submissão do formulário
- `ui.js`: feedback visual, menu mobile e estados da interface

A biblioteca Day.js é instalada por npm e incorporada ao bundle gerado pelo Vite.

## Pré-requisitos

Para executar o projeto localmente são necessários:

- Node.js
- npm
- Git
- navegador moderno com suporte a ES Modules, History API e LocalStorage

## Instalação

```bash
git clone https://github.com/rubens-depaula/site-ong.git
cd site-ong
npm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação pode então ser acessada em `/html/index.html` no endereço exibido pelo Vite.

## Verificação de sintaxe

```bash
npm run check
```

O script utiliza `node --check` nos principais módulos JavaScript do projeto.

## Build de produção

```bash
npm run build
```

O Vite processa as três páginas da aplicação e gera a saída otimizada no diretório `dist/`.

O processo inclui bundling dos módulos JavaScript, minificação de HTML, CSS e JavaScript, processamento dos recursos estáticos e geração de arquivos com hash.

Na medição final, os arquivos HTML, CSS e JavaScript passaram de 51.008 bytes no código-fonte para 32.090 bytes na build, uma redução aproximada de 37,09%. As imagens não foram incluídas nessa medição.

## Preview da build

```bash
npm run preview
```

A versão de produção pode ser acessada em `/html/index.html` no endereço exibido pelo Vite Preview.

## Otimização de imagens

A aplicação utiliza `<picture>` para disponibilizar formatos modernos com fallback:

- PNG: 2.149.368 bytes
- WebP: 209.200 bytes
- AVIF: 179.514 bytes

A versão AVIF apresenta redução aproximada de 91,6% em relação ao PNG original.

## Acessibilidade

Entre as práticas implementadas estão:

- HTML semântico
- textos alternativos em imagens
- estados de foco visíveis
- navegação por teclado
- skip link para o conteúdo principal
- `aria-label`
- `aria-expanded`
- `aria-controls`
- `aria-current`
- `aria-invalid`
- `aria-describedby`
- mensagens com `role="status"` e `aria-live`
- fechamento do menu mobile com `Escape` e retorno de foco
- `prefers-reduced-motion`
- modo escuro e alto contraste

O menu mobile utiliza um elemento `<button>` nativo em vez de um checkbox para controlar a interação.

## Testes e validação

Foram realizados testes de:

- navegação entre Início, Projetos e Cadastro
- comportamento SPA e History API
- botões Voltar e Avançar do navegador
- âncoras internas
- renderização dinâmica dos projetos
- validação do formulário
- mensagens de erro e sucesso
- persistência de estado no LocalStorage
- navegação somente por teclado
- skip link
- menu mobile e tecla `Escape`
- modo escuro e alto contraste
- build e preview de produção

A sintaxe JavaScript também é verificada com `npm run check`.

## Deploy

O projeto está configurado para publicação no Netlify por meio do arquivo `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/"
  to = "/html/index.html"
  status = 302
```

Com a integração do repositório GitHub ao Netlify, a branch de produção pode gerar automaticamente uma nova build e publicação.

## Controle de versão

O projeto utiliza Git com uma estratégia inspirada em GitFlow:

- `main`: versão estável e pronta para publicação
- `develop`: integração das funcionalidades
- `feature/*`: desenvolvimento isolado de funcionalidades
- `hotfix/*`: correções urgentes em produção

As alterações são integradas por Pull Requests. As mensagens de commit seguem Conventional Commits, com prefixos como `feat:`, `fix:`, `docs:`, `build:`, `ci:`, `refactor:` e `chore:`.

## Versionamento

As releases seguem Semantic Versioning (`MAJOR.MINOR.PATCH`). A tag `v1.0.0` representa a primeira versão estável do projeto.

Após a integração das melhorias de build, acessibilidade, tema e deploy, uma nova release pode ser criada seguindo a mesma estratégia de versionamento.

## Autor

Rubens de Paula

Projeto desenvolvido para atividade acadêmica de desenvolvimento front-end.
