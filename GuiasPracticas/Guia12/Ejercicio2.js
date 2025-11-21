import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tablaMultiplicar() {
    console.log('=== TABLA DE MULTIPLICAR ===');
    console.log('Este programa muestra la tabla de multiplicar de un número del 1 al 10\n');
    
    rl.question('Ingresa un número: ', (numeroInput) => {
        const numero = parseFloat(numeroInput);
        
        // Validar que sea un número válido
        if (isNaN(numero)) {
            console.log('Error: Debes ingresar un número válido');
            rl.close();
            return;
        }
        
        console.log(`\nTabla de multiplicar del ${numero}:`);
        console.log('--------------------------------');
        
        // Ciclo for para generar la tabla del 1 al 10
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            console.log(`${numero} × ${i} = ${resultado}`);
        }
        
        console.log('--------------------------------');
        
        rl.close();
    });
}

// Iniciar el programa
tablaMultiplicar();