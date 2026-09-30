"use strict";


/* =========================================================
   TOAST
   ========================================================= */

export function showToast(message) {
    let toast =
        document.querySelector(".toast");

    if (!toast) {
        toast =
            document.createElement("div");

        toast.className =
            "toast toast-success";

        toast.setAttribute(
            "role",
            "status"
        );

        toast.setAttribute(
            "aria-live",
            "polite"
        );

        toast.setAttribute(
            "aria-atomic",
            "true"
        );

        document.body.appendChild(toast);
    }

    toast.textContent =
        message;

    toast.classList.add(
        "is-visible"
    );

    window.setTimeout(() => {
        toast.classList.remove(
            "is-visible"
        );
    }, 3500);
}


/* =========================================================
   MENU MOBILE
   ========================================================= */

export function closeMobileMenu() {
    const nav =
        document.querySelector(
            ".main-nav"
        );

    const button =
        document.querySelector(
            ".menu-button"
        );

    if (!nav || !button) {
        return;
    }

    nav.classList.remove(
        "is-open"
    );

    button.setAttribute(
        "aria-expanded",
        "false"
    );

    button.setAttribute(
        "aria-label",
        "Abrir menu"
    );
}


/* =========================================================
   ABRIR / FECHAR MENU
   ========================================================= */

export function handleMenuToggle(event) {
    const button =
        event.target.closest(
            ".menu-button"
        );

    if (!button) {
        return;
    }

    const nav =
        button.closest(
            ".main-nav"
        );

    if (!nav) {
        return;
    }

    const isOpen =
        nav.classList.toggle(
            "is-open"
        );

    button.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    button.setAttribute(
        "aria-label",
        isOpen
            ? "Fechar menu"
            : "Abrir menu"
    );
}


/* =========================================================
   ESC FECHA O MENU
   ========================================================= */

export function handleMenuKeydown(event) {
    if (event.key !== "Escape") {
        return;
    }

    const nav =
        document.querySelector(
            ".main-nav.is-open"
        );

    if (!nav) {
        return;
    }

    const button =
        nav.querySelector(
            ".menu-button"
        );

    closeMobileMenu();

    button?.focus();
}


/* =========================================================
   PÁGINA ATUAL
   ========================================================= */

export function updateCurrentNavLink() {
    const currentPath =
        window.location.pathname;

    document
        .querySelectorAll(
            ".menu > li > a"
        )
        .forEach((link) => {
            link.removeAttribute(
                "aria-current"
            );

            const url =
                new URL(
                    link.href,
                    window.location.href
                );

            if (
                url.pathname ===
                currentPath
            ) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            }
        });
}
