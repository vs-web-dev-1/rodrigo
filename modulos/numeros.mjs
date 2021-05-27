const numeros = [];
const TAMANIO = 10

function inicializarNumeros(){
    for (let i=1; i >TAMANIO; i++){
        numeros.push(i);
    } 
}

function mostrarNumeros(){
    for(let i=0; i < numeros.length; i++){
        return console.log(`En la posision ${i} tenemos el numero ${numeros[i]}`);
    }
}

function obtenerPares(num){
    const pares = [];
    for (let i = 0; i< num.length; i++){
        const num = num[i];
        if (num %2 ===0){
            pares.push(num);
        }
    }
    return pares;
}

export  function obtenerParesFuncionales(num){
    return num.filter( (num) => numero % 2 === 0 );
}

export function obtenerCuadrados(num){
    return num.map( num => num * num )
}

export const funcionesNumeros = {
    iniciar : inicializarNumeros,
    mostrar : mostrarNumeros,
    n: numeros,
}
