"use strict";

export function showToast(message) {
    let toast =
        document.querySelector(".toast");

    if (!toast) {
        toast = document.createElement("div");

        toast.className =
            "toast toast-success";

        toast.setAttribute("role", "status");
        toast.setAttribute(
            "aria-live",
            "polite"
        );

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("is-visible");

    window.setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 3500);
}

export function closeMobileMenu() {
    const toggle =
        document.querySelector(".menu-toggle");

    const button =
        document.querySelector(".menu-button");

    if (toggle) {
        toggle.checked = false;
    }

    if (button) {
        button.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}

export function handleMenuChange(event) {
    const toggle =
        event.target.closest(".menu-toggle");

    if (!toggle) {
        return;
    }

    const button =
        document.querySelector(".menu-button");

    if (button) {
        button.setAttribute(
            "aria-expanded",
            String(toggle.checked)
        );
    }
}

export function updateCurrentNavLink() {
    const currentPath =
        window.location.pathname;

    document
        .querySelectorAll(".menu > li > a")
        .forEach((link) => {
            link.removeAttribute("aria-current");

            const url =
                new URL(link.href);

            if (url.pathname === currentPath) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            }
        });
}