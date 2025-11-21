import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contadorParesImpares() {
    console.log('=== CONTADOR DE NÚMEROS PARES E IMPARES ===');
    console.log('Ingresa 10 números y contaré cuántos son pares e impares\n');
    
    let contador = 1;
    let pares = 0;
    let impares = 0;
    
    function solicitarNumero() {
        if (contador <= 10) {
            rl.question(`Número ${contador}/10: `, (numeroInput) => {
                const numero = parseFloat(numeroInput);
                
                if (isNaN(numero)) {
                    console.log('Error: Ingresa un número válido');
                    solicitarNumero();
                    return;
                }
                
                // Verificar si es par o impar
                if (numero % 2 === 0) {
                    pares++;
                    console.log(`${numero} es PAR`);
                } else {
                    impares++;
                    console.log(`${numero} es IMPAR`);
                }
                
                contador++;
                solicitarNumero();
            });
        } else {
            // Mostrar resultados finales
            console.log('\n=== RESULTADOS FINALES ===');
            console.log(`Números pares: ${pares}`);
            console.log(`Números impares: ${impares}`);
            console.log(`Total de números: 10`);
            
            // Porcentajes
            console.log(`\nPorcentajes:`);
            console.log(`Pares: ${(pares / 10 * 100).toFixed(1)}%`);
            console.log(`Impares: ${(impares / 10 * 100).toFixed(1)}%`);
            
            rl.close();
        }
    }
    
    solicitarNumero();
}

// Iniciar el programa
contadorParesImpares();