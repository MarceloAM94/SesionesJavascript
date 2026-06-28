// Modulo nativo de node.js - no necesita instalarse
const os = require('os');
const path = require('path');

// Informacion del sistema
console.log("Sistema operativo: ", os.platform());
console.log("Memoria total (GB): ", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2));
console.log("CPUs: ", os.cpus().length);

// Manejo de rutas
const rutaCompleta = path.join(__dirname, "archivos", "datos.txt");
console.log("Ruta construida", rutaCompleta);
console.log("Extension: ", path.extname("datos.txt"));
console.log("Nombre sin extension: ", path.basename("datos.txt", ".txt"));