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
  (function () {
  const STORAGE_KEY = "theme";

  function getStoredTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  }
  function setStoredTheme(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch {}
  }
  function removeStoredTheme() {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }

  function setTheme(theme) {
    const root = document.documentElement;

    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      setStoredTheme("light");
    } else {
      // Dark = default variables in :root (no attribute)
      root.removeAttribute("data-theme");
      removeStoredTheme();
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Apply stored theme (only 'light' is stored)
    const saved = getStoredTheme();
    if (saved === "light") setTheme("light");

    // year
    const yearEl = document.querySelector("[data-year]");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-theme-toggle]");
    if (!btn) return;

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    setTheme(isLight ? "dark" : "light");
  });
})();