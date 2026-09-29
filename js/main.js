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
    handleMenuChange
} from "./modules/ui.js";


/* =========================================================
   EVENTOS GLOBAIS
   ========================================================= */

document.addEventListener(
    "click",
    handleLinkClick
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
    "change",
    handleMenuChange
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