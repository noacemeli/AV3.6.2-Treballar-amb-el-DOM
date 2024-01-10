// Esta función se ejecuta cuando el documento HTML ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  //--------ESTRELLA----------

  // Selecciona todos los elementos con la clase "light_pixel" dentro de un elemento con la clase "star"
  var starPixels = document.querySelectorAll(".star .light_pixel");

  // Agrega un evento de mouseover a cada elemento seleccionado
  starPixels.forEach(function (starPixel) {
    starPixel.addEventListener("mouseover", function () {
      // Cambia el color de fondo a azul para el elemento actual
      starPixel.classList.remove("yellow");
      starPixel.classList.add("blue");

      // Cambia el color de fondo a azul para todas las otras estrellas
      var allStars = document.querySelectorAll(
        ".star .light_pixel:not(:hover)"
      );
      allStars.forEach(function (otherStar) {
        otherStar.classList.remove("yellow");
        otherStar.classList.add("blue");
      });
    });

    // Agrega un evento de mouseout a cada elemento seleccionado
    starPixel.addEventListener("mouseout", function () {
      // Cambia el color de fondo a amarillo para el elemento actual
      starPixel.classList.remove("blue");
      starPixel.classList.add("yellow");

      // Cambia el color de fondo a amarillo para todas las otras estrellas
      var allStars = document.querySelectorAll(
        ".star .light_pixel:not(:hover)"
      );
      allStars.forEach(function (otherStar) {
        otherStar.classList.remove("blue");
        otherStar.classList.add("yellow");
      });
    });
  });

  //--------LLUMS----------
});
