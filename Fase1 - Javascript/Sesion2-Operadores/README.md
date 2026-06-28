# Sesión 2: Operadores y Estructuras de Control

## Objetivos
- Usar operadores aritméticos y de asignación
- Diferenciar entre comparación laxa y estricta
- Usar operadores lógicos para combinar condiciones
- Escribir estructuras condicionales con `if/else`
- Conocer el operador ternario, `switch` y operadores modernos

## Teoría

### Operadores aritméticos

Sirven para hacer cálculos matemáticos:

```js
let suma = 10 + 5;        // 15
let resta = 10 - 5;       // 5
let multiplicacion = 10 * 5;  // 50
let division = 10 / 5;    // 2
let modulo = 10 % 3;      // 1 (resto de la división: 10 ÷ 3 = 3, resto 1)
let potencia = 2 ** 3;    // 8 (2 elevado a 3)
```

El operador `%` (módulo) es muy útil para saber si un número es par o impar:
```js
12 % 2 === 0;  // true → par
13 % 2 === 1;  // true → impar
```

### Operadores de asignación compuesta

Combinan una operación con la asignación:

```js
let total = 10;
total += 5;      // total = total + 5  → 15
total -= 3;      // total = total - 3  → 12
total *= 2;      // total = total * 2  → 24
total /= 4;      // total = total / 4  → 6
```

### Incremento y decremento

```js
let contador = 0;
contador++;      // contador = contador + 1  → 1
contador--;      // contador = contador - 1  → 0
```

### Comparación laxa (`==`) vs estricta (`===`)

```js
5 == "5"    // true  — convierte tipos antes de comparar
5 === "5"   // false — compara valor Y tipo, no convierte
```

| Operador | Nombre            | Convierte tipos |
|----------|-------------------|-----------------|
| `==`     | Igualdad laxa     | Sí              |
| `===`    | Igualdad estricta | No              |

Regla: **siempre usar `===`** a menos que tengas una razón específica para usar `==`.

### Operadores lógicos

```js
true && false   // false — AND (ambos deben ser true)
true || false   // true  — OR (al menos uno true)
!true           // false — NOT (invierte el valor)
```

### Short-circuit evaluation

JavaScript evalúa `&&` y `||` solo hasta donde necesita:

```js
// Con ||: devuelve el primer valor "true" que encuentre
"Juan" || "Invitado";     // "Juan" (ya es true, no sigue)
"" || "Invitado";         // "Invitado" ("" es false, sigue)
null || "Por defecto";    // "Por defecto"

// Con &&: devuelve el primer valor "false" que encuentre
true && "Hola";           // "Hola" (todo es true, devuelve el último)
false && "Hola";          // false (corta porque ya es false)
```

Es útil para asignar valores por defecto:
```js
let nombre = usuario || "Invitado";
```

### Nullish coalescing (`??`)

Parecido a `||`, pero solo toma el valor por defecto si el valor es `null` o `undefined` (no si es `false`, `0` o `""`):

```js
0 ?? "default";           // 0 (0 no es null/undefined, lo conserva)
"" ?? "default";          // "" (lo conserva)
null ?? "default";        // "default"
undefined ?? "default";   // "default"
```

A diferencia de `||`:
```js
0 || "default";           // "default" (|| trata 0 como false)
0 ?? "default";           // 0 (?? solo reemplaza null/undefined)
```

### Condicionales (`if/else if/else`)

```js
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesita mejorar");
}
```

### Operador ternario

Es una forma compacta de un `if/else`:

```js
let edad = 17;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
//     condición      ?   valor si true    :   valor si false
```

### Switch

Evalúa una expresión y ejecuta el `case` correspondiente:

```js
let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}
```

- `break` evita que se ejecuten los casos siguientes (fall-through).
- `default` se ejecuta si ningún `case` coincide.

## Ejercicios

- `01-notas.js` — Comparador de notas con `if/else if/else`.
- `02-acceso.js` — Validador de acceso con operadores lógicos.
- `03-experimentos.js` — Práctica con `==` vs `===`, ternario y `switch`.
- `04-condicionales.js` — Comparaciones laxa/estricta, operadores lógicos y condicional básico.

## Buenas prácticas / Notas

- Usar `===` y `!==` en lugar de `==` y `!=`.
- El ternario es ideal para asignaciones condicionales simples; no anidarlos.
- En `switch` no olvidar el `break` para evitar fall-through no deseado.
- Preferir `??` sobre `||` cuando trabajes con `0`, `""` o `false` como valores válidos.
- El `%` (módulo) sirve para detectar pares/impares y ciclos.
