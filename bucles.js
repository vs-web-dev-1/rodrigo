/*for (let huevos = 1 ; huevos <= 6 ; huevos++){
    console.log('Huevo: '+huevos)
    console.log('Se rompe un huevo')
    console.log('vaciar')
}*/

let huevos = 6;

/*while (huevos > 0){
    console.log('Huevo Nº: ${huevos}');
    console.log('Se rompe un huevo');
    console.log('vaciar');
    huevos = huevos -1 //huevos--
}*/

let sabores = ['cebolla', 'tomate', 'chorizo', 'gulas'];
console.log(sabores[0]);
sabores.push('queso');
console.log(sabores);
console.log(sabores.length);

for (let i=0; i <sabores.length;i = i+1){
    console.log(`en la posision ${i+1} tenemos ${sabores[i]}`);
}

let añadir = ( a,b) => a+b;
añadir(2,3)

sabores.forEach((sabor) => console.log(`FOR_EACH: ${sabor}`));

sabores.forEach