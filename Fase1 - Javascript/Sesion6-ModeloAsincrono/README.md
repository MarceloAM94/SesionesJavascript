# Sesión 6: Modelo Asíncrono — Callbacks y Promesas

## Objetivos
- Entender por qué JavaScript necesita ser asíncrono
- Comprender el Event Loop y el orden de ejecución
- Usar `setTimeout` como ejemplo de callback
- Crear y consumir Promesas con `then` y `catch`
- Encadenar `.then()` correctamente
- Manejar errores con `.catch()`

## Teoría

### ¿Por qué JS es asíncrono?

JavaScript es **single-threaded** (un solo hilo). En vez de bloquearse esperando operaciones lentas (peticiones HTTP, lectura de archivos, consultas a BD), las delega y sigue ejecutando el resto del código. El **Event Loop** es quien gestiona esto.

### Regla de oro del Event Loop

JS termina de ejecutar **todo el código síncrono primero**, sin importar cuán corto sea el tiempo de espera de un callback (incluso con `setTimeout(fn, 0)`). Los callbacks/promesas pendientes esperan en una fila hasta que no quede código síncrono corriendo.

```js
console.log("1. Inicio");

setTimeout(() => {
    console.log("3. Esto llega después");
}, 2000);

console.log("2. Esto se ejecuta antes del setTimeout");
// 1. Inicio
// 2. Esto se ejecuta antes del setTimeout
// 3. Esto llega después
```

### Callbacks — forma antigua

Un callback es una función que se pasa como argumento y se ejecuta después de que ocurre algo:

```js
setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
}, 2000);
```

### Promesa — estructura básica

Una Promise representa un valor que estará disponible en el futuro (o no). Tiene 3 estados: **pending**, **fulfilled**, **rejected**.

```js
const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve("La promesa se cumplió");
    } else {
        reject("La promesa falló");
    }
});

promesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
```

- `resolve` → la promesa se cumple (pasa a `fulfilled`).
- `reject` → la promesa falla (pasa a `rejected`).
- `.then()` → se ejecuta si la promesa se cumplió.
- `.catch()` → se ejecuta si la promesa falló.

### Encadenar `.then()`

Cada `.then()` recibe el valor que retornó el anterior:

```js
const obtenerNumero = new Promise((resolve) => {
    resolve(5);
});

obtenerNumero
    .then((numero) => numero * 2)       // 10
    .then((resultado) => console.log("Resultado final:", resultado));  // 10
```

### ⚠️ Orden de `.then()` y `.catch()`

El `.catch()` atrapa errores solo de los `.then()` que están **arriba** de él:

```js
// El .then(fn3) se ejecuta SIEMPRE (haya éxito o error)
promesa.then(fn1).catch(fn2).then(fn3);

// El .then(fn3) se ejecuta SOLO si hubo éxito
promesa.then(fn1).then(fn3).catch(fn2);
```

### Múltiples promesas en paralelo

Si no encadenas una promesa dentro de otra, corren **en paralelo**, no esperan una a la otra:

```js
setTimeout(() => console.log("Timeout 1 (3seg)"), 3000);
setTimeout(() => console.log("Timeout 2 (1seg)"), 1000);
setTimeout(() => console.log("Timeout 3 (2seg)"), 2000);
// Orden: Timeout 2, Timeout 3, Timeout 1
```

## Ejercicios

- `01-notas.js` — Callback con `setTimeout`, creación de una Promise con éxito y error, uso de `.then()` y `.catch()`.
- `02-experimentos.js` — Promesa que falla con `reject`, encadenamiento de `.then()`.
- `03-ejercicio1.js` — Función `obtenerUsuario(id)` que devuelve una Promise con `setTimeout`, validación de ID.
- `04-ejercicio2.js` — Función `verificarStock(producto, cantidad)` que simula verificación de stock con `setTimeout` y Promise.

## Buenas prácticas / Notas

- El código síncrono siempre se ejecuta primero, incluso antes de `setTimeout(fn, 0)`.
- Usar Promesas en lugar de callbacks anidados (callback hell) para código más legible.
- Siempre agregar un `.catch()` al final de una cadena de promesas para manejar errores.
- El `.catch()` solo cubre errores de los `.then()` que están antes que él.
- Las promesas no encadenadas entre sí se ejecutan en paralelo.
