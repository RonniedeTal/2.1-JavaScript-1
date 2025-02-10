"use strict";
//------------------------array transformation -------------------------
//---------------------------------nivel 1------------------------------
//ejercicio 1
//Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numArr1 = [1, 2, 3, 4];

let solve = numArr1.map((eachNumArr) => {
  return eachNumArr * eachNumArr;
});
console.log(solve);
//ejercicio 2
//Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.
let filtered = numArr1.filter((eachNumArr) => {
  if (eachNumArr % 2 == 0) {
    return eachNumArr;
  }
});
console.log(filtered);
//ejercicio 3
//Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.
const numArr2 = [1, 10, 8, 11];
let found = numArr2.find((eachNumArr2) => {
  if (eachNumArr2 > 10) {
    return eachNumArr2;
  }
});
console.log(found);

//ejercicio 4
//Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.
const numArr3 = [13, 7, 8, 21];
let sumReduce = numArr3.reduce((acc, eachNumArr3) => {
  return acc + eachNumArr3;
});
console.log(sumReduce);

//------------------------------------------nivel 2--------------------------------
//ejercicio 5
//Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const numArr4 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const mixedFunctions = (numArr4) =>
  numArr4
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, value) => acc + value);
console.log(mixedFunctions(numArr4));

//----------------------------------------------nivel 3--------------------------------
//ejercicio 6
//Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numArr5 = [11, 12, 13, 14];
const everyOption = (numArr5) => numArr5.every((num) => num > 10);

console.log(everyOption(numArr5));

const someOption = (numArr5) => numArr5.some((num) => num > 10);
console.log(someOption(numArr5));
