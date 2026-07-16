const menuIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector('.nav__screen')

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle('nav__screen--show ')
});
