import Swiper, { Pagination } from "swiper"

new Swiper(".reviews-slider", {
  modules: [Pagination],
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
    clickable: true,
    bulletClass: "reviews-slider__bullet",
    bulletActiveClass: "reviews-slider__bullet--active"
  }
})
