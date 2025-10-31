import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function para filtrar números pares
const filtrarPares = (numeros) => numeros.filter(numero => numero % 2 === 0);

// Solicitar entrada de datos al usuario
rl.question('Ingresa números separados por comas (ej: 1,2,3,4,5): ', (input) => {
  // Convertir la entrada en un array de números
  const numeros = input.split(',').map(num => parseInt(num.trim()));
  
  // Filtrar los números pares
  const pares = filtrarPares(numeros);
  
  // Mostrar el resultado
  console.log('Números pares:', pares);
  
  // Cerrar la interfaz
  rl.close();
});