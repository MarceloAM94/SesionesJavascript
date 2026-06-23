async function retornarValor () {
    return "Hola desde async";
}

const resultado = retornarValor();
console.log(resultado);
resultado.then((v) => console.log(v));

function esperar(ms){
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function secuencial() {
    console.log("Paso 1");
    await esperar(1000);
    console.log("Paso 2 (despues de 1seg)");
    await esperar(1000);
    console.log("Paso 3 (despues de 2seg en total)");
}

secuencial();
console.log("Esto corre mientras secuencial() espera");

const ids = [1, 2, 3];

function obtenerProducto(id){
    return new Promise((resolve) => {
        setTimeout(() => resolve({id, nombre: `Producto ${id}`}), 500);
    });
}

async function obtenerTodos() {
    const productos = await Promise.all(ids.map((id) => obtenerProducto(id)));
    console.log(productos);
}

obtenerTodos();