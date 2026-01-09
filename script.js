(function () {
  // Fade in page
  window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-ready");

    // Set year
    const yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Active nav link
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a").forEach((a) => {
      const href = a.getAttribute("href");
      if (href === path) a.classList.add("active");
    });

    // Load saved theme
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  });

  // Theme toggle
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;

    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();