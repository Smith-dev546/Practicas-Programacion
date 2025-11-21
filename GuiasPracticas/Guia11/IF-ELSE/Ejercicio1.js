import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', (numero) => {
    const num = parseFloat(numero);
    
    if (num > 0) {
        console.log(`El número ${num} es POSITIVO`);
    } else if (num < 0) {
        console.log(`El número ${num} es NEGATIVO`);
    } else {
        console.log(`El número es CERO`);
    }
    
    rl.close();
});