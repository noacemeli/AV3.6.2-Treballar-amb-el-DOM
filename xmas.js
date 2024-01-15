// Aquesta funció s'executa quan el document HTML ha carregat completament
document.addEventListener("DOMContentLoaded", function () {
  //--------MOUSEOVER ESTRELLA----------

  // Selecciona tots els elements amb la classe "light_pixel" dins d'un element amb la classe "star"
  var starPixels = document.querySelectorAll(".star .light_pixel");

  // Afegeix un esdeveniment de mouseover a cada element seleccionat
  starPixels.forEach(function (starPixel) {
    starPixel.addEventListener("mouseover", function () {
      // Canvia el color a blau per l'element amb mouseover
      starPixel.classList.remove("yellow");
      starPixel.classList.add("blue");

      // Canvia el color a blau per a la resta d'elements d l'estrella
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

  //--------MOUSEOVER LLUMS GROGUES----------
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

  //--------MOUSEOVER LLUMS BLAVES----------
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

  //--------INTERRUPTOR ELECTRIC GENERAL--------

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

  //--------INTERRUPTOR ESTRELLA---------
  var interruptorEstrella = true;
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
      if (interruptorGeneral) {
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
    }
  });

  //--------INTERRUPTOR BOMBETES---------

  var bombetes = document.querySelectorAll(
    ".fork .light_pixel.yellow, .fork .light_pixel.blue"
  );
  var interruptorBombetes = true;
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "l" || event.key === "L") {
      if (interruptorGeneral) {
        if (interruptorBombetes) {
          interruptorBombetes = false;
          // Apaga todas las luces cambiando la clase a 'yellow'
          bombetes.forEach(function (bombeta) {
            bombeta.style.visibility = "hidden";
          });
        } else {
          interruptorBombetes = true;
          // Apaga todas las luces cambiando la clase a 'yellow'
          bombetes.forEach(function (bombeta) {
            bombeta.style.visibility = "visible";
          });
        }
      }
    }
  });

  //--------GARLANDES---------
  var redPixels = document.querySelectorAll(".fork .light_pixel");
  var garlandes = [
    8, 15, 23, 24, 25, 26, 44, 53, 62, 63, 68, 72, 73, 82, 83, 84, 94, 107, 110,
    121, 127, 128, 129, 135, 136, 147, 148, 149, 150, 151,
  ];
  console.log(redPixels);

  document.body.addEventListener("keydown", function (event) {
    if (event.key === "g" || event.key === "G") {
      redPixels.forEach(function (redPixel, i) {
        if (garlandes.includes(i)) {
          redPixel.classList.remove("green");
          redPixel.classList.add("red");
        }
      });
    }
  });
  // ONLOAD
});
