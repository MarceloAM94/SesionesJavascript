const { agregarTarea, obtenerTareas, eliminarTarea } = require('./tareas');

agregarTarea("estudiar");
agregarTarea("cocinar");
agregarTarea("entrenar");

obtenerTareas();

eliminarTarea("cocinar");

obtenerTareas();