const productos = [
  { nombre: "Laptop", precio: 1200, disponible: true },
  { nombre: "Mouse", precio: 25, disponible: false },
  { nombre: "Teclado", precio: 45, disponible: true },
  { nombre: "Monitor", precio: 350, disponible: true }
];

const lista = document.getElementById("lista");
const btnDispo = document.getElementById("btn-dispo");
const btnTodos = document.getElementById("btn-todos");
btnDispo.addEventListener("click", () => {
    lista.innerHTML = "";
    productos.forEach((p) => {
      if (p.disponible === true){
        const nuevoDivDispo = document.createElement("div");
        nuevoDivDispo.innerHTML = `
          Nombre: ${p.nombre} - Precio: S/.${p.precio} - Disponible: ${p.disponible}
        `;
        lista.appendChild(nuevoDivDispo);
      }
      
    })
});

btnTodos.addEventListener("click", () => {
  lista.innerHTML = "";
  productos.forEach((p) => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = `
      Nombre: ${p.nombre} - Precio: S/.${p.precio}
    `;
    lista.appendChild(nuevoDiv);
  });
});