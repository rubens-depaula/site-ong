"use strict";

import { showToast } from "./ui.js";

function getValidationMessage(input) {
    const validity = input.validity;

    if (validity.valueMissing) {
        return "Este campo é obrigatório.";
    }

    if (
        validity.typeMismatch &&
        input.type === "email"
    ) {
        return "Informe um endereço de e-mail válido.";
    }

    if (validity.patternMismatch) {
        if (input.id === "cpf") {
            return "Informe o CPF no formato 000.000.000-00.";
        }

        if (input.id === "telefone") {
            return "Informe o telefone no formato (19) 99999-9999.";
        }

        if (input.id === "cep") {
            return "Informe o CEP no formato 00000-000.";
        }
    }

    return "Verifique o valor informado.";
}

function getFeedbackElement(input) {
    const feedbackId =
        `${input.id}-feedback`;

    let feedback =
        document.querySelector(`#${feedbackId}`);

    if (!feedback) {
        feedback =
            document.createElement("small");

        feedback.id = feedbackId;
        feedback.className = "field-message";

        input.insertAdjacentElement(
            "afterend",
            feedback
        );

        input.setAttribute(
            "aria-describedby",
            feedbackId
        );
    }

    return feedback;
}

function validateField(
    input,
    showEmptyError = false
) {
    const feedback =
        getFeedbackElement(input);

    input.classList.remove(
        "field-valid",
        "field-invalid"
    );

    feedback.classList.remove(
        "field-message-success",
        "field-message-error"
    );

    if (
        input.value.trim() === "" &&
        !showEmptyError
    ) {
        input.removeAttribute("aria-invalid");
        feedback.textContent = "";

        return true;
    }

    if (!input.checkValidity()) {
        input.classList.add("field-invalid");

        input.setAttribute(
            "aria-invalid",
            "true"
        );

        feedback.textContent =
            getValidationMessage(input);

        feedback.classList.add(
            "field-message-error"
        );

        return false;
    }

    input.classList.add("field-valid");

    input.setAttribute(
        "aria-invalid",
        "false"
    );

    feedback.textContent =
        "Campo preenchido corretamente.";

    feedback.classList.add(
        "field-message-success"
    );

    return true;
}

export function handleFormInput(event) {
    const input =
        event.target.closest("form input");

    if (!input) {
        return;
    }

    validateField(input);
}

export function handleFormSubmit(event) {
    const form =
        event.target.closest("form");

    if (!form) {
        return;
    }

    event.preventDefault();

    const inputs = [
        ...form.querySelectorAll("input")
    ];

    const valid =
        inputs
            .map((input) =>
                validateField(input, true)
            )
            .every(Boolean);

    if (!valid) {
        showToast(
            "Existem campos que precisam ser corrigidos."
        );

        form
            .querySelector(".field-invalid")
            ?.focus();

        return;
    }

    const data =
        Object.fromEntries(
            new FormData(form).entries()
        );

    console.log(
        "Dados do formulário:",
        data
    );

    showToast(
        "Cadastro enviado com sucesso!"
    );

    form.reset();
}