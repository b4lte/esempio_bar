const button = document.querySelector(".btn");
const target = document.querySelector<HTMLElement>("#menu");

button?.addEventListener("click", () => {
  target?.scrollIntoView({ behavior: "smooth" });
});

const sections = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
