# Sesión 3: Funciones en JavaScript

## Objetivos
- Declarar y usar funciones tradicionales
- Escribir arrow functions y entender sus diferencias
- Usar parámetros por defecto y rest parameters
- Comprender el hoisting en funciones
- Pasar funciones como argumentos (callbacks)
- Conocer IIFE y el objeto `arguments`

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

### Rest parameters (`...`)

Agrupa los argumentos "extra" en un array:

```js
function sumarTodos(...numeros) {
    // numeros = [1, 2, 3, 4]
    let total = 0;
    numeros.forEach((n) => total += n);
    return total;
}

sumarTodos(1, 2, 3, 4);  // 10
```

También podés combinarlo con parámetros normales:
```js
function mostrar(nombre, ...hobbies) {
    console.log(`${nombre} tiene estos hobbies:`, hobbies);
}

mostrar("Ana", "leer", "correr", "cocinar");
// "Ana tiene estos hobbies: [ 'leer', 'correr', 'cocinar' ]"
```

### El objeto `arguments`

Solo en funciones tradicionales (no arrow), `arguments` contiene todos los argumentos pasados:

```js
function listar() {
    console.log(arguments);  // [Arguments] { '0': 'a', '1': 'b', '2': 'c' }
}

listar("a", "b", "c");
```

Hoy en día se prefiere usar rest parameters (`...`) porque `arguments` no es un array real.

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

Una función puede recibir otra función como argumento y ejecutarla:

```js
function procesarUsuario(nombre, callback) {
    const mensaje = `Hola, ${nombre}`;
    callback(mensaje);
}

procesarUsuario("Marcelo", (msg) => console.log(msg));
// "Hola, Marcelo"
```

Los callbacks se usan mucho en eventos y operaciones asíncronas:

```js
function cocinar(comida, alTerminar) {
    console.log(`Cocinando ${comida}...`);
    setTimeout(() => {            // Simula que tarda 2 segundos
        alTerminar(comida);
    }, 2000);
}

cocinar("pizza", (plato) => console.log(`${plato} listo!`));
// "Cocinando pizza..."
// (2 segundos después) "pizza listo!"
```

### IIFE (Immediately Invoked Function Expression)

Una función que se ejecuta en el momento en que se define:

```js
(function() {
    console.log("Me ejecuto al instante");
})();

// También con arrow:
(() => {
    console.log("IIFE con arrow function");
})();
```

Se usa para crear un ámbito privado y no contaminar variables globales.

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
- Preferir rest parameters (`...`) sobre el objeto `arguments`.
- Las IIFE sirven para aislar código y evitar contaminar variables globales.
