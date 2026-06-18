const nombre = "Laptop";
const precio = 1200;
const disponible = true;
let categoria = null;

console.log("=== FICHA DE PRODUCTO ===");
console.log(`Nombre: ${nombre}`);
console.log(`Precio: S/.${precio}`);
console.log(`Disponible: ${disponible}`);
if (categoria === null) {
    console.log("Categoria: Sin categoria");
}else {
    console.log(`Categoria: ${categoria}`);
}
