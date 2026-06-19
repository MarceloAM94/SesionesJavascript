// Comparacion laxa vs escrita
console.log(5 == "5"); // true -> compara solo el valor, convierte tipos
console.log(5 === "5"); // false -> compara valor y tipo, no convierte tipos

// Operadores logicos
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT

// Estructura condicional basica
let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
