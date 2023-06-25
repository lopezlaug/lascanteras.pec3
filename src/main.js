//console.log("hola mundo")
import "./style.css";
// core version + navigation, pagination modules:
import Swiper from "swiper/swiper-bundle";
import "swiper/swiper.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

const swiper = new Swiper(".swiper-container", {
  autoplay: { delay: 8000 }, // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//console.log(Swiper)
