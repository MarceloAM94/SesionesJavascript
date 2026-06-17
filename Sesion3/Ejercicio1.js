function calcular (a, b, operacion){
    if (operacion === "sumar"){
        return a + b;
    }else if (operacion === "restar"){
        return a - b;
    }else if (operacion === "multiplicar"){
        return a * b;
    } else if (operacion === "dividir"){
        return a / b;
    }else {
        return "Operacion no reconocida";
    }
}

console.log(calcular(10, 5, "sumar"));
console.log(calcular(10, 5, "restar"));
console.log(calcular(10, 5, "multiplicar"));
console.log(calcular(10, 5, "dividir"));
console.log(calcular(10, 5, "potencia"));