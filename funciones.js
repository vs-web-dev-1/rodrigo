const PI = 3.14;
function saludarPorNombre(nombre, saludo = 'Hola'){
    //console.log('Hola '+nombre);
    console.log(`${saludo} ${nombre}`);
}
function calcularCircunferencia(r=1){
    const c = 2* PI * r;
    return c
}
saludarPorNombre()
saludarPorNombre('Rodrigo');

let radio = 5;
let circuferencia = calcularCircunferencia(6);



console.log(circuferencia)