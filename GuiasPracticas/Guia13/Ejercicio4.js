import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('GENERADOR DE SERIE NUMERICA');

rl.question('Numero inicial: ', (inicioStr) => {
    rl.question('Numero final: ', (finalStr) => {
        const inicio = parseInt(inicioStr);
        const final = parseInt(finalStr);
        
        console.log('\nOpciones de filtro:');
        console.log('1 - Mostrar todos los numeros');
        console.log('2 - Mostrar solo pares');
        console.log('3 - Mostrar solo impares');
        console.log('4 - Mostrar multiplos de un numero');
        
        rl.question('Selecciona una opcion (1-4): ', (opcion) => {
            if (opcion === '4') {
                rl.question('Ingresa el numero para los multiplos: ', (multiploStr) => {
                    const multiplo = parseInt(multiploStr);
                    generarSerie(inicio, final, opcion, multiplo);
                    rl.close();
                });
            } else {
                generarSerie(inicio, final, opcion);
                rl.close();
            }
        });
    });
});

function generarSerie(inicio, final, filtro, multiplo = 0) {
    console.log(`\nSerie numerica de ${inicio} a ${final}:`);
    console.log('--------------------------------');
    
    for (let i = inicio; i <= final; i++) {
        let mostrar = false;
        
        // Aplicar filtros con condicionales
        if (filtro === '1') {
            mostrar = true;
        } else if (filtro === '2') {
            if (i % 2 === 0) mostrar = true;
        } else if (filtro === '3') {
            if (i % 2 !== 0) mostrar = true;
        } else if (filtro === '4') {
            if (i % multiplo === 0) mostrar = true;
        }
        
        if (mostrar) {
            console.log(i);
        }
    }
}