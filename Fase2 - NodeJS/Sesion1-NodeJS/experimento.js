const fs = require('fs');
const { sumar, restar } = require('./matematicas');

// Escribir un archivo
fs.writeFileSync('prueba.txt', 'Hola desde Node.js');

// Leer el archivo
const contenido = fs.readFileSync('prueba.txt', 'utf8');
console.log(contenido)

fs.readFile('prueba.txt', 'utf8', (error, contenido) => {
    if (error) {
        console.log("Error: ", error.message);
        return;
    }
    console.log("Contenido: ", contenido);
});

console.log("Esta linea se ejecuta antes que el readFile");

console.log(sumar(10, 5));
console.log(restar(10, 5));
