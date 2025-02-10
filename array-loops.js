"use strict";
//------------------array loops--------------
//------------------------nivel 1------------

//ejercicio 1
//forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((eachNom) => {
  console.log(eachNom);
});

//ejercicio 2
//for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];
let nomArr = "";
for (nomArr of noms) {
  console.log(nomArr);
}

//ejercicio 3
//filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

let numeros = [1, 2, 3, 4, 5, 6];

numeros.filter((eachNumeros) => {
  if (eachNumeros % 2 == 0) {
    console.log(eachNumeros);
  }
});

//--------------------------------------------nivel 2-----------------------------
//ejercicio 4
//for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.
let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

for (const objGiven in obj) {
  console.log(objGiven + ":" + obj[objGiven]);
}

//ejercicio 5
//for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

for (const numero of numeros) {
  if (numero === 5) {
    break;
  }
  console.log(numero);
}

//-----------------------------------nivel 3----------------------
//ejercicio 6
//for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']
let answer = "";
for (const indexNom of noms) {
  console.log(`${noms.indexOf(indexNom)}.-${indexNom}`);
}
