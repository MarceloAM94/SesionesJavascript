function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nombre: "Marcelo", rol: "admin" });
            } else {
                reject("Usuario no encontrado");
            }
        }, 1000);
    });
}

function obtenerPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, producto: "Laptop", precio: 2500},
                { id: 2, producto: "Mouse", precio: 25}
            ]);
        }, 1000);
    });
}

async function procesarUsuario() {
    try{
        const usuario = await obtenerUsuario(1);
        console.log(usuario.nombre);
        const pedidos = await obtenerPedidos(usuario.id);
        console.log(pedidos.length);
    } catch {
        console.log("Error, id invalido");
    }
}

procesarUsuario();