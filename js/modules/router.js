"use strict";

import {
    getCurrentRoute,
    getRouteFromUrl,
    rememberRoute,
    saveScrollPosition,
    restoreScrollPosition
} from "./storage.js";

import {
    renderProjects
} from "./projects.js";

import {
    closeMobileMenu,
    updateCurrentNavLink
} from "./ui.js";

const app =
    document.querySelector("#app");

let activeRoute =
    getCurrentRoute();

function initializePage() {
    renderProjects();
    updateCurrentNavLink();
}

export async function renderPage(
    url,
    addToHistory = true
) {
    saveScrollPosition(activeRoute);

    try {
        const response =
            await fetch(
                url.pathname + url.search
            );

        if (!response.ok) {
            throw new Error(
                `Erro HTTP ${response.status}`
            );
        }

        const html =
            await response.text();

        const parser =
            new DOMParser();

        const newDocument =
            parser.parseFromString(
                html,
                "text/html"
            );

        const newMain =
            newDocument.querySelector("main");

        if (!newMain) {
            throw new Error(
                "Elemento <main> não encontrado."
            );
        }

        app.className =
            newMain.className;

        app.innerHTML =
            newMain.innerHTML;

        document.title =
            newDocument.title;

        if (addToHistory) {
            history.pushState(
                {},
                "",
                getRouteFromUrl(url)
            );
        }

        activeRoute =
            getRouteFromUrl(url);

        rememberRoute(activeRoute);

        initializePage();

        closeMobileMenu();

        if (url.hash) {
            const target =
                document.querySelector(url.hash);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });

                return;
            }
        }

        restoreScrollPosition(activeRoute);

    } catch (error) {
        console.error(error);

        window.location.href =
            url.href;
    }
}

export function handleLinkClick(event) {
    const link =
        event.target.closest("a[href]");

    if (!link) {
        return;
    }

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

    const href =
        link.getAttribute("href");

    if (
        !href ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    ) {
        return;
    }

    const url =
        new URL(
            link.href,
            window.location.href
        );

    if (
        url.origin !== window.location.origin ||
        !url.pathname.endsWith(".html")
    ) {
        return;
    }

    event.preventDefault();

    renderPage(url);
}

export function handlePopState() {
    renderPage(
        new URL(window.location.href),
        false
    );
}

export function handlePageHide() {
    saveScrollPosition(activeRoute);
}

export function initializeApplication() {
    activeRoute =
        getCurrentRoute();

    rememberRoute(activeRoute);

    initializePage();

    if (window.location.hash) {
        const target =
            document.querySelector(
                window.location.hash
            );

        target?.scrollIntoView();

        return;
    }

    restoreScrollPosition(activeRoute);
}