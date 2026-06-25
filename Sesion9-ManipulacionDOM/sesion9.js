const titulo = document.getElementById("titulo");
titulo.textContent = "Titulo cambiado con JS";
titulo.style.color = "blue";
titulo.style.fontSize = "40px";

const parrafo = document.getElementById("parrafo");
//parrafo.textContent = "Texto con <b>negrita</b>"
parrafo.innerHTML = "Texto con <b>negrita</b> usando innerHTML";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML += "<p>Se agrego un parrafo nuevo</p>";
});

const items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.style.color = "green";
});

const contenedor = document.getElementById("contenedor");
const tarjeta = document.createElement("div");
tarjeta.innerHTML = `
    <h3>Tarjeta creada con JS</h3>
    <p>Esta tarjeta no existia en el HTML original</p>
`;
contenedor.appendChild(tarjeta);