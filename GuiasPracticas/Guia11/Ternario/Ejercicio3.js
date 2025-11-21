import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularPrecioFinal(precio, esMiembro) {
    // Operador ternario para aplicar descuento
    const precioFinal = esMiembro ? precio * 0.8 : precio;
    return precioFinal;
}

function formatearPrecio(precio) {
    return `$${precio.toFixed(2)}`;
}

rl.question('Ingresa el precio del producto: ', (precioInput) => {
    rl.question('¿Es miembro? (sí/no): ', (respuestaMiembro) => {
        const precio = parseFloat(precioInput);
        const esMiembro = respuestaMiembro.toLowerCase() === 'sí' || 
                         respuestaMiembro.toLowerCase() === 'si' || 
                         respuestaMiembro.toLowerCase() === 'yes';
        
        if (isNaN(precio) || precio <= 0) {
            console.log('Error: Ingresa un precio válido');
            rl.close();
            return;
        }
        
        const precioFinal = calcularPrecioFinal(precio, esMiembro);
        
        console.log(`DETALLE DE COMPRA`);
        console.log(`Precio original: ${formatearPrecio(precio)}`);
        console.log(`Miembro: ${esMiembro ? 'SÍ' : 'NO'}`);
        console.log(`Descuento: ${esMiembro ? '20%' : '0%'}`);
        console.log(`Precio final: ${formatearPrecio(precioFinal)}`);
        
        if (esMiembro) {
            console.log(`Ahorro: ${formatearPrecio(precio - precioFinal)}`);
        }
        
        rl.close();
    });
});