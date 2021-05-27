import {obtenerCuadrados , obtenerParesFuncionales} from './numeros.mjs'

const numeros = [ 11, 12, 13, 15]

const pares = obtenerParesFuncionales(numeros)

const cuadrados = obtenerCuadrados (pares);

console.log(cuadrados)

pares.forEach((par, i) => console.log('El cuadrado de '+par+' es '+cuadrados[i]));