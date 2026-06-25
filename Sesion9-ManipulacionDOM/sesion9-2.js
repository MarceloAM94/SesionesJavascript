const productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: false },
  { nombre: "Teclado", precio: 45, disponible: true },
  { nombre: "Monitor", precio: 350, disponible: true }
];

const lista = document.getElementById("lista");
const btnCarga = document.getElementById("btn-cargar");
btnCarga.addEventListener("click", () => {
    productos.forEach((p) => {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.innerHTML = `
            Nombre: ${p.nombre} - Precio: S/.${p.precio}
        `;
        lista.appendChild(nuevoDiv);
    });
});