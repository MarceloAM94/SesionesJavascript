function validarPassword(password){
    if (password.length < 8){
        console.log("Password muy corta, debe tener al menos 8 caracteres");
    }else{
        console.log("Password valida");
    }
}

const validarPasswordFlecha = (password) => {
    if (password.length < 8){
        console.log("Password muy corta, debe tener al menos 8 caracteres");
    }else{
        console.log("Password valida");
    }
}

validarPassword("12345")
validarPassword("12345678")
validarPassword("contraseñaSegura")
