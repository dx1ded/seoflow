const burger = document.querySelector(".burger")
const burgerOpen = document.querySelector("#burger-open")
const burgerClose = burger.querySelector("#burger-close")
const burgerItems = burger.querySelectorAll(".burger-nav__item")

const burgerActiveClassName = "burger--active"

;[burgerOpen, burgerClose, ...burgerItems]
  .forEach((element) => element.addEventListener(
    "click",
    burgerClickHandler
  ))

function burgerClickHandler() {
  burger.classList.toggle(burgerActiveClassName)
}
