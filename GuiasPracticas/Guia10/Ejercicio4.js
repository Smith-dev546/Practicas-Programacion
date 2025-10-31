import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar número al usuario
rl.question('Ingresa un número para calcular su factorial: ', (numeroInput) => {
  const numero = parseInt(numeroInput);
  
  // IIFE que calcula el factorial
  const factorial = ((n) => {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  })(numero);
  
  // Mostrar resultado
  console.log(`El factorial de ${numero} es: ${factorial}`);
  
  // Cerrar la interfaz
  rl.close();
});