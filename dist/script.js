"use strict";

const ham = document.querySelector(".ham");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navItem = document.querySelector(".nav-items");
const li = document.querySelectorAll(".nav-li");

let show = true;

const openClose = function () {
  if (show) {
    burger.classList.add("open");
    navItem.style.visibility = "visible";
    li.forEach((el) => el.classList.add("open"));
    nav.classList.add("open");
    console.log("hello");
    show = false;
  } else {
    burger.classList.remove("open");
    navItem.style.visibility = "hidden";
    li.forEach((el) => el.classList.remove("open"));
    nav.classList.remove("open");
    show = true;
  }
};

ham.addEventListener("click", openClose);
