function verificarPago(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 0 && monto <= 10000) {
                resolve({aprobado: true, monto, referencia: "PAG-001"});
            } else {
                reject("Monto invalido");
            }
        }, 1000);
    });
}

async function procesarPago(monto) {
    try {
        const verificado = await verificarPago(monto);
        console.log(`Pago aprobado - Referencia: ${verificado.referencia}`);
    } catch(error) {
        console.log(error)
    }
}

procesarPago(599);
procesarPago(15000);