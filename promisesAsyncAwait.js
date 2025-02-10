"use strict";
//----------------------Promises asyncAwait----------------
//nivel 1
//ejercicio 1
//Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promise = new Promise((expected) => {
  setTimeout(() => {
    expected("Hola, món");
    //  console.log("Hola, món");
  }, 2000);
});
//ejercicio 2
//Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
promise.then((output) => {
  console.log(output);
});

//ejercicio 3
//Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

const solvePromise = (word) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (word == "hola") {
        resolve(`'${word}' es la palabra correcta`);
      } else {
        reject(new Error("la palabra no es 'hola'"));
      }
    }, 2000);
  });
};
solvePromise("hola")
  .then((word) => console.log(word))
  .catch((error) => console.log(error.message));

//ejercicio 4
//Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

const promise1 = new Promise((expected) => {
  setTimeout(() => {
    expected("Hola, món");
  }, 2000);
});

async function fetching() {
  const promises = await promise1;
  console.log(promises);
}

fetching();

//-------------------------------nivel 2-------------
//ejercicio 5
//Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const promise2 = new Promise((expected) => {
  setTimeout(() => {
    expected("Hola, món");
  }, 2000);
});

const fetching2 = async () => {
  try {
    const promises = await promise2;
    console.log(promises);
  } catch (error) {
    console.log("errorMessage: ups");
  }
};

fetching2();

//-------------------------nivel 3-------------------
//ejercicio 6
//Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("primera promesa hecha");
  }, 2000);
});

const segundaPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("segunda promesa hecha");
  }, 3000);
});
const fetching3 = async () => {
  try {
    const promesas = await Promise.all([primeraPromesa, segundaPromesa]);
    console.log(promesas);
  } catch (error) {
    console.log(error);
  }
};
fetching3();
