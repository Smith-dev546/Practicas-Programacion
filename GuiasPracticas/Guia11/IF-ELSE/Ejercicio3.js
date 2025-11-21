import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
        rl.question('Ingresa el tercer número: ', (num3) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            const c = parseFloat(num3);
            
            let mayor;
            
            if (a >= b && a >= c) {
                mayor = a;
            } else if (b >= a && b >= c) {
                mayor = b;
            } else {
                mayor = c;
            }
            
            console.log(`De los números ${a}, ${b} y ${c}`);
            console.log(`El mayor es: ${mayor}`);
            
            rl.close();
        });
    });
});