import readline from 'readline';

// Arrow function para ordenar por longitud
const ordenarPorLongitud = (palabras) => palabras.sort((a, b) => a.length - b.length);

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar datos al usuario
rl.question('Ingresa palabras separadas por comas: ', (input) => {
  // Convertir la entrada en un array de strings
  const palabras = input.split(',').map(palabra => palabra.trim());
  
  // Ordenar las palabras por longitud
  const palabrasOrdenadas = ordenarPorLongitud(palabras);
  
  // Mostrar resultado
  console.log('Palabras originales:', palabras);
  console.log('Palabras ordenadas por longitud:', palabrasOrdenadas);
  
  // Cerrar la interfaz
  rl.close();
});