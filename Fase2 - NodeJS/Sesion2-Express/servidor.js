const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ mensaje: "Servidor funcionando"});
});

app.get('/saludo', (req, res) => {
    res.json({ mensaje: "Hola desde Express"});
});

app.get('/texto', (req, res) => {
    res.send('Esto es en texto plano');
});

app.get('/estado', (req, res) => {
    res.status(201).json({ mensaje: "Creado correctamente"});
});

app.get('/error', (req, res) => {
    res.status(404).json({ error: "No encontrado"});
});

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Buscando usuario con id ${id}`});
});

app.get('/buscar', (req, res) => {
    const nombre = req.query.nombre;
    res.json({ buscando: nombre});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});