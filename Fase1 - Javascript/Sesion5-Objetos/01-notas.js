const producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};

// Acceder a propiedades del objeto
console.log(producto.nombre);
console.log(producto["precio"]);

// Modificar y agregar
producto.precio = 999.9;
producto.categoria = "Tech";
console.log(producto);

// Destructuring
const {nombre, precio} = producto;
console.log(nombre, precio);

// Spread
const productoActualizado = {...producto, precio: 800};
console.log(productoActualizado);