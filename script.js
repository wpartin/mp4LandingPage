"use strict";

const showcase = document.querySelector(".showcase");
const bars = document.getElementById("bars");
const close = document.getElementById("close");

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

bars.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
bars.addEventListener("touchend", openMenu);
close.addEventListener("touchend", closeMenu);
