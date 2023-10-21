const hamb = document.querySelector(".hamb");
const lola = document.querySelector(".lola");
const emmy = document.querySelectorAll(".lola li");

hamb.addEventListener("click", () => {
  lola.classList.toggle("active");
  hamb.classList.toggle("active");
});

emmy.forEach((ee) =>
  ee.addEventListener("click", () => {
    lola.classList.toggle("active");
    hamb.classList.toggle("active");
  })
);
