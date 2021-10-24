const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger_close");
const hamburgerOpen = document.querySelector(".hamburger_open");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

let navOpen = false;

hamburger.addEventListener("click", () => {
  navOpen = !navOpen;

  if (navOpen === true) {
    hamburgerClose.classList.add("show-nav");
    hamburgerOpen.classList.remove("show-nav");
    nav.classList.add("show-nav");
    overlay.classList.add("display-overlay");
    document.documentElement.style.overflow = "hidden";
  } else {
    hamburgerOpen.classList.add("show-nav");
    hamburgerClose.classList.remove("show-nav");
    nav.classList.remove("show-nav");
    overlay.classList.remove("display-overlay");
    document.documentElement.style.overflowY = "scroll";
  }
});
