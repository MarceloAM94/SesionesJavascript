# Sesión 9: Manipulación del DOM

## Objetivos
- Seleccionar elementos del DOM con `getElementById` y `querySelector`
- Leer y modificar contenido con `textContent` e `innerHTML`
- Cambiar estilos y clases CSS
- Crear y agregar elementos con `createElement` y `appendChild`
- Manejar eventos con `addEventListener`
- Renderizar listas a partir de arrays de objetos

## Teoría

### Seleccionar elementos

```js
document.getElementById("id")           // por id — el más rápido
document.querySelector(".clase")        // primer elemento que coincida
document.querySelectorAll(".clase")     // todos los que coincidan → NodeList
```

### Leer y modificar contenido

```js
elemento.textContent = "texto plano";      // solo texto, sin HTML
elemento.innerHTML = "<b>negrita</b>";     // acepta etiquetas HTML
```

⚠️ Usar `textContent` cuando no necesites HTML — es más seguro.

### Modificar estilos

```js
elemento.style.color = "blue";
elemento.style.fontSize = "20px";
elemento.classList.add("activo");
elemento.classList.remove("activo");
elemento.classList.toggle("activo");
```

### Crear y agregar elementos — patrón esencial

```js
const div = document.createElement("div");
div.innerHTML = `<p>Contenido</p>`;
contenedor.appendChild(div);
```

### Eventos

```js
boton.addEventListener("click", () => {
    // lo que pasa al hacer clic
});
```

### Limpiar contenido antes de renderizar

```js
contenedor.innerHTML = "";  // evita duplicados al volver a renderizar
```

### Patrón completo — filtrar y renderizar

```js
btnCargar.addEventListener("click", () => {
    lista.innerHTML = "";                           // limpiar
    datos.filter((d) => d.activo).forEach((d) => {  // filtrar y recorrer
        const div = document.createElement("div");
        div.innerHTML = `${d.nombre}`;              // armar
        lista.appendChild(div);                     // insertar
    });
});
```

### Diferencia importante respecto a Node.js

- En el **navegador**: `document` y `window` existen.
- En **Node.js**: `document` **no existe** — el DOM es exclusivo del navegador.
- Los archivos HTML se abren directo en Chrome, no con `node archivo.js`.

## Ejercicios

- `index.html` + `sesion9.js` — Seleccionar por id y clase, cambiar contenido y estilos, crear elementos con `createElement`, y evento `click`.
- `index2.html` + `sesion9-2.js` — Renderizar lista de productos desde un array con `forEach`.
- `index3.html` + `sesion9-3.js` — Botones para filtrar productos disponibles y mostrar todos, limpiando el contenedor antes de cada renderizado.

## Buenas prácticas / Notas

- Preferir `textContent` sobre `innerHTML` cuando solo se necesite texto (más seguro, evita inyección).
- Limpiar con `innerHTML = ""` antes de renderizar para evitar duplicados.
- Usar `querySelector` para selección flexible (por clase, atributo, etc.).
- El DOM solo existe en el navegador, no en Node.js.
- Abrir los `.html` directamente en Chrome para probar.
