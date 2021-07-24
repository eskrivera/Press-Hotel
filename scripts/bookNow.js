const booknow = document.querySelector(".booknow--logo");
const booknowCont = document.querySelector(".book--container");

menu.addEventListener("click", () => {
  booknowCont.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (
    booknowCont.classList.contains("spread") &&
    e.target != booknowCont &&
    e.target != booknow
  ) {
    booknowCont.classList.toggle("spread");
  }
});
