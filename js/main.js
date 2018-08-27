// Select DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const close = document.querySelector(".close-modal");
const inProgress = document.querySelectorAll("#in-progress");

// set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}

// Showing popup
function ModalPopup(event) {
  event.preventDefault();
  var modal = document.querySelector(".bg-modal");
  modal.style.display = "flex";
}

for (var i = 0; i < inProgress.length; i++) {
  inProgress[i].addEventListener("click", ModalPopup);
}

// closing Popup

close.addEventListener("click", ClosePopup);

function ClosePopup() {
  var modal = document.querySelector(".bg-modal");
  modal.style.display = "none";
}

// Publish on Git Hub Pages
var ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    branch: "master",
    repo: "https://github.com/RKJO/MyWeb"
  },
  callback
);
