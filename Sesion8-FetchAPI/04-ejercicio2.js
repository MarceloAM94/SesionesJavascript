async function obtenerTareas() {
    try {
        const tareas = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!tareas.ok){
            throw Error(`HTTP: ${tareas.status}`);
        }

        const respuesta = await tareas.json();

        const tareasFiltradas = respuesta
            .filter((t) => t.userId === 1)
            .filter((t) => t.completed === true);
        
        console.log("Tareas completadas: ", tareasFiltradas.length);

        tareasFiltradas.forEach(t => {
            console.log(`Titulo: ${t.title}`);
        });
    } catch (error){
        console.log("Error: ", error.message)
    }
}

obtenerTareas();