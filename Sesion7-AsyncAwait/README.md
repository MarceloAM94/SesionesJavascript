# Sesión 7: Async / Await

## Objetivos
- Entender la sintaxis de `async` y `await`
- Usar `try/catch` para manejar errores en funciones asíncronas
- Ejecutar operaciones secuenciales con `await`
- Ejecutar operaciones en paralelo con `Promise.all`
- Evitar errores comunes

## Teoría

### Sintaxis básica

`async` se pone antes de una función para indicar que es asíncrona. `await` pausa la ejecución dentro de esa función hasta que la Promesa se resuelva:

```js
async function miFuncion() {
    const resultado = await miPromesa;
    console.log(resultado);
}

// También con arrow function
const miFuncion = async () => {
    const resultado = await miPromesa;
    console.log(resultado);
};
```

### Reglas clave

- `async` va siempre antes de la función.
- `await` solo se puede usar dentro de una función `async`.
- Una función `async` **siempre retorna una Promesa**, aunque no lo veas explícito.
- `await` pausa la ejecución **solo dentro de esa función** — el código de afuera sigue corriendo normal.

```js
console.log("Inicio");

async function ejemplo() {
    const valor = await new Promise((resolve) => {
        setTimeout(() => resolve("Listo"), 2000);
    });
    console.log(valor);
}

ejemplo();
console.log("Fin del síncrono");
// "Inicio"
// "Fin del síncrono"
// (2 segundos después) "Listo"
```

### Manejo de errores con `try/catch`

Para atrapar errores en una función `async` se usa `try/catch` en lugar de `.catch()`:

```js
async function miFuncion() {
    try {
        const resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

El parámetro del `catch` es el valor que se pasó al `reject()` de la Promesa.

### Operaciones secuenciales

Cada `await` espera a que el anterior termine antes de continuar:

```js
async function secuencial() {
    const usuario = await obtenerUsuario(1);        // espera aquí
    const pedidos = await obtenerPedidos(usuario.id); // luego aquí
    console.log(pedidos.length);
}
```

### Operaciones en paralelo con `Promise.all`

Cuando las operaciones son independientes, podés ejecutarlas en paralelo para que sean más rápidas:

```js
// ❌ Secuencial — lento (espera una por una)
const p1 = await obtenerProducto(1);
const p2 = await obtenerProducto(2);

// ✅ Paralelo — rápido (todas al mismo tiempo)
const [p1, p2] = await Promise.all([
    obtenerProducto(1),
    obtenerProducto(2)
]);
```

⚠️ Si **una** de las promesas falla, `Promise.all` falla completa.

### ⚠️ Error común

```js
// ❌ length es propiedad, no método
console.log(array.length());

// ✅ correcto
console.log(array.length);
```

## Buenas prácticas / Notas

- `async/await` es más legible que `.then()` encadenado — preferilo para código nuevo.
- Siempre envolver los `await` en `try/catch` para manejar errores.
- Usar `Promise.all` para operaciones independientes (no relacionadas entre sí).
- No abusar de `Promise.all` si las operaciones dependen unas de otras.
- Recordar que `length` es propiedad, no función — no lleva paréntesis.
