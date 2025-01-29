function comprar() {
    let pago = true;
    let intentos = 1;


    let pesos = parseInt(prompt("¿Con cuánto va a abonar?"));


    if (pesos => 10000) {
        alert("puede realizar la compra");
        pago = false;


    }



    else {
        alert("no cuenta con saldo suficiente");
        intentos++;


    }


    const numeros = ['10000', '20000', '30000'];
    if (console.log(numeros[0, 1, 2])) {
        alert("no tenemos cambio");
        intentos++;
    }

    while (pago);



}





comprar()
