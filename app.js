(function () {
  "use strict";

  const config = window.CAMPAIGN_CONFIG || {};
  const params = new URLSearchParams(window.location.search);
  const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const attribution = Object.fromEntries(
    attributionKeys.map((key) => [key, params.get(key) || ""])
  );

  try {
    sessionStorage.setItem("vvnz_attribution", JSON.stringify(attribution));
  } catch (_) {
    // The page remains functional when storage is blocked.
  }

  document.querySelectorAll("[data-config]").forEach((node) => {
    const value = config[node.dataset.config];
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-config-link]").forEach((node) => {
    const value = config[node.dataset.configLink];
    if (value) node.setAttribute("href", value);
    else node.removeAttribute("href");
  });

  const sources = document.querySelector("#official-sources");
  (config.officialSources || []).forEach((source) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.textContent = source.label;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    sources.appendChild(link);
  });

  function track(eventName, properties = {}) {
    const safeProperties = {
      ...properties,
      page_path: window.location.pathname,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_content: attribution.utm_content
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, safeProperties);
    }
    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, safeProperties);
    }
    window.dispatchEvent(new CustomEvent("campaign:event", {
      detail: { eventName, properties: safeProperties }
    }));
  }

  document.querySelectorAll("[data-track]").forEach((node) => {
    node.addEventListener("click", () => track("cta_click", { cta_id: node.dataset.track }));
  });

  document.querySelectorAll("details").forEach((node, index) => {
    node.addEventListener("toggle", () => {
      if (node.open) track("faq_open", { faq_index: index + 1 });
    });
  });

  const form = document.querySelector("#consultation-form");
  const status = document.querySelector("#form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";

    if (!form.reportValidity()) {
      status.textContent = "Перевірте, чи заповнені всі поля та надана згода.";
      track("consultation_validation_error");
      return;
    }

    const formData = new FormData(form);
    if (!config.consultationFormEndpoint) {
      status.textContent = "Онлайн-запис ще налаштовується. Скористайтеся офіційним телефоном після його публікації.";
      track("consultation_endpoint_missing", { audience: formData.get("audience") });
      return;
    }

    const payload = {
      audience: formData.get("audience"),
      name: formData.get("name"),
      contact: formData.get("contact"),
      interest: formData.get("interest"),
      consent: formData.get("consent") === "on",
      consent_timestamp: new Date().toISOString(),
      source: attribution
    };

    const submitButton = form.querySelector("button[type=submit]");
    submitButton.disabled = true;
    status.textContent = "Надсилаємо…";

    try {
      const response = await fetch(config.consultationFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      status.textContent = "Запит отримано. Відповідальний зв’яжеться з вами у робочий час.";
      track("consultation_submitted", {
        audience: payload.audience,
        interest: payload.interest
      });
    } catch (_) {
      status.textContent = "Не вдалося надіслати запит. Спробуйте пізніше або скористайтеся офіційним телефоном.";
      track("consultation_submit_error");
    } finally {
      submitButton.disabled = false;
    }
  });

  window.CampaignAnalytics = { track, attribution };
  track("page_view");
})();
