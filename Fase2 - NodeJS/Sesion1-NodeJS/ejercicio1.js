const { agregarProducto, obtenerProductos, buscarProducto, actualizarPrecio } = require('./productos');

agregarProducto("leche", 4.50);
agregarProducto("gaseosa", 7);
agregarProducto("fideos", 3.20);

console.log(obtenerProductos());

console.log(buscarProducto("fideos"));

console.log(actualizarPrecio("gaseosa", 6.50));

console.log(obtenerProductos());