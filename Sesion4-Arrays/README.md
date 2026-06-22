# Sesión 4: Métodos de Arrays

## Objetivos
- Iterar arrays con `forEach`
- Transformar arrays con `map`
- Filtrar elementos con `filter`
- Buscar elementos con `find` y verificar con `some`/`every`
- Acumular valores con `reduce`
- Ordenar con `sort`, verificar existencia con `includes`
- Extraer partes con `slice` y `splice`
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

### some y every — Verificar condiciones

- `some` → ¿**Algún** elemento cumple? Devuelve `true`/`false`.
- `every` → ¿**Todos** los elementos cumplen? Devuelve `true`/`false`.

```js
const edades = [15, 22, 18, 30];

const algunMayor = edades.some((e) => e >= 18);   // true (22, 18, 30)
const todosMayores = edades.every((e) => e >= 18); // false (15 no cumple)
```

### includes — ¿Existe el elemento?

`includes` verifica si un valor está en el array (funciona con valores simples, no objetos):

```js
const frutas = ["manzana", "pera", "banana"];

frutas.includes("pera");    // true
frutas.includes("uva");     // false
```

### reduce — Acumular

Reduce el array a un solo valor. Recibe un acumulador y el elemento actual.

```js
const numeros = [1, 2, 3, 4, 5, 6];
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);

console.log(suma); // 21
```

El segundo argumento (`0`) es el valor inicial del acumulador.

### sort — Ordenar

Ordena el array **modificando el original**. Por defecto ordena como texto:

```js
const numeros = [3, 10, 1, 20];
numeros.sort();
console.log(numeros); // [1, 10, 20, 3] (orden alfabético, no numérico)
```

Para ordenar números correctamente hay que pasarle una función de comparación:

```js
numeros.sort((a, b) => a - b);  // Ascendente: [1, 3, 10, 20]
numeros.sort((a, b) => b - a);  // Descendente: [20, 10, 3, 1]
```

Con strings también sirve:
```js
const nombres = ["Luis", "Ana", "Pedro"];
nombres.sort(); // ["Ana", "Luis", "Pedro"]
```

### slice — Extraer parte del array (sin modificar)

`slice(inicio, fin)` devuelve un nuevo array desde `inicio` hasta `fin` (sin incluir `fin`). El original no se modifica.

```js
const letras = ["a", "b", "c", "d", "e"];

const primeras3 = letras.slice(0, 3);  // ["a", "b", "c"]
const desdeC = letras.slice(2);        // ["c", "d", "e"]
const ultimas2 = letras.slice(-2);     // ["d", "e"] (índices negativos)
```

### splice — Agregar/eliminar en el medio (modifica)

`splice(inicio, cantidadAEliminar, ...itemsAAgregar)` modifica el array original.

```js
const colores = ["rojo", "verde", "azul"];

colores.splice(1, 1);             // Elimina 1 desde índice 1 → ["rojo", "azul"]
colores.splice(1, 0, "negro");    // Agrega "negro" en índice 1 → ["rojo", "negro", "azul"]
colores.splice(1, 1, "blanco");   // Reemplaza 1 en índice 1 → ["rojo", "blanco", "azul"]
```

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
- `sort` y `splice` **sí modifican** el array original. Hacé una copia con `[...arr].sort()` si querés evitar mutarlo.
- Para operaciones simples de una línea se puede omitir `return` y las llaves `{}`.
- El chaining mejora la legibilidad; evitar cadenas muy largas (extraer a variables intermedias si es necesario).
- Preferir estos métodos sobre bucles `for` tradicionales para código más declarativo y legible.
