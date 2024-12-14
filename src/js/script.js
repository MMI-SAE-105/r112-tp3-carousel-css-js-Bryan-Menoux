// *** CAROUSEL ***
// TODO

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
let premierItem = document.querySelector(".carousel__item");
let scrollAmount = premierItem.clientWidth;

// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
  });
}

// *** Menu ancres *** //
const carouselMenu = document.querySelector(".carousel__menu");
const carouselItems = document.querySelectorAll(".carousel__item");

document
  .querySelector(".menu__item:first-child")
  .classList.add("menu__item--active");

if (carouselMenu) {
  carouselMenu.addEventListener("click", (e) => {
    document.querySelectorAll(".menu__item--active").forEach((item) => {
      item.classList.remove("menu__item--active");
    });

    if (e.target.classList.contains("menu__link")) {
      e.target.parentElement.classList.add("menu__item--active");
    }
  });
}
