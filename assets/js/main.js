/* Optional enhancements. All profile content and links work without JavaScript. */
"use strict";

const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.getElementById("copy-status");
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  let resetTimer;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copyEmail);
      copyStatus.textContent = "Email address copied.";
      copyButton.classList.add("is-copied");
      copyButton.setAttribute("aria-label", "Email address copied");
      copyButton.title = "Copied!";
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        copyButton.classList.remove("is-copied");
        copyButton.setAttribute("aria-label", "Copy email address");
        copyButton.title = "Copy email address";
        copyStatus.textContent = "";
      }, 2500);
    } catch {
      copyStatus.textContent = "Could not copy. Please select the email address, or use the email link.";
    }
  });
}

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
function markCurrentSection() {
  const currentHash = navLinks.some((link) => link.hash === window.location.hash)
    ? window.location.hash : "#about";
  for (const link of navLinks) {
    if (link.hash === currentHash) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}
window.addEventListener("hashchange", markCurrentSection);
markCurrentSection();
