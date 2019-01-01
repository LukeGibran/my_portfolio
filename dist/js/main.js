const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const navBg = document.querySelector(".nav-bg");

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

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 0);
    this.type();
    this.isDelete = false;
  }

  type() {
    // Current Index
    const current = this.wordIndex % this.words.length;
    // Get full txt of current words
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into txtElement
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.wait;
      //Set Delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
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
