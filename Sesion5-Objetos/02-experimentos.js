const original = {a: 1, b: 2};
const copia = {...original, b: 999};
console.log(original);
console.log(copia);

console.log("=========================");

const usuario = {
    nombre: "Marcelo",
    direccion:{
        ciudad: "Lima",
        pais: "Peru"
    }
};
console.log(usuario.direccion.ciudad);

console.log("=========================");

const producto = {nombre: "Mouse", precio: 25};
const {nombre: nombreProducto} = producto;
console.log(nombreProducto);

console.log("=========================");

const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 25}
];

const nombres = productos.map((p) => p.nnombre);
console.log(nombres);

const conIGV = productos.map((p) => ({...producto, precio: p.precio * 1.18}));
console.log(conIGV);