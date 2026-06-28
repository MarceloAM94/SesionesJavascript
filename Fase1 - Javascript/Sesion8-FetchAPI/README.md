# Sesión 8: Fetch API

## Objetivos
- Hacer peticiones HTTP con `fetch`
- Usar `async/await` para consumir APIs
- Entender por qué se necesitan dos `await`
- Verificar errores HTTP con `respuesta.ok`
- Procesar datos con `map` y `filter`
- Conocer los códigos de estado más comunes

## Teoría

### Sintaxis básica con async/await

```js
async function obtenerDatos() {
    try {
        const respuesta = await fetch("https://api.ejemplo.com/datos");

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

### ¿Por qué hay dos `await`?

- `await fetch(...)` → espera la **respuesta del servidor** (cabeceras + código de estado).
- `await respuesta.json()` → lee y convierte el **cuerpo** de JSON a objeto JS.

### ⚠️ Orden correcto — siempre verificar `ok` antes de leer el body

```js
const respuesta = await fetch("...");

if (!respuesta.ok) {                        // 1. primero verificar
    throw new Error(`Error HTTP: ${respuesta.status}`);
}

const datos = await respuesta.json();       // 2. luego leer
```

### Comportamiento especial de `fetch` con errores

`fetch` **NO lanza error automáticamente** con códigos 4xx o 5xx. Solo lanza error si hay problema de red (sin conexión, URL inválida). Por eso **siempre** hay que verificar `respuesta.ok` manualmente.

### Códigos de estado HTTP más comunes

| Código | Significado                |
|--------|----------------------------|
| 200    | Éxito                      |
| 201    | Creado correctamente       |
| 400    | Error del cliente          |
| 404    | No encontrado              |
| 500    | Error del servidor         |

### Combinar fetch con map/filter

```js
const datos = await respuesta.json();

const filtrado = datos
    .filter((item) => item.activo === true)
    .map((item) => item.nombre);
```

### API pública para practicar

**https://jsonplaceholder.typicode.com** — endpoints útiles:

- `/users` — 10 usuarios
- `/posts` — 100 posts
- `/todos` — 200 tareas

## Buenas prácticas / Notas

- Siempre verificar `respuesta.ok` antes de leer el body.
- Usar `try/catch` para atrapar errores de red.
- No olvidar el `await` antes de `respuesta.json()` — es una Promesa también.
- `fetch` solo rechaza la Promesa si hay error de red, no por códigos HTTP 4xx/5xx.
- Usar `jsonplaceholder.typicode.com` para practicar sin necesidad de backend propio.
