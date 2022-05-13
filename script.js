"use strict";
// on touch pop up the screen
console.log("hello");
const menu = document.getElementById("nav__menu");
const list = document.getElementById("nav__list");
const modal = document.getElementById("modal");

menu.addEventListener("click", () => {
  modal.classList.add("display");
  list.classList.add("display");
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.classList.remove("display");
    list.classList.remove("display");
  }
};
