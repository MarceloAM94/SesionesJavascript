# Proyecto Integrador 1: Consultor de Países

Aplicación web que consume la API de CountryStateCity para listar países del mundo con sus banderas, buscarlos en tiempo real y mostrar estadísticas.

## Tecnologías y conceptos aplicados

### HTML

- Estructura semántica con `h1`, `p`, `input`, `div`, `hr`.
- Atributo `placeholder` en el input para sugerencia de búsqueda.
- Vinculación de CSS con `<link>` y JS con `<script>`.
- `id` y `class` como puente entre HTML, CSS y JavaScript.

### CSS

- **Reset básico**: `box-sizing: border-box`, margin/padding 0.
- **Flexbox**: `display: flex` en las tarjetas para alinear bandera y texto.
- **Box model**: `padding`, `margin`, `border`, `border-radius`.
- **Sombras**: `box-shadow` para dar profundidad al contenedor.
- **Transiciones**: `transition` en hover y focus para animaciones suaves.
- **Pseudoclases**: `:hover`, `:focus`, `:last-child`.
- **Selectores**: por id (`#input`), clase (`.tarjeta-pais`), etiqueta (`body`), universal (`*`).
- Diseño responsivo básico con `max-width` y `margin: 0 auto`.

### JavaScript (JS Vanilla)

#### Fetch API + async/await

```js
async function obtenerPaises() {
    const respuesta = await fetch('https://api.countrystatecity.in/v1/countries', {
        headers: { 'X-CSCAPI-KEY': '...' }
    });
    const paises = await respuesta.json();
}
```

Dos `await`: uno para la respuesta del servidor, otro para convertir el body a JSON.

#### Manejo de errores con try/catch

```js
try {
    if (!respuesta.ok) throw Error(`HTTP: ${respuesta.status}`);
} catch (error) {
    console.log("Error: ", error.message);
}
```

#### Manipulación del DOM

- `document.getElementById()` — seleccionar contenedores e input.
- `elemento.innerHTML = ""` — limpiar antes de renderizar.
- `document.createElement("div")` — crear elementos dinámicamente.
- `elemento.appendChild(div)` — insertar en el DOM.
- `elemento.classList.add("clase")` — dar estilos desde JS.

#### Eventos

```js
miInput.addEventListener("input", () => {
    // filtrado en tiempo real mientras el usuario escribe
});
```

#### Métodos de arrays

- `forEach` — recorrer países y renderizar.
- `filter` — buscar países por nombre.
- `map` — extraer monedas.
- `Set` + spread — obtener valores únicos de monedas.
- `toLowerCase` + `includes` — búsqueda case-insensitive.

#### Template strings

```js
divPais.innerHTML = `
    <img src="https://flagcdn.com/20x15/${codigoBandera}.png">
    <span><strong>${p.name}</strong> - Capital: ${p.capital}</span>
`;
```

### API externa

- **CountryStateCity API**: endpoint `/countries` para obtener todos los países.
- **flagcdn.com**: `https://flagcdn.com/20x15/{iso2}.png` para banderas en tamaño pequeño.

## Funcionalidades

| Funcionalidad              | Cómo se implementó                          |
|----------------------------|---------------------------------------------|
| Carga de países            | `fetch` + `async/await` al cargar la página |
| Renderizado de tarjetas    | `createElement` + `innerHTML` + `appendChild` |
| Búsqueda en tiempo real    | `input` event + `filter` + `includes`       |
| Estadísticas               | `length`, `forEach`, `Set`, `filter(Boolean)` |
| Diseño visual              | Flexbox, sombras, transiciones, paleta de colores |

## Estructura del proyecto

```
ProyectoIntegrador1/
├── index.html      → estructura HTML
├── styles.css      → estilos visuales
└── app.js          → lógica de la aplicación
```

## Cómo ejecutar

Abrir `index.html` directamente en el navegador. No requiere Node.js ni servidor.

## Buenas prácticas aplicadas

- Separación de responsabilidades: HTML (estructura), CSS (estilos), JS (lógica).
- `innerHTML = ""` antes de renderizar para evitar duplicados.
- Validación de `respuesta.ok` antes de leer el body.
- Uso de `try/catch` para errores de red.
- Búsqueda case-insensitive con `toLowerCase`.
- CSS con comentarios explicativos para cada sección.
