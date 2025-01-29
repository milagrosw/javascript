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
        intentos ++;




    }
while (pago);

let numeros = ['10000'];
let PrimerNumero = numeros.shift();
console.log (PrimerNumero);

}





comprar()
