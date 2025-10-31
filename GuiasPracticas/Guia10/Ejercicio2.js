import readline from 'readline';

// Arrow function para calcular descuento
const calcularDescuento = (precio, descuento) => precio - (precio * descuento / 100);

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar datos al usuario
rl.question('Ingresa el precio: ', (precioInput) => {
  rl.question('Ingresa el porcentaje de descuento: ', (descuentoInput) => {
    // Convertir entradas a números
    const precio = parseFloat(precioInput);
    const descuento = parseFloat(descuentoInput);
    
    // Calcular precio con descuento
    const precioFinal = calcularDescuento(precio, descuento);
    
    // Mostrar resultado
    console.log(`Precio original: $${precio}`);
    console.log(`Descuento: ${descuento}%`);
    console.log(`Precio final: $${precioFinal.toFixed(2)}`);
    
    // Cerrar la interfaz
    rl.close();
  });
});