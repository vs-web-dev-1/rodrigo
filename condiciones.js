let saldo = 900;
let precio = 1000;
let puedoComprar = saldo > precio;
let creditoDisponible = 1000;

if (puedoComprar==true){
    console.log('Me lo compro!!!');
    saldo = saldo - precio;
} else{
        console.log('Me aguanto ');
        let necesito = precio - saldo;
        console.log('Necesito '+necesito);
        let mensajeCredito = necesito  > creditoDisponible  ? 'No puedo pedir credito': 'Si que puedo pedir credito';
        console.log(mensajeCredito);
        
    }
console.log('tengo '+saldo);

let formaDePago = 'Tarjeta';
/*if (formaDePago === 'Tarjeta'){
    console.log('Pagare con tarjeta');
} else if (formaDePago === 'Bizum'){
    console.log('Pagare con bizum');
} else if (formaDePago==="Transfierencia"){
    console.log('Pagare con transfarencia');
} else if (formaDePago==='efectivo'){
    console.log('Pagare con efectivo')
} else {
    console.log("Medio no valido");
}*/

switch (formaDePago){
    case 'Bizum':
        console.log('Pagare con bizum');
     case 'Tarjeta':
        console.log('Pagare con tarjeta');
    
}

