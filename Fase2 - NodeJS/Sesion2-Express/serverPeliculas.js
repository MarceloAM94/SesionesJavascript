const peliculas = [
    { id: 1, titulo: "Inception", genero: "Ciencia ficción", año: 2010 },
    { id: 2, titulo: "The Dark Knight", genero: "Acción", año: 2008 },
    { id: 3, titulo: "Interstellar", genero: "Ciencia ficción", año: 2014 },
    { id: 4, titulo: "Parasite", genero: "Drama", año: 2019 }
];

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get('/peliculas', (req, res) => {
    res.json(peliculas);
});

app.get('/peliculas/buscar', (req, res) => {
    const generoBuscado = req.query.generoBuscado;

    if (!generoBuscado){
        return res.status(404).json({ error: "Proporcione un genero existente."})
    }
    const peliFiltrada = peliculas
        .filter((peli) => {return peli.genero.toLowerCase() === generoBuscado.toLowerCase()});
    
    res.json({peliFiltrada})
});

app.get('/peliculas/:id', (req, res) => {
    const id = Number(req.params.id);
    
    if (!peliculas[id] || id >= peliculas.length){
        return res.status(404).json({ error: "Id invalido o pelicula no encontrada" });
    };

    res.json(peliculas[id]);
});


