const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------- INTRO SPLASH ----------------
window.addEventListener("load", () => {

  const splash = document.getElementById("splash");

  const logo = document.getElementById("splashLogo");

  logo.classList.add("show");

  setTimeout(() => {

    logo.classList.add("move");

  }, 1400);

  setTimeout(() => {

    splash.classList.add("hide");

  }, 2600);

});
const revealTargets = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealTargets.length) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("in-view"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }
}
