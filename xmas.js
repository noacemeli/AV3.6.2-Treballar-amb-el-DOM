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

  //--------LLUMS GROGUES----------
  // Selecciona todos los elementos con la clase "light_pixel" dentro de un elemento con la clase "star"
  var yellowPixels = document.querySelectorAll(".fork .light_pixel.yellow");

  // Agrega un evento de mouseover a cada elemento seleccionado
  yellowPixels.forEach(function (yellowPixel) {
    yellowPixel.addEventListener("mouseover", function () {
      // Cambia el color de fondo a azul para el elemento actual
      yellowPixel.classList.remove("yellow");
      yellowPixel.classList.add("blue");
    });

    // Agrega un evento de mouseout a cada elemento seleccionado
    yellowPixel.addEventListener("mouseout", function () {
      // Cambia el color de fondo a amarillo para el elemento actual
      yellowPixel.classList.remove("blue");
      yellowPixel.classList.add("yellow");
    });
  });

  //--------LLUMS BLAVES----------
  // Selecciona todos los elementos con la clase "light_pixel" dentro de un elemento con la clase "star"
  var bluePixels = document.querySelectorAll(".fork .light_pixel.blue");

  // Agrega un evento de mouseover a cada elemento seleccionado
  bluePixels.forEach(function (bluePixel) {
    bluePixel.addEventListener("mouseover", function () {
      // Cambia el color de fondo a azul para el elemento actual
      bluePixel.classList.remove("blue");
      bluePixel.classList.add("yellow");
    });

    // Agrega un evento de mouseout a cada elemento seleccionado
    bluePixel.addEventListener("mouseout", function () {
      // Cambia el color de fondo a amarillo para el elemento actual
      bluePixel.classList.remove("yellow");
      bluePixel.classList.add("blue");
    });
  });

  //--------COMMUTADOR ELECTRIC---------

  var interruptorGeneral = true;
  var allLights = document.querySelectorAll(
    ".light_pixel.yellow, .light_pixel.blue"
  );
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
      if (interruptorGeneral) {
        //window.alert("holi");
        interruptorGeneral = false;
        // Apaga todas las luces cambiando la clase a 'yellow'
        allLights.forEach(function (light) {
          light.style.visibility = "hidden";
        });
      } else {
        interruptorGeneral = true;
        allLights.forEach(function (light) {
          light.style.visibility = "visible";
        });
      }
    }
  });

  //--------NOMES ESTRELLA---------
  var interruptorEstrella = true;
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
      if (interruptorEstrella) {
        interruptorEstrella = false;
        // Apaga todas las luces cambiando la clase a 'yellow'
        starPixels.forEach(function (starPixel) {
          starPixel.style.visibility = "hidden";
        });
      } else {
        interruptorEstrella = true;
        // Apaga todas las luces cambiando la clase a 'yellow'
        starPixels.forEach(function (starPixel) {
          starPixel.style.visibility = "visible";
        });
      }
    }
  });

  // ONLOAD
});
