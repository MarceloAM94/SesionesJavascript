async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
        const usuarios = await respuesta.json();

        // Muestra solo nombre y email de cada usuario
        usuarios.forEach((u) => {
            console.log(`${u.name} - ${u.email}`);
        });
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

obtenerUsuarios();

async function procesarUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await respuesta.json();

        //Solo nombres de usuario cuyo id sea par
        const resultado = usuarios
            .filter((u) => u.id % 2 === 0)
            .map((u) => u.name);

        console.log(resultado);
    } catch (error){
        console.log("Error: ", error.message)
    }
}

procesarUsuarios();

async function obtenerDatosFallidos() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/usuarios-inexistentes");

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log("Error capturado:", error.message);
    }
}

obtenerDatosFallidos();