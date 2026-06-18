# Sesión 2: Operadores y Estructuras de Control

## Objetivos
- Diferenciar entre comparación laxa y estricta
- Usar operadores lógicos para combinar condiciones
- Escribir estructuras condicionales con `if/else`
- Conocer el operador ternario y `switch`

## Teoría

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
