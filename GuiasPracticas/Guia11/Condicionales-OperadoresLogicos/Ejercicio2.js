import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una calificación numérica (0-100): ', (calificacion) => {
    const nota = parseFloat(calificacion);
    
    if (nota >= 90 && nota <= 100) {
        console.log(`Calificación ${nota} = A`);
    } else if (nota >= 80 && nota <= 89) {
        console.log(`Calificación ${nota} = B`);
    } else if (nota >= 70 && nota <= 79) {
        console.log(`Calificación ${nota} = C`);
    } else if (nota >= 60 && nota <= 69) {
        console.log(`Calificación ${nota} = D`);
    } else if (nota >= 0 && nota < 60) {
        console.log(`Calificación ${nota} = F`);
    } else {
        console.log('Error: La calificación debe estar entre 0 y 100');
    }
    
    rl.close();
});