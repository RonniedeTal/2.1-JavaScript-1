"use strict";
//--------------------------------EJERCICIOS 1.1 ARROW FUNCTIONS---------------
//-------------------------------------level 1------------------------------

//ejercicio 1
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//ejercicio 2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100
const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};
console.log(randomNumber());

// //ejercicio3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet = () => {
    console.log(`hi, ${this.name}`);
  };
}
let personName = new Person("Paco");
personName.greet();

//------------------------------------level 2------------------------------------

//ejercicio 4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
const numbersArr = [1, 2, 3, 4, 5];

const printNumbers = () => {
  let response = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    response = numbersArr[i];
    console.log(response);
  }
};
printNumbers();
//--------------------------------LEVEL 3----------------------

//ejercicio 5
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
const message = () => {
  setTimeout(() => {
    console.log("hola en 3 segundos");
  }, "3000");
};
message();
