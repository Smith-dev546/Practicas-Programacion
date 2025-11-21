import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función con operador ternario
function puedeVotar(edad) {
    return (edad >= 18) ? "PUEDE VOTAR" : "NO PUEDE VOTAR";
}

rl.question('Ingresa tu edad: ', (edadInput) => {
    const edad = parseInt(edadInput);
    
    // Validación con operador ternario
    const esValida = !isNaN(edad) && edad >= 0 && edad <= 120;
    
    if (!esValida) {
        console.log('Error: Ingresa una edad válida (0-120)');
        rl.close();
        return;
    }
    
    const resultado = puedeVotar(edad);
    console.log(`Edad: ${edad} años`);
    console.log(`${resultado}`);
    
    rl.close();
});