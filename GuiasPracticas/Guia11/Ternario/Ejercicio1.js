import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);
    
    // Operador ternario
    const mensaje = (num % 2 === 0) ? "El número es par" : "El número es impar";
    
    console.log(`Número: ${num}`);
    console.log(`Resultado: ${mensaje}`);
    
    rl.close();
});