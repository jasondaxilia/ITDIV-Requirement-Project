const burger = document.querySelector(".menu");
const Header = document.querySelector(".Header");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  Header.classList.toggle("active");
});
document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    Header.classList.remove("active");
  })
);
