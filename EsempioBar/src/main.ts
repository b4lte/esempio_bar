import "./style.css";

const button = document.querySelector(".btn");
const target = document.querySelector<HTMLElement>("#menu");

const sections = document.querySelectorAll(".fade-in");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

button?.addEventListener("click", () => {
  target?.scrollIntoView({ behavior: "smooth" });
});

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
  navLinks?.classList.toggle("active");
  hamburger?.classList.toggle("active");  // aggiunge/rimuove la X
});

// Opzionale: chiudi menu cliccando su un link
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navLinks?.classList.remove("open");
  });
});
