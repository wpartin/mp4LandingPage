"use strict";

// Let's get our DOM items
const showcase = document.querySelector(".showcase");
const bars = document.getElementById("bars");
const close = document.getElementById("close");

// These are our two functions
function openMenu(e) {
  e.preventDefault();
  showcase.classList.add("active");
  bars.classList.add("hidden");
  close.classList.remove("hidden");
}
function closeMenu(e) {
  e.preventDefault();
  showcase.classList.remove("active");
  close.classList.add("hidden");
  bars.classList.remove("hidden");
}

// Here are our event listeners for click & touch :)
bars.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
bars.addEventListener("touchend", openMenu);
close.addEventListener("touchend", closeMenu);
