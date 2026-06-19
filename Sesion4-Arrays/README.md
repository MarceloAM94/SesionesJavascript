# Sesión 4: Métodos de Arrays

## Objetivos
- Iterar arrays con `forEach`
- Transformar arrays con `map`
- Filtrar elementos con `filter`
- Buscar elementos con `find`
- Acumular valores con `reduce`
- Encadenar métodos (chaining)

## Teoría

### forEach — Iterar

Ejecuta una función por cada elemento del array. **No devuelve un nuevo array**.

```js
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((n) => console.log(n));
```

### map — Transformar

Crea un **nuevo array** aplicando una función a cada elemento. El array original no se modifica.

```js
const numeros = [1, 2, 3];
const dobles = numeros.map((n) => n * 2);

console.log(dobles);  // [2, 4, 6]
console.log(numeros); // [1, 2, 3] (sin cambios)
```

### filter — Filtrar

Crea un **nuevo array** con los elementos que cumplen una condición.

```js
const precios = [25, 80, 15, 120, 45, 60];
const preciosAltos = precios.filter((precio) => precio > 50);

console.log(preciosAltos); // [80, 120, 60]
```

### find — Buscar

Devuelve el **primer elemento** que cumple la condición, o `undefined` si no encuentra.

```js
const numeros = [1, 2, 3, 4, 5];
const primerMayorA3 = numeros.find((n) => n > 3);

console.log(primerMayorA3); // 4
```

### reduce — Acumular

Reduce el array a un solo valor. Recibe un acumulador y el elemento actual.

```js
const numeros = [1, 2, 3, 4, 5, 6];
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);

console.log(suma); // 21
```

El segundo argumento (`0`) es el valor inicial del acumulador.

### Chaining (encadenamiento)

Los métodos que devuelven un array se pueden encadenar:

```js
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = numeros
    .filter((n) => n % 2 === 0)   // [2, 4, 6]
    .map((n) => n * 10);          // [20, 40, 60]

console.log(resultado); // [20, 40, 60]
```

## Ejercicios

- `01-arrays.js` — Uso combinado de `filter`, `map` y `reduce`.
- `02-placeholder.js` — Archivo reservado (pendiente de contenido).
- `03-experimentos.js` — Práctica con `map`, `find`, `filter`, `reduce` y chaining.
- `04-metodos.js` — Ejemplos de `forEach`, `map`, `filter` y `find`.

## Buenas prácticas / Notas

- `map` y `filter` devuelven un nuevo array; no modifican el original (inmutabilidad).
- Para operaciones simples de una línea se puede omitir `return` y las llaves `{}`.
- El chaining mejora la legibilidad; evitar cadenas muy largas (extraer a variables intermedias si es necesario).
- Preferir estos métodos sobre bucles `for` tradicionales para código más declarativo y legible.
