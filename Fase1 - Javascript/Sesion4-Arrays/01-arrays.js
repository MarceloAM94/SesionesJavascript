const precios = [25, 80, 15, 120, 45, 60];

// filter
const preciosAltos = precios.filter((precio) => precio > 50);
console.log(preciosAltos); // [80, 120, 60]

const precioConDescuento = preciosAltos.map((precio) => precio * 0.9);
console.log(precioConDescuento); // [72, 108, 54]

const totalDecuentos = precioConDescuento.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(totalDecuentos); // 234, suma todos los precios con descuento
