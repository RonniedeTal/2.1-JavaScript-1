"use strict";
//-------------------1.4 rest & Spread Operators---------

//--------------------------nivel 1----------------------

//ejercicio 1
//Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//ejercicio 2
//Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

const sumar = (...num) => {
  let sumas = 0;
  for (let i = 0; i < num.length; i++) {
    sumas += num[i];
  }
  return sumas;
};
console.log(sumar(1, 2, 3));

//---------------------nivel 2------------------------------
//ejercicio 3
//Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const obj1 = {
  name: "paco",
  surName: "perez",
};
console.log(obj1);
const obj2 = { ...obj1, surName: "peras", age: 32 };
console.log(obj2);

//ejercicio 4
//Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const myArr = ["perro", "gato", "buey", "leon"];
const [primer, segundo, ...demas] = myArr;
let domesticos = [primer, segundo];
console.log(domesticos);
let salvajes = [...demas];
console.log(salvajes);

//-------------------nivel 3----------------------------------------
//ejercicio 5
//Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const myFunction = (a, b, c) => {
  console.log(a, b, c);
};
const array3Elements = ["amarillo", "azul", "rojo"];
myFunction(...array3Elements);
//ejercicio 6
//Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const objA = {
  name: "paco",
  surName: "megomas",
};
const objB = {
  age: 42,
  bitcoin: "false",
};
const objC = {
  ...objA,
  ...objB,
};
console.log(objC);
