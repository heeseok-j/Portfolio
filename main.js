"use strict";

// Navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Navbar toggle button
const navbarToggleBtn = document.querySelector(".navbar__toggle__btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-up");
});

// Navbar menu scroll
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("show-up");
  const scroll = document.querySelector(link);
  scroll.scrollIntoView({ behavior: "smooth" });
});

// Contact me
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const scroll = document.querySelector("#contact");
  scroll.scrollIntoView({ behavior: "smooth" });
});

// Home
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Projects
const workBtn = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtn.addEventListener("click", (event) => {
  const filter = event.target.dataset.filter;

  // work project animation
  projectContainer.classList.add("animation");
  let project;
  for (let i = 0; i < projects.length; i++) {
    project = projects[i];
    if (filter === "all" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  }
  setTimeout(() => {
    projectContainer.classList.remove("animation");
  }, 250);
});

// Top arrow
const topArrow = document.querySelector(".top__arrow");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    topArrow.classList.add("visible");
  } else {
    topArrow.classList.remove("visible");
  }
});

topArrow.addEventListener("click", () => {
  const scroll = document.querySelector("#home");
  scroll.scrollIntoView({ behavior: "smooth" });
});

const testimonials = document.querySelector("#testimonials");
console.log(testimonials);
const testimonialsHeigth = testimonials.clientHeight;
console.log(testimonialsHeigth);
