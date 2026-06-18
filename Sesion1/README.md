# Sesión 1: Introducción a JavaScript — Variables y Tipos de Datos

## Objetivos
- Comprender qué son las variables y cómo declararlas
- Conocer los tipos de datos primitivos en JavaScript
- Usar template strings para interpolación
- Mostrar información en consola con `console.log`

## Teoría

### Declaración de variables

JavaScript ofrece tres formas de declarar variables:

```js
let nombre = "Marcelo";   // Variable que puede reasignarse
const edad = 22;          // Constante: no puede reasignarse
var apellido = "AM";      // (obsoleto) ámbito de función, evitar su uso
```

- `let` permite reasignar el valor.
- `const` es de solo lectura; una vez asignada, no se puede cambiar.
- `var` es la forma antigua, tiene comportamientos confusos con el ámbito. Usar `let` o `const`.

### Tipos de datos primitivos

| Tipo        | Ejemplo               |
|-------------|-----------------------|
| string      | `"Hola"`, `'Mundo'`   |
| number      | `42`, `3.14`          |
| boolean     | `true`, `false`       |
| null        | `null` (vacío intencional) |
| undefined   | `undefined` (no asignado)  |

```js
const nombre = "Marcelo";
const edad = 22;
const estaEmpleado = true;
let salario = null;
```

### Template strings

Permiten incrustar variables dentro de un string usando `${}` y backticks:

```js
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad} años`);
```

### console.log

Muestra información en la consola del navegador o terminal:

```js
console.log("Hola mundo");
console.log(`Valor de la variable: ${variable}`);
```

## Ejercicios

- `01-variables.js` — Declaración de variables y template strings.
- `02-producto.js` — Ficha de producto usando variables y condicional `if`.
- `prueba.js` — Archivo extra de pruebas rápidas.

## Buenas prácticas / Notas

- Preferir `const` por defecto; usar `let` solo cuando la variable deba reasignarse.
- No usar `var` en código nuevo.
- Usar template strings en lugar de concatenación con `+` para mayor legibilidad.
- Los nombres de variables deben ser descriptivos y en camelCase.
