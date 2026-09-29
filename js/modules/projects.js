"use strict";

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

export function renderProjects() {
    const container =
        document.querySelector("#project-list");

    const template =
        document.querySelector("#project-card-template");

    if (!container || !template) {
        return;
    }

    container.innerHTML = "";

    const fragment =
        document.createDocumentFragment();

    projects.forEach((project) => {
        const clone =
            template.content.cloneNode(true);

        const article =
            clone.querySelector(".project-card");

        const badge =
            clone.querySelector(".badge");

        const title =
            clone.querySelector(".project-title");

        const description =
            clone.querySelector(".project-description");

        const details =
            clone.querySelector(".project-details");

        const link =
            clone.querySelector(".project-link");

        article.id = project.id;

        badge.textContent = project.badge;
        badge.classList.add(project.badgeClass);

        title.textContent = project.title;
        description.textContent = project.description;
        details.textContent = project.details;

        link.textContent = project.linkText;
        link.href = "cadastro.html";

        fragment.appendChild(clone);
    });

    container.appendChild(fragment);
}