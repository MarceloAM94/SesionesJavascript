const cursos = [
  { titulo: "JavaScript Básico", precio: 50, categoria: "Programación" },
  { titulo: "Diseño UX", precio: 80, categoria: "Diseño" },
  { titulo: "Node.js Avanzado", precio: 120, categoria: "Programación" },
  { titulo: "Marketing Digital", precio: 60, categoria: "Marketing" }
];

const cursosProgramacion = cursos.filter((c) => c.categoria === "Programación");
console.log(cursosProgramacion);

const cursosConDescuento = cursosProgramacion.map((cprog) => ({...cprog, precio: cprog.precio * 0.8}));
console.log(cursosConDescuento);

const {titulo, precio} = cursos[0];
console.log(titulo, precio);