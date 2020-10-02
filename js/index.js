// // * `mouseover`
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.cssText =
      "color: #F69C08;transform: scale(1.2);transition: all 0.5s ease; font-weight: 800;font-style: oblique;";
  });
  link.addEventListener("mouseout", () => {
    link.style.cssText = "color: inherit";
  });
});

// // * `keydown`

// // * `wheel`

// // * `load`
const logo = document.querySelector("h1.logo-heading");

window.addEventListener("load", () => {
  logo.style.fontWeight = "800";
});

// // * `focus`

// // * `resize`

// // * `scroll`

const mainNav = document.querySelector(".main-navigation");

window.addEventListener("scroll", () => {
  mainNav.style.borderBottom = "3px dashed #F69C08";
});

// // * `select`

// 1. Using `dblclick`

//When main image double clicked insert a random image of a bus

const busImages = [
  "https://images.unsplash.com/photo-1554460196-e6afa9dc66b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1577459640575-219cbf231b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

function randomBus(element) {
  let random = Math.floor(Math.random() * 4);
  return (element["src"] = busImages[random]);
}

const heroImage = document.querySelector(".intro img");
heroImage.addEventListener("dblclick", () => {
  randomBus(heroImage);
});

// On key left or right

// // * `drag / drop`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()
