const empleados = [
  { nombre: "Ana", puesto: "Desarrolladora", salario: 3500 },
  { nombre: "Luis", puesto: "Diseñador", salario: 2800 },
  { nombre: "Carla", puesto: "Desarrolladora", salario: 4000 }
];

console.log("ejercicio1");
const desarrolladores = empleados.filter((empleado) => empleado.puesto === "Desarrolladora");
console.log(desarrolladores);

console.log("ejercicio2");
const conAumento = desarrolladores.map((empleado) => ({...empleado, salario: empleado.salario * 1.1}));
console.log(conAumento);

console.log("ejercicio3");
const salarioMayor = empleados.find((emp) => emp.salario > 3000);
console.log(salarioMayor);
