"use strict";

/* =========================================================
   ONG SOCIAL
   SPA + DOM + TEMPLATES DINÂMICOS
   ========================================================= */


/* =========================================================
   1. CONTAINER PRINCIPAL DA SPA
   ========================================================= */

const app = document.querySelector("#app");


/* =========================================================
   2. DADOS DOS PROJETOS
   ========================================================= */

const projects = [
    {
        id: "doacoes",
        title: "Faça uma doação",
        badge: "Campanha ativa",
        badgeClass: "badge-success",
        description:
            "As doações ajudam a manter nossos projetos sociais e permitem ampliar o atendimento à comunidade.",
        details:
            "Qualquer contribuição pode fazer diferença na continuidade das ações desenvolvidas pela organização.",
        linkText: "Quero contribuir"
    },
    {
        id: "voluntariado",
        title: "Seja um voluntário",
        badge: "Vagas abertas",
        badgeClass: "badge-info",
        description:
            "Você também pode participar oferecendo seu tempo, seus conhecimentos e suas habilidades em nossas ações.",
        details:
            "Os voluntários podem colaborar em eventos, atividades comunitárias e diferentes projetos sociais.",
        linkText: "Quero ser voluntário"
    }
];


/* =========================================================
   3. RENDERIZAÇÃO DOS PROJETOS
   ========================================================= */

function renderProjects() {
    const container = document.querySelector("#project-list");
    const template = document.querySelector("#project-card-template");

    /*
     * Caso a página atual não seja projetos.html,
     * esses elementos não existirão.
     */
    if (!container || !template) {
        return;
    }

    /*
     * Evita duplicação caso a função seja executada
     * novamente após uma navegação SPA.
     */
    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
        /*
         * Clona o conteúdo do elemento <template>.
         */
        const clone = template.content.cloneNode(true);

        const article = clone.querySelector(".project-card");
        const badge = clone.querySelector(".badge");
        const title = clone.querySelector(".project-title");
        const description = clone.querySelector(
            ".project-description"
        );
        const details = clone.querySelector(".project-details");
        const link = clone.querySelector(".project-link");

        /*
         * Preenche o componente com os dados
         * vindos do array projects.
         */
        article.id = project.id;

        badge.textContent = project.badge;
        badge.classList.add(project.badgeClass);

        title.textContent = project.title;

        description.textContent = project.description;

        details.textContent = project.details;

        link.textContent = project.linkText;
        link.href = "cadastro.html";

        /*
         * Adiciona o componente ao fragmento temporário.
         */
        fragment.appendChild(clone);
    });

    /*
     * Insere todos os componentes no DOM
     * de uma única vez.
     */
    container.appendChild(fragment);
}


/* =========================================================
   4. INICIALIZAÇÃO DO CONTEÚDO DA PÁGINA
   ========================================================= */

function initializePage() {
    renderProjects();
}


/* =========================================================
   5. FECHAR MENU MOBILE
   ========================================================= */

function closeMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");

    if (menuToggle) {
        menuToggle.checked = false;
    }
}


/* =========================================================
   6. RENDERIZAÇÃO DAS ROTAS DA SPA
   ========================================================= */

async function renderPage(url, addToHistory = true) {
    try {
        /*
         * Busca o documento HTML correspondente
         * à rota selecionada.
         */
        const response = await fetch(
            url.pathname + url.search
        );

        if (!response.ok) {
            throw new Error(
                `Erro ao carregar a página: ${response.status}`
            );
        }

        /*
         * Converte a resposta para texto.
         */
        const html = await response.text();

        /*
         * Transforma o texto HTML em um documento
         * manipulável pelo DOM.
         */
        const parser = new DOMParser();

        const newDocument = parser.parseFromString(
            html,
            "text/html"
        );

        /*
         * Obtém somente o conteúdo principal
         * da página carregada.
         */
        const newMain = newDocument.querySelector("main");

        if (!newMain) {
            throw new Error(
                "A página carregada não possui um elemento <main>."
            );
        }

        /*
         * Mantém o mesmo elemento #app,
         * mas aplica as classes específicas
         * da nova página.
         */
        app.className = newMain.className;

        /*
         * Remove o conteúdo anterior.
         */
        app.innerHTML = "";

        /*
         * Injeta o novo conteúdo da rota.
         */
        app.insertAdjacentHTML(
            "beforeend",
            newMain.innerHTML
        );

        /*
         * Atualiza o título da aba do navegador.
         */
        document.title = newDocument.title;

        /*
         * Inicializa componentes dinâmicos
         * existentes na nova página.
         */
        initializePage();

        /*
         * Fecha o menu hamburger após
         * a navegação em telas menores.
         */
        closeMobileMenu();

        /*
         * Atualiza a URL sem recarregar
         * o documento completo.
         */
        if (addToHistory) {
            history.pushState(
                {},
                "",
                url.pathname + url.search + url.hash
            );
        }

        /*
         * Caso a rota possua uma âncora,
         * procura o elemento correspondente
         * depois da renderização dos templates.
         */
        if (url.hash) {
            const target = document.querySelector(url.hash);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });

                return;
            }
        }

        /*
         * Sem âncora, retorna ao topo da página.
         */
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } catch (error) {
        console.error(error);

        /*
         * Fallback:
         * caso a navegação dinâmica falhe,
         * utiliza o comportamento tradicional.
         */
        window.location.href = url.href;
    }
}


/* =========================================================
   7. INTERCEPTAÇÃO DOS LINKS INTERNOS
   ========================================================= */

document.addEventListener("click", (event) => {
    /*
     * Detecta o link mais próximo do elemento clicado.
     */
    const link = event.target.closest("a[href]");

    if (!link) {
        return;
    }

    /*
     * Preserva comportamentos nativos do navegador,
     * como abrir em outra aba.
     */
    if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank" ||
        link.hasAttribute("download")
    ) {
        return;
    }

    const href = link.getAttribute("href");

    if (!href) {
        return;
    }

    /*
     * Links externos ao sistema de rotas
     * continuam com seu comportamento normal.
     */
    if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    ) {
        return;
    }

    const url = new URL(
        link.href,
        window.location.href
    );

    /*
     * Intercepta apenas páginas HTML
     * do mesmo domínio.
     */
    if (
        url.origin !== window.location.origin ||
        !url.pathname.endsWith(".html")
    ) {
        return;
    }

    /*
     * Impede o recarregamento tradicional.
     */
    event.preventDefault();

    /*
     * Executa a navegação SPA.
     */
    renderPage(url);
});


/* =========================================================
   8. HISTÓRICO DO NAVEGADOR
   ========================================================= */

window.addEventListener("popstate", () => {
    /*
     * Permite utilizar os botões
     * Voltar e Avançar do navegador.
     */
    renderPage(
        new URL(window.location.href),
        false
    );
});


/* =========================================================
   9. CARREGAMENTO INICIAL
   ========================================================= */

initializePage();