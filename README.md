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
- Day.js via CDN

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

## Pré-requisitos

Para executar o projeto localmente são necessários:

- navegador moderno com suporte a ES Modules, History API e LocalStorage;
- Python 3 para iniciar o servidor HTTP local;
- Git para clonar e versionar o repositório;
- acesso à internet para carregar a biblioteca Day.js via CDN.

Node.js não é obrigatório para executar a aplicação, mas pode ser utilizado para verificar a sintaxe dos arquivos JavaScript durante o desenvolvimento.

## Instalação e execução local

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/rubens-depaula/site-ong.git
cd site-ong
```

O projeto não utiliza gerenciador de pacotes nem possui dependências locais para instalar. A biblioteca Day.js é carregada diretamente por CDN nos documentos HTML.

Na raiz do projeto, inicie um servidor HTTP local:

```bash
python3 -m http.server 8080
```

Depois acesse no navegador:

```text
http://localhost:8080/html/index.html
```

O servidor local é necessário porque a SPA utiliza `fetch()` e ES Modules, recursos que devem ser testados em contexto HTTP em vez de abrir os arquivos diretamente com `file://`.

## Build

Não existe etapa de build nesta versão. HTML, CSS e JavaScript são servidos diretamente pelo navegador. A preparação para produção pode incluir posteriormente minificação, compressão e otimização dos recursos estáticos.

## Testes e validação

Os testes atuais são manuais e incluem:

- navegação entre Início, Projetos e Cadastro sem recarregamento completo;
- funcionamento dos botões Voltar e Avançar da History API;
- renderização dos projetos por template JavaScript;
- menu responsivo e navegação por teclado;
- validação dos campos de formulário e feedback de erro/sucesso;
- persistência de rotas e posição de rolagem no LocalStorage;
- carregamento dos formatos PNG, WebP e AVIF.

Para verificar sintaxe JavaScript com Node.js, quando disponível:

```bash
node --check js/main.js
node --check js/modules/router.js
node --check js/modules/storage.js
node --check js/modules/projects.js
node --check js/modules/form.js
node --check js/modules/ui.js
```

Os arquivos HTML também podem ser submetidos ao W3C HTML Checker para validação estrutural.

## Controle de versão

O projeto utiliza Git com uma estratégia inspirada em GitFlow:

- `main`: versão estável e pronta para publicação;
- `develop`: integração das funcionalidades em desenvolvimento;
- `feature/*`: desenvolvimento isolado de novas funcionalidades;
- `hotfix/*`: correções urgentes em versões estáveis.

As mensagens de commit seguem o padrão Conventional Commits, com prefixos como `feat:`, `fix:`, `docs:`, `refactor:` e `chore:`. Alterações desenvolvidas em branches secundárias são integradas por pull requests antes do merge.

## Acessibilidade

O projeto prioriza HTML semântico, textos alternativos em imagens, estados de foco visíveis, suporte à navegação por teclado, atributos ARIA quando necessários e feedback textual nos formulários. A revisão final considera as diretrizes WCAG 2.1 nível AA aplicáveis ao escopo acadêmico.

## Versionamento

As releases seguem Semantic Versioning (`MAJOR.MINOR.PATCH`). A tag `v1.0.0` representa a primeira versão estável do projeto.

- `MAJOR`: alterações incompatíveis com versões anteriores;
- `MINOR`: novas funcionalidades compatíveis;
- `PATCH`: correções compatíveis.

As versões estáveis são identificadas por tags Git, permitindo relacionar cada entrega ao histórico de commits correspondente.
