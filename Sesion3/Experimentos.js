console.log(saludar());

function saludar(){
    return "Hola desde funcion tradicional";
}

const saludarFlecha = () => {
    return "Hola desde funcion flecha";
};

console.log(saludarFlecha());

function presentar(nombre = "invitado", edad = 18){
    console.log(`${nombre} tiene ${edad} años`);
}

presentar();
presentar("Marcelo");
presentar("Marcelo", 22);

function ejecutar(fn){
    fn();
}

ejecutar(() => console.log("Me ejecutaron como argumento"));