// Las 3 formas de declarar varibles
var nombre = "Carlos";  //Antigua, evitar
let edad = 25;          // para valores que cambian
const pais = "Peru"     // para valores fijos

console.log(nombre);
console.log(edad);
console.log(pais);

//JS detecta el tipo automáticamente
console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof pais);

const pais2 = "Peru";
//pais2 = "Colombia"; // Error, no se puede reasignar una constante
console.log(pais2);

let precio = 9.99;
console.log(typeof precio);

let resultado = 25 + "años";
console.log(resultado); // "25años"
console.log(typeof resultado); // "string"

let a = null;
let b;
console.log(typeof a); // "object" (esto es un error histórico de JavaScript)
console.log(typeof b); // "undefined"