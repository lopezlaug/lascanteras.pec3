//console.log("hola mundo")
import "./style.css";

window.setInterval(() => {
  const animacion = document.querySelector("#animacioncss");
  if (animacion) {
    animacion.classList.toggle("fin");
  }
}, 2500);

//console.log(Swiper)
