import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu edad: ', (edad) => {
    const edadNum = parseInt(edad);
    
    if (edadNum < 18) {
        console.log(`Con ${edadNum} años eres MENOR DE EDAD`);
    } else if (edadNum >= 18 && edadNum <= 64) {
        console.log(`Con ${edadNum} años eres ADULTO`);
    } else {
        console.log(`Con ${edadNum} años eres ADULTO MAYOR`);
    }
    
    rl.close();
});