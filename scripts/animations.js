let form = document.querySelector(".login__form");
let inputs = document.querySelectorAll(".login__form__input")

window.addEventListener('load', (e) => {
    form.classList.add("login__form--slidein");
  });

inputs.forEach(input => {
    input.addEventListener("focus", (e) => {
        e.target.classList.add("login__form__input--expand")
        e.target.classList.remove("login__form__input--shrink")
    });
    input.addEventListener("focusout", (e) => {
        e.target.classList.add("login__form__input--shrink")
        e.target.classList.remove("login__form__input--expand")
    });
});