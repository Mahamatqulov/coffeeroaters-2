const navbarToggleBtn = document.querySelector(".navbar-toggle");
const hiddenNavEl = document.querySelector(".hidden-nav");
const navbarToggleImageEl = document.querySelector(".navbar-toggle__image");

navbarToggleBtn.addEventListener("click", () => {
  hiddenNavEl.classList.toggle("show-nav");
  document.body.classList.toggle("overflow-toggle");
  if (document.body.classList.contains("overflow-toggle")) {
    navbarToggleImageEl.src = "./images/shared/mobile/icon-close.svg";
  } else {
    navbarToggleImageEl.src = "./images/shared/mobile/icon-hamburger.svg";
  }
});
