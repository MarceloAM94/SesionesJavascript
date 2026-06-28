function obtenerUsuario(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve ({id: id, nombre: "Marcelo"});
            } else {
                reject ("ID invalido");
            }
        }, 1500);
    });
}

// Ahora con async/await en vez de .then()/.catch()
async function buscarUsuario(id){
    try{
        const usuario = await obtenerUsuario(id);
        console.log("Usuario encontrado: ", usuario);
    } catch (error) {
        console.log("Error: ", error);
    }
}

buscarUsuario(1);
buscarUsuario(-1);

