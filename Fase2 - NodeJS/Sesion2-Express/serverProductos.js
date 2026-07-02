const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Tech" },
    { id: 2, nombre: "Mouse", precio: 25, categoria: "Tech" },
    { id: 3, nombre: "Silla", precio: 350, categoria: "Muebles" },
    { id: 4, nombre: "Escritorio", precio: 500, categoria: "Muebles" }
];

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/productos', (req, res) => {
    res.json(productos);
})

app.get('/productos/buscar', (req, res) => {
    const categoria = req.query.categoria;

    if (!categoria){
        return res.status(404).json({error: "Ingrese una categoria valida"});
    }

    const categoriaFiltrada = productos
    .filter((prod) => {
        return prod.categoria.toLowerCase() === categoria.toLowerCase()
    });

    res.json({categoriaFiltrada});
});

app.get('/productos/precio', (req, res) => {
    const preciosOrdenados = productos
        .sort((a, b) => a.precio - b.precio);

    res.json({preciosOrdenados});
});

app.get('/productos/:id', (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find((p) => p.id === id);

    if (!producto){
        return res.status(404).json({error: "Producto no encontrado"});
    }

    res.json(producto);
});