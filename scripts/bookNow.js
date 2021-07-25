let booknow = document.querySelector(".booknow--logo");
let booknowCont = document.querySelector(".book--container");
let closer = document.querySelector(".close");

booknow.addEventListener("click", () => {
  booknowCont.classList.toggle("spread"), booknow.classList.toggle("spread");
});

closer.addEventListener("click", () => {
  booknowCont.classList.toggle("spread"), booknow.classList.toggle("spread");
});
