"use strict";
//-------------------------------EJERCICIOS 1.3 CALLBACKS-----------------------------------------------
//-----------------------------------nivel 1------------------------------
//ejercicio 1
//Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
const processar = (nombre, callback) => {
  callback(nombre);
};
const nombre = (nombre) => {
  console.log(nombre);
};
processar("pepe", nombre);

//ejercicio 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

const calculator = () => {
  let num1a = parseInt(document.getElementById("num1a").value);
  let num2b = parseInt(document.getElementById("num2b").value);
  let response = suma(num1a, num2b);
  document.getElementById("resulta").innerHTML = response;
};

const suma = (num1a, num2b) => {
  let response = num1a + num2b;
  return response;
};

//---------------------------------------------------------nivel 2----------------------------
//ejercicio 3
//Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

const esperarSaludar = (nombre) => {
  console.log(`hola ${nombre} en 2 segundos`);
};

setTimeout(esperarSaludar, 2000, "Paco");

//ejercicio 4
//Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
const procesarElements = (array, callbackFunct) => {
  for (let i = 0; i < array.length; i++) {
    callbackFunct(array[i]);
  }
};
const arrayElements = [1, 2, 3, 4];
const enumera = (num) => {
  console.log(`.- ${num} `);
};
procesarElements(arrayElements, enumera);

//------------------------------------------------nivel 3----------------------------------
//ejercicio 5
//Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

let characters = "paco manolo";

function myDisplayer(something) {
  console.log(something);
}

function processarCadena(abc, myCallback) {
  let capitalizeCharacters = abc.toUpperCase();
  myCallback(capitalizeCharacters);
}

processarCadena(characters, myDisplayer);
