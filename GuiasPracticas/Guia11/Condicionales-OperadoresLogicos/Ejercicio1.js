import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un año: ', (año) => {
    const añoNum = parseInt(año);
    
    // Validar que sea un año válido
    if (isNaN(añoNum) || añoNum < 0) {
        console.log('Por favor, ingresa un año válido (número positivo)');
    } else {
        if ((añoNum % 4 === 0 && añoNum % 100 !== 0) || (añoNum % 400 === 0)) {
            console.log(`El año ${añoNum} es BISIESTO`);
        } else {
            console.log(`El año ${añoNum} NO es bisiesto`);
        }
    }
    
    rl.close();
});