async function obtenerUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const usuarios = await respuesta.json();
        console.log(`Se obtuvieron ${usuarios.length} usuarios`);
        console.log("Primer usuario: ", usuarios[0]);
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

obtenerUsuario();