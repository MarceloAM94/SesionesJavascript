// Callback simple
console.log("1. Inicio");

setTimeout(() => {
    console.log("3. Esto llega despues de 2 segundos");
}, 2000);

console.log("2. Esto se ejecuta antes del setTimeout");

// Promesa simple
const miPromesa = new Promise((resolve, reject) => {
    const exito = true;

    if(exito){
        resolve("La promesa se cumplio");
    }else{
        reject("La promesa fallo");
    }
});

miPromesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
