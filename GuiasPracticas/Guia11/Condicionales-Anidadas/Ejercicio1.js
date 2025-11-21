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
            
            // Validaciones
            if (isNaN(a) || isNaN(b) || isNaN(c)) {
                console.log('Error: Todos los valores deben ser números válidos');
                rl.close();
                return;
            }
            
            let mayor, medio, menor;
            
            // Condicionales anidadas para ordenar los números
            if (a >= b) {
                if (a >= c) {
                    mayor = a;
                    if (b >= c) {
                        medio = b;
                        menor = c;
                    } else {
                        medio = c;
                        menor = b;
                    }
                } else {
                    mayor = c;
                    medio = a;
                    menor = b;
                }
            } else {
                if (b >= c) {
                    mayor = b;
                    if (a >= c) {
                        medio = a;
                        menor = c;
                    } else {
                        medio = c;
                        menor = a;
                    }
                } else {
                    mayor = c;
                    medio = b;
                    menor = a;
                }
            }
            
            console.log(`Números originales: ${a}, ${b}, ${c}`);
            console.log(`Ordenados de mayor a menor: ${mayor}, ${medio}, ${menor}`);
            
            rl.close();
        });
    });
});