let productos = [];

function agregarProducto(nombre, precio){
    const nuevoProd = {nombre, precio, disponible: true};
    productos.push(nuevoProd);
}

function obtenerProductos() {
    return productos;
};

function buscarProducto(nombre) {
    const indice = productos.findIndex((p) => p.nombre === nombre);
    return productos[indice];
}

function actualizarPrecio(nombre, nuevoPrecio) {
    const indice = productos.findIndex((p) => p.nombre === nombre);
    
    if (indice != -1){
        productos[indice].precio = nuevoPrecio;
        return productos[indice];
    } else {
        return "Producto no encontrado";
    };
};

module.exports = { agregarProducto, obtenerProductos, buscarProducto, actualizarPrecio };