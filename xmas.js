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

    // Repetim pero amb mouseout
    starPixel.addEventListener("mouseout", function () {
      starPixel.classList.remove("blue");
      starPixel.classList.add("yellow");

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
  // Selecciona les llums grogues
  var yellowPixels = document.querySelectorAll(".fork .light_pixel.yellow");

  // Afegeix un mouseover
  yellowPixels.forEach(function (yellowPixel) {
    yellowPixel.addEventListener("mouseover", function () {
      // Canvia el color
      yellowPixel.classList.remove("yellow");
      yellowPixel.classList.add("blue");
    });

    // Igual pero amb un mouseout
    yellowPixel.addEventListener("mouseout", function () {
      yellowPixel.classList.remove("blue");
      yellowPixel.classList.add("yellow");
    });
  });

  //--------MOUSEOVER LLUMS BLAVES----------
  // Selecciona les llums blaves
  var bluePixels = document.querySelectorAll(".fork .light_pixel.blue");

  // Afegeix mouseover
  bluePixels.forEach(function (bluePixel) {
    bluePixel.addEventListener("mouseover", function () {
      // Canvia el color canviat la classe
      bluePixel.classList.remove("blue");
      bluePixel.classList.add("yellow");
    });

    // Igual pero amb mouseout
    bluePixel.addEventListener("mouseout", function () {
      bluePixel.classList.remove("yellow");
      bluePixel.classList.add("blue");
    });
  });

  //--------INTERRUPTOR ELECTRIC GENERAL--------

  //Crea un boolean per al interruptor i selecciona TOTES les llums
  var interruptorGeneral = true;
  var allLights = document.querySelectorAll(
    ".light_pixel.yellow, .light_pixel.blue"
  );
  //Afegeix un keydown per la lletra q
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
      // Si l'interruptor esta ences
      if (interruptorGeneral) {
        //window.alert("holi");

        //Apaga l'interruptor
        interruptorGeneral = false;
        // Apaga totes les llums canvian la visibilitat
        allLights.forEach(function (light) {
          light.style.visibility = "hidden";
        });

        //Si l'interruptor ja esta apagat
      } else {
        //Encen l'interruptor
        interruptorGeneral = true;
        //Encen TOTS els llums
        allLights.forEach(function (light) {
          light.style.visibility = "visible";
        });
      }
    }
  });

  //--------INTERRUPTOR ESTRELLA---------
  var interruptorEstrella = true;
  // Keydown per la lletra e
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "e" || event.key === "E") {
      //Si l'interruptor general esta ences
      if (interruptorGeneral) {
        // Y l'interruptor de l'estrella tambe esta ences
        if (interruptorEstrella) {
          //Apaga l'interruptor
          interruptorEstrella = false;
          // Apaga le sllums de l'estrella
          starPixels.forEach(function (starPixel) {
            starPixel.style.visibility = "hidden";
          });
        } else {
          // Encen l'interruptor
          interruptorEstrella = true;
          // Encen les llums de l'estrella
          starPixels.forEach(function (starPixel) {
            starPixel.style.visibility = "visible";
          });
        }
      }
    }
  });

  //--------INTERRUPTOR BOMBETES---------

  // Agafa totes les llums de l'arbre tant blaves com grogues
  var bombetes = document.querySelectorAll(
    ".fork .light_pixel.yellow, .fork .light_pixel.blue"
  );
  var interruptorBombetes = true;
  // Keydown per la lletra l
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "l" || event.key === "L") {
      //Procedim igual que per l'estrella
      if (interruptorGeneral) {
        if (interruptorBombetes) {
          interruptorBombetes = false;
          bombetes.forEach(function (bombeta) {
            bombeta.style.visibility = "hidden";
          });
        } else {
          interruptorBombetes = true;
          bombetes.forEach(function (bombeta) {
            bombeta.style.visibility = "visible";
          });
        }
      }
    }
  });

  //--------GARLANDES---------
  // Agafa tots el pixels del cos de l'arbre
  var redPixels = document.querySelectorAll(".fork .light_pixel");
  //Posiciones de la garlanda
  var garlandes = [
    8, 15, 23, 24, 25, 26, 44, 53, 62, 63, 68, 72, 73, 82, 83, 84, 94, 107, 110,
    121, 127, 128, 129, 135, 136, 147, 148, 149, 150, 151,
  ];
  // console.log(redPixels);
  // Keydown per la lletra g
  document.body.addEventListener("keydown", function (event) {
    if (event.key === "g" || event.key === "G") {
      //Recorrem amb un for each
      redPixels.forEach(function (redPixel, i) {
        //Si la posicio coincideix amb la de la garlanda la pintem de vermell
        if (garlandes.includes(i)) {
          redPixel.classList.remove("green");
          redPixel.classList.add("red");
        }
      });
    }
  });

  //--------REGALS---------
  // Selecciona los contenedores "pot"
  var pots = document.querySelectorAll(".pot");

  //Posicions dels regals
  var regals = [
    7, 8, 9, 11, 12, 21, 26, 28, 29, 30, 32, 33, 42, 43, 44, 46, 47, 48,
  ];

  //Posicions dels espais entre els regals

  var hiddenPixels = [10, 13, 14, 20, 22, 23, 24, 25, 27, 31, 34, 35, 41, 45];
  // Keydown per la lletra r
  document.body.addEventListener("keydown", keydownHandler);
  function keydownHandler(event) {
    if (event.key === "r" || event.key === "R") {
      // Ignorem el primer .pot
      for (var i = 1; i < 3; i++) {
        for (var j = 0; j < 16; j++) {
          // Creem els divs que despres canviarem els colors
          var newLightPixel = document.createElement("div");
          newLightPixel.className = "light_pixel brown";
          // Agregar el nuevo elemento al div con la clase "pot"
          pots[i].appendChild(newLightPixel);
        }
      }

      // Selecciona tots els pixels del pot
      var regalPixels = document.querySelectorAll(".pot .light_pixel");
      regalPixels.forEach(function (regalPixel, i) {
        // Si la posicio coincideix amb la dels regals la pintem de vermell
        if (regals.includes(i)) {
          regalPixel.classList.remove("brown");
          regalPixel.classList.add("red");
        } else if (hiddenPixels.includes(i)) {
          // Si la posicio coincideix amb la dels respais canvia l'estil a hidden
          regalPixel.style.visibility = "hidden";
        }
      });

      // Eliminar el event listener
      document.body.removeEventListener("keydown", keydownHandler);
    }
  }

  // FI ONLOAD
});
