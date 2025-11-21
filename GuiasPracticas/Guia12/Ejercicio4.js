import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contadorRegresivo() {
    console.log('=== CONTADOR REGRESIVO ===');
    console.log('Este programa muestra números desde N hasta 1');
    console.log('usando ambos ciclos: for y while\n');
    
    rl.question('Ingresa un número N: ', (numeroInput) => {
        const N = parseInt(numeroInput);
        
        // Validar que sea un número válido
        if (isNaN(N) || N < 1) {
            console.log('Error: Debes ingresar un número natural mayor o igual a 1');
            rl.close();
            return;
        }
        
        console.log(`\nContador regresivo desde ${N} hasta 1:`);
        console.log('=' .repeat(40));
        
        // Contador regresivo con ciclo FOR
        console.log('\nUSANDO CICLO FOR:');
        console.log('-' .repeat(20));
        for (let i = N; i >= 1; i--) {
            console.log(i);
        }
        
        // Contador regresivo con ciclo WHILE
        console.log('\nUSANDO CICLO WHILE:');
        console.log('-' .repeat(20));
        let contador = N;
        while (contador >= 1) {
            console.log(contador);
            contador--;
        }
        
        console.log('=' .repeat(40));
        console.log('¡Cuenta regresiva completada!');
        
        rl.close();
    });
}

// Iniciar el programa
contadorRegresivo();