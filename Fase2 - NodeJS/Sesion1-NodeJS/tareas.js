let tareas = [];

function agregarTarea(nombre) {
    const nuevaTarea = {nombre, completada: false};
    tareas.push(nuevaTarea);
}

function obtenerTareas() {
    tareas.forEach((t) => {
        console.log(t);
    })
};

function eliminarTarea(nombre) {
    const indice = tareas.findIndex(t => t.nombre === nombre);

    if (indice != -1){
        tareas.splice(indice, 1);
        console.log("Tarea eliminada con exito");
    } else {
        console.log("La tarea no existe");
    }
};

module.exports = { agregarTarea, obtenerTareas, eliminarTarea };