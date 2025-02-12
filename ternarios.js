"use strict";
//-------------------------------EJERCICIOS 1.2 OPERADOR TERNARIO---------------------------------------

//----------------------------------nivel 1-------------------------------
//ejercicio 1
//Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir'.

const potConduir = () => {
  let num = parseInt(document.getElementById("num").value);
  let response;
  console.log(num);
  {
    num >= 18
      ? (response = "puedes conducir")
      : (response = "no puedes conducir");
  }
  document.getElementById("response").innerHTML = response;
  console.log(response);
};

//ejercicio 2
//Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

const calcula = () => {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result;

  {
    num1 > num2
      ? (result = `${num1} is bigger`)
      : (result = `${num2} is bigger`);
  }
  {
    num1 === num2 ? (result = `${num1} & ${num2} are same`) : null;
  }
  document.getElementById("result").innerHTML = result;
  console.log(result);
};

//----------------------------------------nivel 2------------------------------------------------
//ejercicio 3
//Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.

// Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.
const posiNeg = (numero) => {
  return numero > 0 ? "positive" : numero < 0 ? "negative" : zero;
};
const maximo = (a, b, c) => {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
};
const compare = () => {
  let a = parseInt(document.getElementById("num-a").value);
  let b = parseInt(document.getElementById("num-b").value);
  let c = parseInt(document.getElementById("num-c").value);
  let maxNum = maximo(a, b, c);
  let determinaValorA = posiNeg(a);
  let determinaValorB = posiNeg(b);
  let determinaValorC = posiNeg(c);
  document.getElementById(
    "first-answer"
  ).innerHTML = `number  ${a} is ${determinaValorA}, number  ${b} is ${determinaValorB}, number  ${c} is ${determinaValorC}, `;

  document.getElementById(
    "second-answer"
  ).innerHTML = ` max number is ${maxNum}`;
};
//--------------------------------------nivel 3---------------------------
//ejercicio 4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

const numArr = [1, 2, 3, 4, 5];
const parImpar = () => {
  for (let i = 0; i < numArr.length; i++) {
    numArr[i] % 2 === 0
      ? console.log(numArr[i] + " " + "espar")
      : console.log(numArr[i] + " " + "esimpar");
  }
};
parImpar();
