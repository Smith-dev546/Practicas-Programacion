import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
        rl.question('Ingresa la operación (+, -, *, /, %): ', (operacion) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            
            // Validaciones
            if (isNaN(a) || isNaN(b)) {
                console.log('Error: Ambos valores deben ser números válidos');
                rl.close();
                return;
            }
            
            let resultado;
            let operacionValida = true;
            
            switch (operacion) {
                case '+':
                    resultado = a + b;
                    break;
                case '-':
                    resultado = a - b;
                    break;
                case '*':
                    resultado = a * b;
                    break;
                case '/':
                    if (b === 0) {
                        console.log('Error: No se puede dividir entre cero');
                        operacionValida = false;
                    } else {
                        resultado = a / b;
                    }
                    break;
                case '%':
                    if (b === 0) {
                        console.log('Error: No se puede calcular módulo entre cero');
                        operacionValida = false;
                    } else {
                        resultado = a % b;
                    }
                    break;
                default:
                    console.log('Error: Operación no válida. Usa +, -, *, /, %');
                    operacionValida = false;
            }
            
            if (operacionValida) {
                console.log(`${a} ${operacion} ${b} = ${resultado}`);
            }
            
            rl.close();
        });
    });
});