import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumaNumerosNaturales() {
    console.log('=== SUMA DE NÚMEROS NATURALES ===');
    console.log('Este programa calcula la suma de los números del 1 al N\n');
    
    rl.question('Ingresa un número natural N: ', (numeroInput) => {
        const N = parseInt(numeroInput);
        
        // Validar que sea un número natural
        if (isNaN(N) || N < 1) {
            console.log('Error: Debes ingresar un número natural mayor o igual a 1');
            rl.close();
            return;
        }
        
        let suma = 0;
        
        // Ciclo for para sumar los números
        console.log('\nProceso de suma:');
        for (let i = 1; i <= N; i++) {
            suma += i;
            if (i < N) {
                process.stdout.write(i + ' + ');
            } else {
                process.stdout.write(i + ' = ');
            }
        }
        
        console.log(suma);
        console.log(`\nResultado: La suma de los números del 1 al ${N} es ${suma}`);
        
        // Mostrar fórmula matemática
        const formula = N * (N + 1) / 2;
        console.log(`Fórmula matemática: ${N} × (${N} + 1) ÷ 2 = ${formula}`);
        
        rl.close();
    });
}

// Iniciar el programa
sumaNumerosNaturales();