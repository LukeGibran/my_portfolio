const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const navBg = document.querySelector(".nav-bg");
import TypeWriter from "./typewrite";

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.remove("hv");
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navBg.classList.add("show");

    navItems.forEach(navItem => navItem.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.add("hv");
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navBg.classList.remove("show");

    navItems.forEach(navItem => navItem.classList.remove("show"));

    showMenu = false;
  }
}
// Init On DOM Load
document.addEventListener("DOMContentLoaded", setTimeout(init, 900));

// Init app
function init() {
  const txtElement = document.querySelector(".sm-heading");
  const words = ["Web Developer", "Web Designer", "Programmer"];
  const wait = "3000";
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
