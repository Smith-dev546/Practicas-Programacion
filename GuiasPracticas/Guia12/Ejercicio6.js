import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sumarHastaNegativo() {
    console.log('=== SUMA HASTA NÚMERO NEGATIVO ===');
    console.log('Ingresa números para sumar. El programa terminará cuando');
    console.log('ingreses un número negativo.\n');
    
    let suma = 0;
    let contador = 0;
    let continuar = true;
    
    function solicitarNumero() {
        rl.question(`Número ${contador + 1}: `, (numeroInput) => {
            const numero = parseFloat(numeroInput);
            
            if (isNaN(numero)) {
                console.log('Por favor, ingresa un número válido\n');
                solicitarNumero();
                return;
            }
            
            // Verificar si el número es negativo
            if (numero < 0) {
                console.log('Número negativo detectado. Terminando programa...');
                mostrarResultados(suma, contador);
                return;
            }
            
            // Sumar el número y continuar
            suma += numero;
            contador++;
            console.log(`Sumado: ${numero} | Total acumulado: ${suma}\n`);
            
            solicitarNumero();
        });
    }
    
    function mostrarResultados(sumaTotal, cantidad) {
        console.log('\n' + '='.repeat(40));
        console.log('RESULTADOS FINALES');
        console.log('='.repeat(40));
        console.log(`Números sumados: ${cantidad}`);
        console.log(`Suma total: ${sumaTotal}`);
        
        if (cantidad > 0) {
            console.log(`Promedio: ${(sumaTotal / cantidad).toFixed(2)}`);
        } else {
            console.log('No se ingresaron números positivos');
        }
        
        rl.close();
    }
    
    solicitarNumero();
}

// Iniciar el programa
sumarHastaNegativo();