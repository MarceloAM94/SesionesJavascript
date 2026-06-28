let todosPaises = [];

async function obtenerPaises() {
    try {
        const respuesta = await fetch('https://api.countrystatecity.in/v1/countries', {
            headers: { 'X-CSCAPI-KEY': 'a71918bf4311cc3d850ae383a1031b4e2df89c7396729e0463e00b1eda8d8a66' }
        });
        
        if (!respuesta.ok){
            throw Error(`HTTP: ${respuesta.status}`);
        }

        const paises = await respuesta.json();

        //const paisesFiltrados = paises
            //.filter((p) => p.subregion === "South America");
        
        todosPaises = paises; //Filtrados;

        renderizarPaises(paises);
        mostrarEstadisticas(paises);

    } catch (error){
        console.log("Error: ", error.message);
    }
}

obtenerPaises();

function renderizarPaises(paises) {
    const contenedorPaises = document.getElementById("contenedor-paises");
    contenedorPaises.innerHTML = "";
    
    paises.forEach((p) => {
        const divPais = document.createElement("div");

        // Convertimos el código ISO a minúsculas para la URL de la bandera (ej: "ar")
        const codigoBandera = p.iso2.toLowerCase();

        divPais.innerHTML = `
            <img src="https://flagcdn.com/20x15/${codigoBandera}.png" 
                width="20" 
                height="15" 
                alt="Bandera de ${p.name}">
            <span><strong>${p.name}</strong> - Capital: ${p.capital}</span>
        `;
        divPais.classList.add("tarjeta-pais");
        contenedorPaises.appendChild(divPais);
    });
};

function mostrarEstadisticas(paises){
    const contenedorStats = document.getElementById("contenedor-stats");
    contenedorStats.innerHTML = "";

    const totalPaises = document.createElement("p");
    totalPaises.innerHTML = `
        Total de paises = ${paises.length}
    `;
    contenedorStats.appendChild(totalPaises);

    let paisesDolar = 0;
    paises.forEach((p) => {
        console.log(p.name);
        console.log(p.currency);
        if (p.currency === "USD"){
            paisesDolar += 1;
        }
    });
    const totalPaisesDolar = document.createElement("p");
    totalPaisesDolar.innerHTML = `
        Total de paises que usan USD: ${paisesDolar} paises.
    `;
    contenedorStats.appendChild(totalPaisesDolar);

    const monedasUnicas = [...new Set(paises.map(p => p.currency).filter(Boolean))];
    const listaMonedas = document.createElement("p");
    listaMonedas.innerHTML = `
        Lista de monedas unicas: ${monedasUnicas}
    `;
    contenedorStats.appendChild(listaMonedas);
};

const miInput = document.getElementById("input");
miInput.addEventListener("input", () => {
    const busqueda = miInput.value.toLowerCase();
    
    const paisesFiltrados = todosPaises.filter((p) => {
        return p.name.toLowerCase().includes(busqueda);
    });
    
    renderizarPaises(paisesFiltrados);
});