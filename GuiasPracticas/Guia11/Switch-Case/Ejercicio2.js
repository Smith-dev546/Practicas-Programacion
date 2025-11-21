import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número del 1 al 12: ', (numero) => {
    const mesNum = parseInt(numero);
    
    // Validaciones
    if (isNaN(mesNum)) {
        console.log('Error: Debes ingresar un número válido');
        rl.close();
        return;
    }
    
    if (mesNum < 1 || mesNum > 12) {
        console.log('Error: El número debe estar entre 1 y 12');
        rl.close();
        return;
    }
    
    let mes, dias;
    
    switch (mesNum) {
        case 1:
            mes = 'Enero';
            dias = 31;
            break;
        case 2:
            mes = 'Febrero';
            dias = 28; // O 29 en año bisiesto
            break;
        case 3:
            mes = 'Marzo';
            dias = 31;
            break;
        case 4:
            mes = 'Abril';
            dias = 30;
            break;
        case 5:
            mes = 'Mayo';
            dias = 31;
            break;
        case 6:
            mes = 'Junio';
            dias = 30;
            break;
        case 7:
            mes = 'Julio';
            dias = 31;
            break;
        case 8:
            mes = 'Agosto';
            dias = 31;
            break;
        case 9:
            mes = 'Septiembre';
            dias = 30;
            break;
        case 10:
            mes = 'Octubre';
            dias = 31;
            break;
        case 11:
            mes = 'Noviembre';
            dias = 30;
            break;
        case 12:
            mes = 'Diciembre';
            dias = 31;
            break;
    }
    
    console.log(`Mes: ${mes}`);
    console.log(`Días: ${dias}`);
    
    rl.close();
});