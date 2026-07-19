const menuIcon = document.querySelector(".nav__hamburguer");
const navOverlay = document.querySelector(".nav__screen");

// Mostrar el menu u coultarlo
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("nav__hamburguer--open");
  navOverlay.classList.toggle("nav__screen--show");
});

// Desplegar sub menus
navOverlay.addEventListener("click", (e) => {
  const currentElement = e.target;
  if (isActive(currentElement, "nav__parent")) {
    const subMenu = currentElement.parentElement.children[1];
    if (window.innerWidth < 768) {
      let height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0;
      subMenu.style.height = `${height}px`;
      rotateArrow(currentElement);
    }
  }
});

// desactivar sub menus

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll(".nav__inner");
    navInners.forEach((navInner) => {
      navInner.style.height = "";
    });
  }
});

function isActive(element, string) {
  return element.classList.value.includes(string);
}

function rotateArrow(currentElement) {
  let currentItem = currentElement.parentElement;
  const navInner = currentElement.parentElement.children[1];
  const arrowIcon = currentElement.querySelector(".nav__arrow");
  console.log(arrowIcon);
  if (navInner.style.height != "0px") {
    arrowIcon.style.transform = "rotate(180deg)";
  } else {
    arrowIcon.style.transform = "rotate(0deg)";
  }
}
