console.log(0 == false); // true -> compara solo el valor, convierte tipos
console.log("" == false); // true -> compara solo el valor, convierte tipos
console.log(null == undefined); // true -> compara solo el valor, convierte tipos
console.log(null === undefined); // false -> compara valor y tipo, no convierte tipos

let edad = 17;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Menor de edad"

let dia = 2;
switch (dia) {
    case 1: 
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes"); // Esto no afecta el flujo del switch, ya que el valor de 'dia' se evalúa al inicio
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}