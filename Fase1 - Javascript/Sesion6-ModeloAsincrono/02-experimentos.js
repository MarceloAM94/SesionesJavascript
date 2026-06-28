//console.log("Inicio");

//setTimeout(() => console.log("Timeout 1 (3seg)"), 3000);
//setTimeout(() => console.log("Timeout 2 (1seg)"), 1000);
//setTimeout(() => console.log("Timeout 3 (2seg)"), 2000);

//console.log("Fin del codigo sincrono");

const promesaQueFalla = new Promise((resolve, reject) => {
    reject("Algo salio mal");
});

promesaQueFalla
    .then((resultado) => console.log("Exito: ", resultado))
    .catch((error) => console.log("Error: ", error));

const obtenerNumero = new Promise((resolve) => {
  resolve(5);
});

obtenerNumero
  .then((numero) => numero * 2)
  .then((resultado) => console.log("Resultado final:", resultado));