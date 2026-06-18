# Sesión 3: Funciones en JavaScript

## Objetivos
- Declarar y usar funciones tradicionales
- Escribir arrow functions y entender sus diferencias
- Usar parámetros por defecto
- Comprender el hoisting en funciones
- Pasar funciones como argumentos (callbacks)

## Teoría

### Funciones tradicionales

Se declaran con la palabra clave `function`:

```js
function sumar(a, b) {
    return a + b;
}
```

- Pueden llamarse antes de su declaración (hoisting).
- Tienen su propio `this` (importante en objetos y clases).

### Arrow functions

Sintaxis más concisa introducida en ES6:

```js
const sumar = (a, b) => {
    return a + b;
};

// Si es una sola línea, se puede omitir return y llaves:
const sumar = (a, b) => a + b;

// Si tiene un solo parámetro, se pueden omitir los paréntesis:
const cuadrado = n => n * n;
```

| Característica          | Tradicional | Arrow function |
|-------------------------|-------------|----------------|
| Hoisting                | Sí          | No             |
| Su propio `this`        | Sí          | No (hereda del contexto) |
| Uso como método de objeto | Recomendado | No recomendado |

### Parámetros por defecto

```js
function presentar(nombre = "invitado", edad = 18) {
    console.log(`${nombre} tiene ${edad} años`);
}

presentar();               // "invitado tiene 18 años"
presentar("Marcelo");      // "Marcelo tiene 18 años"
presentar("Marcelo", 22);  // "Marcelo tiene 22 años"
```

### Hoisting

Las funciones declaradas con `function` se "elevan" al inicio del ámbito:

```js
saludar();  // Funciona — la función ya está disponible

function saludar() {
    return "Hola";
}
```

Las arrow functions y function expressions **no** tienen hoisting:

```js
saludar();  // Error: Cannot access 'saludar' before initialization

const saludar = () => "Hola";
```

### Callbacks

Una función puede recibir otra función como argumento:

```js
function ejecutar(fn) {
    fn();
}

ejecutar(() => console.log("Me ejecutaron como argumento"));
```

## Ejercicios

- `01-calculadora.js` — Calculadora con funciones tradicionales.
- `02-password.js` — Validador de password con función tradicional y arrow function.
- `03-experimentos.js` — Hoisting, parámetros por defecto y callbacks.
- `04-funciones.js` — Comparación entre función tradicional y arrow function.

## Buenas prácticas / Notas

- Usar arrow functions para callbacks y funciones simples.
- Usar funciones tradicionales cuando se necesite hoisting o su propio `this`.
- Siempre nombrar las funciones de forma descriptiva (verbo + sustantivo).
- Preferir arrow functions en métodos de arrays (`map`, `filter`, etc.).
