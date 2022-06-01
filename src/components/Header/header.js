const headerTop = document.querySelector(".header__top")
const stickyElement = document.querySelector("#header-sticky")

const headerTopHeight = headerTop.scrollHeight
const stickyElementActiveClassName = "header__bottom--active"

function scrollHandler() {
  const yAxis = window.scrollY

  if (yAxis >= headerTopHeight) {
    return stickyElement.classList.add(stickyElementActiveClassName)
  }

  stickyElement.classList.remove(stickyElementActiveClassName)
}

window.addEventListener("scroll", scrollHandler)
