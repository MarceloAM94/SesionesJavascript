function obtenerUsuario(id){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (id > 0){
                resolve({id: id, nombre:"Marcelo"});
            }else{
                reject("ID invalido");
            }
        }, 1500);
    });
}

obtenerUsuario(1)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

obtenerUsuario(-1)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));