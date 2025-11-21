import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFactorial() {
    console.log('=== CÁLCULO DE FACTORIAL ===');
    console.log('El factorial de un número n (n!) es el producto de todos los números');
    console.log('enteros positivos desde 1 hasta n.\n');
    
    rl.question('Ingresa un número para calcular su factorial: ', (numeroInput) => {
        const numero = parseInt(numeroInput);
        
        // Validar que sea un número válido
        if (isNaN(numero) || numero < 0) {
            console.log('Error: Debes ingresar un número entero no negativo');
            rl.close();
            return;
        }
        
        // El factorial de 0 es 1 por definición
        if (numero === 0) {
            console.log('\n0! = 1 (por definición)');
            rl.close();
            return;
        }
        
        let factorial = 1;
        let proceso = '';
        
        console.log(`\nCalculando ${numero}!:`);
        console.log('=' .repeat(30));
        
        // Ciclo for para calcular el factorial
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
            proceso += i;
            if (i < numero) proceso += ' × ';
        }
        
        console.log(`${proceso} = ${factorial}`);
        console.log(`\nResultado: ${numero}! = ${factorial}`);
        
        rl.close();
    });
}

// Iniciar el programa
calcularFactorial();