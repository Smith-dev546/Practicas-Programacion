import readline from 'readline';

// IIFE que crea un contador privado
const contador = (() => {
  let cuenta = 0;
  
  return {
    incrementar: () => cuenta++,
    obtenerValor: () => cuenta
  };
})();

// Crear interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa simple
console.log('Contador - Presiona Enter para incrementar, escribe "valor" para ver el valor, "salir" para terminar');

function preguntar() {
  rl.question('¿Qué quieres hacer? ', (respuesta) => {
    if (respuesta === '') {
      contador.incrementar();
      console.log('Incrementado!');
    } else if (respuesta === 'valor') {
      console.log('Valor actual:', contador.obtenerValor());
    } else if (respuesta === 'salir') {
      console.log('Valor final:', contador.obtenerValor());
      rl.close();
      return;
    }
    preguntar();
  });
}

preguntar();