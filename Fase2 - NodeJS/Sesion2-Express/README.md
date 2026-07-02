# Fase 2 — Sesión 2: Express — Primer Servidor

## Objetivos
- Crear un servidor HTTP con Express
- Definir rutas con `GET`, parámetros de ruta y query params
- Responder con `res.json()`, `res.send()` y códigos de estado
- Buscar y filtrar datos en arrays de objetos
- Entender el orden de las rutas y por qué importa

## Teoría

### Estructura básica de un servidor Express

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
```

### Definir rutas

```js
app.get('/ruta', (req, res) => { ... });
app.post('/ruta', (req, res) => { ... });
app.put('/ruta/:id', (req, res) => { ... });
app.delete('/ruta/:id', (req, res) => { ... });
```

### Tipos de respuesta

```js
res.json({ dato: "valor" });                    // JSON — el más usado en APIs
res.send("texto plano");                         // texto
res.status(404).json({ error: "..." });          // con código de estado
```

### Leer datos del request

```js
req.params.id          // parámetro de ruta: /productos/:id
req.query.categoria    // query param: /productos?categoria=Tech
req.body.nombre        // body del request (necesita middleware)
```

### ⚠️ El orden de las rutas importa

```js
// ✅ Primero rutas específicas
app.get('/productos/buscar', ...);
app.get('/productos/precio', ...);

// ✅ Luego rutas dinámicas
app.get('/productos/:id', ...);
```

Si pones `/:id` primero, Express interpreta "buscar" y "precio" como ids.

### Buscar por id correctamente

```js
// ❌ Mal — busca por índice del array
res.json(productos[id]);

// ✅ Bien — busca por propiedad id del objeto
const producto = productos.find((p) => p.id === id);
```

### Convertir params a número

```js
const id = Number(req.params.id);
// req.params siempre llega como string — hay que convertirlo
```

## Archivos del proyecto

### `servidor.js` — Servidor base

Rutas de ejemplo para practicar los fundamentos:

| Ruta              | Método | Descripción                          |
|-------------------|--------|--------------------------------------|
| `/`               | GET    | Mensaje "Servidor funcionando"       |
| `/saludo`         | GET    | Mensaje "Hola desde Express"         |
| `/texto`          | GET    | Respuesta en texto plano             |
| `/estado`         | GET    | Respuesta con código 201             |
| `/error`          | GET    | Respuesta con código 404             |
| `/usuario/:id`    | GET    | Parámetro de ruta (req.params)       |
| `/buscar?nombre=` | GET    | Query param (req.query)              |

### `serverProductos.js` — CRUD de productos

Array de productos con las siguientes rutas:

| Ruta                         | Descripción                                    |
|------------------------------|------------------------------------------------|
| `GET /productos`             | Listar todos los productos                     |
| `GET /productos/buscar?categoria=` | Filtrar por categoría (case-insensitive) |
| `GET /productos/precio`      | Ordenar productos por precio ascendente        |
| `GET /productos/:id`         | Buscar producto por id con `find()` ✅         |

Usa `Number(req.params.id)` y `find()` para buscar correctamente.

### `serverPeliculas.js` — Consulta de películas

Array de películas con:

| Ruta                           | Descripción                                     |
|--------------------------------|-------------------------------------------------|
| `GET /peliculas`               | Listar todas las películas                      |
| `GET /peliculas/buscar?generoBuscado=` | Filtrar por género (case-insensitive)    |
| `GET /peliculas/:id`           | Buscar película — **usa índice del array** ❌   |

⚠️ `serverPeliculas.js` usa `peliculas[id]` en lugar de `find()`, lo cual busca por índice y no por la propiedad `id`. Es el error que se menciona en la teoría.

### `Puebas Express/` — Colecciones de Thunder Client

Archivos `.yml` con pruebas de las rutas para ejecutar desde VS Code.

## Buenas prácticas / Notas

- Las rutas específicas (`/buscar`, `/precio`) van **antes** que las rutas dinámicas (`/:id`).
- Siempre convertir `req.params.id` a número con `Number()`.
- Usar `find()` en lugar de acceso por índice para buscar por id.
- Usar `res.status(codigo).json(...)` para respuestas con error.
- Validar la existencia del dato antes de responder (`if (!producto) return res.status(404)...`).
- Express 5+ se instala con `npm install express@latest`.
- Para probar las rutas: Thunder Client (VS Code), Postman o el navegador para GET.
