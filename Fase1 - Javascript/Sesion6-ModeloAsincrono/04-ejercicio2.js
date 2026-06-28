function verificarStock(producto, cantidad){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stockDisponible = 10;
            if (cantidad <= stockDisponible){
                resolve(`Hay stock suficiente de ${producto}`);
            }else{
                reject(`No hay stock suficiente de ${producto}`);
            }
        }, 1000);
    });
}

verificarStock("Laptop", 5)
    .then((resultado) => {
        console.log(resultado);
        console.log("Procesando pedido...");
    })
    .catch((error) => console.log(error));

verificarStock("Mouse", 20)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));


