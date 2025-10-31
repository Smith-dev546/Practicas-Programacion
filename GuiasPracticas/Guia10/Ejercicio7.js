import readline from 'readline';

// Función externa que define la operación (nivel 1)
function crearCalculadoraAvanzada(operacion) {
  
  // Función intermedia que define el primer número (nivel 2)
  function definirPrimerNumero(num1) {
    
    // Función interna que recibe el segundo número (nivel 3)
    function calcularConSegundoNumero(num2) {
      // Scope chain: puede acceder a operacion, num1 y num2
      switch (operacion) {
        case 'suma':
          return num1 + num2;
        case 'resta':
          return num1 - num2;
        case 'multiplicacion':
          return num1 * num2;
        case 'division':
          return num2 !== 0 ? num1 / num2 : 'Error: división por cero';
        default:
          return 'Operación no válida';
      }
    }
    
    return calcularConSegundoNumero;
  }
  
  return definirPrimerNumero;
}

// Crear interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Programa principal
function iniciarCalculadora() {
  console.log('\n=== CALCULADORA AVANZADA ===');
  console.log('Operaciones disponibles: suma, resta, multiplicacion, division');
  
  rl.question('Ingresa la operación: ', (operacion) => {
    rl.question('Ingresa el primer número: ', (num1Input) => {
      const num1 = parseFloat(num1Input);
      
      // Nivel 1: definir operación
      const calculadora = crearCalculadoraAvanzada(operacion);
      
      // Nivel 2: definir primer número
      const calculadoraConPrimerNumero = calculadora(num1);
      
      rl.question('Ingresa el segundo número: ', (num2Input) => {
        const num2 = parseFloat(num2Input);
        
        // Nivel 3: ejecutar cálculo con segundo número
        const resultado = calculadoraConPrimerNumero(num2);
        
        console.log(`\nResultado: ${num1} ${operacion} ${num2} = ${resultado}`);
        
        rl.close();
      });
    });
  });
}

// Ejecutar calculadora
iniciarCalculadora();