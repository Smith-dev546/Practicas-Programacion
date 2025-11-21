import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número del 1 al 7: ', (numero) => {
    const diaNum = parseInt(numero);
    let diaSemana;
    
    switch (diaNum) {
        case 1:
            diaSemana = 'Lunes';
            break;
        case 2:
            diaSemana = 'Martes';
            break;
        case 3:
            diaSemana = 'Miércoles';
            break;
        case 4:
            diaSemana = 'Jueves';
            break;
        case 5:
            diaSemana = 'Viernes';
            break;
        case 6:
            diaSemana = 'Sábado';
            break;
        case 7:
            diaSemana = 'Domingo';
            break;
        default:
            console.log('Error: El número debe estar entre 1 y 7');
            rl.close();
            return;
    }
    
    console.log(`${diaNum} = ${diaSemana}`);
    rl.close();
});