import "./style.css";

const button = document.querySelector(".btn");
const target = document.querySelector<HTMLElement>("#menu");

button?.addEventListener("click", () => {
  target?.scrollIntoView({ behavior: "smooth" });
});
