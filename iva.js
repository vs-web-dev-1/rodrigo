let precio = 1.2;
const iva = 21;
let precioIva = precio*(1+iva/100);

console.log('El precio del boligrafo con iva es: '+precioIva+' €');
console.log('el precio sin iva es: '+precio+' €.');

// Funciones
function calcularCuotaIva(precioProducto, ivaProducto=21){
    cuota = precioProducto*(ivaProducto/100);
    return cuota;
}

function calcularTotalIva(precioProducto, ivaProducto=21){
    total = precioProducto*(1+ivaProducto/100)
    return total;
}

let boli = {
    iva: calcularCuotaIva(1.2),
    total: calcularTotalIva(1.2)
}

let leche = {
    iva: calcularCuotaIva(1.1,4),
    total: calcularTotalIva(1.1,4)
}
console.log('El precio del boli con iva: '+boli.total+' y la cuota del iva: '+boli.iva+' €')
console.log('El precio de la leche con iva: '+leche.total+' y la cuota del iva: '+leche.iva+' €')
