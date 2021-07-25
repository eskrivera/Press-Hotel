let booknow = document.querySelector(".booknow--logo");
let booknowCont = document.querySelector(".book--container");
let closer = document.querySelector(".close");

booknow.addEventListener("click", () => {
  booknowCont.classList.toggle("spread"), booknow.classList.toggle("spread");
});

closer.addEventListener("click", () => {
  booknowCont.classList.toggle("spread"), booknow.classList.toggle("spread");
});

// ------------------DatePicker----------------------------

var pickerArr = new Pikaday({
  field: document.getElementById("datepickerarr"),
});

var pickerDep = new Pikaday({
  field: document.getElementById("datepickerdep"),
});
