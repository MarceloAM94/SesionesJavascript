const numeros = [1, 2, 3, 4, 5];

// forEach - solo recorre
numeros.forEach((n) => console.log(n));

// map - transforma y devuelve array nuevo
const dobles = numeros.map((n) => n * 2);
console.log(dobles);

// filter - filtra segun condicion 
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);

// find - devuelve el primero que cumple
const primerMayorA3 = numeros.find((n) => n > 3);
console.log(primerMayorA3);
