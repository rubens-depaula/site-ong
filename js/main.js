"use strict";

import {
    handleLinkClick,
    handlePopState,
    handlePageHide,
    initializeApplication
} from "./modules/router.js";

import {
    handleFormInput,
    handleFormSubmit
} from "./modules/form.js";

import {
    handleMenuToggle,
    handleMenuKeydown
} from "./modules/ui.js";


/* =========================================================
   EVENTOS GLOBAIS
   ========================================================= */

document.addEventListener(
    "click",
    handleLinkClick
);

document.addEventListener(
    "click",
    handleMenuToggle
);

document.addEventListener(
    "input",
    handleFormInput
);

document.addEventListener(
    "submit",
    handleFormSubmit
);

document.addEventListener(
    "keydown",
    handleMenuKeydown
);

window.addEventListener(
    "popstate",
    handlePopState
);

window.addEventListener(
    "pagehide",
    handlePageHide
);


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

initializeApplication();
