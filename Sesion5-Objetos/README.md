# Sesión 5: Objetos en JavaScript

## Objetivos
- Crear y manipular objetos literales
- Acceder a propiedades con notación de punto y corchetes
- Modificar y agregar propiedades dinámicamente
- Usar destructuring para extraer propiedades
- Clonar y combinar objetos con spread operator
- Recorrer objetos con `Object.keys()`, `Object.values()`, `Object.entries()`
- Agregar métodos a objetos y entender `this`
- Acceder seguro a propiedades anidadas con optional chaining (`?.`)
- Trabajar con arreglos de objetos

## Teoría

### Objetos literales

Un objeto es una colección de pares clave-valor:

```js
const producto = {
    nombre: "Laptop",
    precio: 1200,
    disponible: true
};
```

### Acceder a propiedades

```js
producto.nombre;      // "Laptop"     — notación de punto
producto["precio"];   // 1200         — notación de corchetes
```

### Modificar y agregar propiedades

```js
producto.precio = 999.9;      // Modificar existente
producto.categoria = "Tech";  // Agregar nueva
```

### Destructuring

Extrae propiedades en variables de forma concisa:

```js
const {nombre, precio} = producto;
console.log(nombre, precio);  // "Laptop" 1200

// Renombrar la variable
const {nombre: nombreProducto} = producto;
```

### Spread operator (`...`)

Clona o combina objetos sin mutar el original:

```js
const copia = {...producto};
const actualizado = {...producto, precio: 800};
```

### Objetos anidados

```js
const usuario = {
    nombre: "Marcelo",
    direccion: {
        ciudad: "Lima",
        pais: "Peru"
    }
};

console.log(usuario.direccion.ciudad);  // "Lima"
```

### Object.keys(), Object.values(), Object.entries()

Estos métodos te permiten recorrer un objeto:

```js
const producto = { nombre: "Laptop", precio: 1200, disponible: true };

Object.keys(producto);    // ["nombre", "precio", "disponible"]
Object.values(producto);  // ["Laptop", 1200, true]
Object.entries(producto); // [["nombre","Laptop"], ["precio",1200], ["disponible",true]]
```

Son útiles para iterar sobre objetos:

```js
Object.keys(producto).forEach((clave) => {
    console.log(`${clave}: ${producto[clave]}`);
});
// nombre: Laptop
// precio: 1200
// disponible: true
```

### Métodos dentro de objetos y el uso de `this`

Un objeto puede tener funciones como propiedades (métodos):

```js
const usuario = {
    nombre: "Marcelo",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

usuario.saludar();  // "Hola, soy Marcelo"
```

- `this` dentro del método hace referencia al objeto que lo contiene.
- En arrow functions **no** funciona igual, porque `this` hereda del contexto exterior.

```js
const usuario2 = {
    nombre: "Ana",
    saludar: () => console.log(`Hola, soy ${this.nombre}`)
};

usuario2.saludar();  // "Hola, soy undefined" (arrow no tiene su propio this)
```

### Optional chaining (`?.`)

Accede a propiedades sin miedo a errores si algo es `null` o `undefined`:

```js
const usuario = {
    nombre: "Marcelo"
    // direccion no existe
};

// Sin optional chaining:
usuario.direccion.ciudad;  // ERROR: Cannot read properties of undefined

// Con optional chaining:
usuario.direccion?.ciudad; // undefined (no da error, vuelve tranquilo)
```

Sirve también para llamar métodos que quizás no existen:

```js
const config = {};
config.guardar?.();  // undefined, no da error (guardar no existe)
```

### Arreglos de objetos y métodos de array

Es común trabajar con arreglos que contienen objetos:

```js
const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Mouse", precio: 25}
];

const nombres = productos.map((p) => p.nombre);
const conIGV = productos.map((p) => ({...p, precio: p.precio * 1.18}));
```

## Ejercicios

- `01-notas.js` — Creación, acceso, modificación, destructuring y spread en objetos.
- `02-experimentos.js` — Spread con sobreescritura, objetos anidados, renombrado en destructuring y objetos en arrays con `map`.
- `03-ejercicio1.js` — Filtrar empleados por puesto, aplicar aumento con spread y buscar primer salario mayor a 3000.
- `04-ejercicio2.js` — Filtrar cursos por categoría, aplicar descuento con spread y destructuring.

## Buenas prácticas / Notas

- Usar `const` para declarar objetos; la referencia no cambia, aunque las propiedades internas sí puedan modificarse.
- Preferir spread operator (`...`) sobre `Object.assign()` para clonar objetos.
- El destructuring hace el código más legible al extraer solo lo necesario.
- Al usar `map` con objetos y spread, envolver el objeto entre paréntesis para evitar que las llaves se interpreten como bloque: `({...obj, clave: valor})`.
- Usar optional chaining (`?.`) para acceder a propiedades anidadas sin miedo a errores.
- En métodos de objetos, usar funciones tradicionales (no arrow) para que `this` funcione correctamente.
- Para copias profundas de objetos anidados se necesita `structuredClone()` o librerías como Lodash.
