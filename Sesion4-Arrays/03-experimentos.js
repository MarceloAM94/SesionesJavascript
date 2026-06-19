const numeros = [1, 2, 3];

const doblees = numeros.map((n) => n * 2);
console.log(numeros); // numeros original no cambia
console.log(doblees);

const resultado = numeros.find((n) => n > 100);
console.log(resultado); // undefined, no encuentra ninguno mayor a 100

const numeros2 = [1, 2, 3, 4, 5, 6];
const resultado2 = numeros2
    .filter((n) => n % 2 === 0)
    .map((n) => n * 10);
console.log(resultado2); // [20, 40, 60], filtra los pares y luego los multiplica por 10

const suma = numeros2.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma); // 21, suma todos los numeros del array
