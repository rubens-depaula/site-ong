"use strict";

import dayjs from "dayjs";

const STORAGE_KEY = "ongSocial:uiState";

export function getCurrentRoute() {
    return (
        window.location.pathname +
        window.location.search +
        window.location.hash
    );
}

export function getRouteFromUrl(url) {
    return url.pathname + url.search + url.hash;
}

function getCurrentTimestamp() {
    return dayjs().format(
        "YYYY-MM-DDTHH:mm:ssZ"
    );
}

function createDefaultState() {
    return {
        lastRoute: null,
        visitedRoutes: [],
        scrollPositions: {},
        updatedAt: null
    };
}

export function loadAppState() {
    const storedState =
        localStorage.getItem(STORAGE_KEY);

    if (!storedState) {
        return createDefaultState();
    }

    try {
        return {
            ...createDefaultState(),
            ...JSON.parse(storedState)
        };
    } catch (error) {
        console.error(
            "Erro ao recuperar o estado:",
            error
        );

        localStorage.removeItem(STORAGE_KEY);

        return createDefaultState();
    }
}

function saveAppState(state) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );
}

export function rememberRoute(route) {
    const state = loadAppState();

    state.lastRoute = route;

    state.visitedRoutes = [
        ...state.visitedRoutes.filter(
            (item) => item !== route
        ),
        route
    ].slice(-10);

    state.updatedAt = getCurrentTimestamp();

    saveAppState(state);
}

export function saveScrollPosition(route) {
    const state = loadAppState();

    state.scrollPositions[route] =
        Math.round(window.scrollY);

    state.updatedAt = getCurrentTimestamp();

    saveAppState(state);
}

export function restoreScrollPosition(route) {
    const state = loadAppState();

    const position =
        Number(state.scrollPositions[route] ?? 0);

    requestAnimationFrame(() => {
        window.scrollTo({
            top: position,
            behavior: "auto"
        });
    });
}