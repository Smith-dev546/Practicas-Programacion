import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promedioCalificaciones() {
    console.log('=== PROMEDIO DE CALIFICACIONES ===');
    console.log('Ingresa las calificaciones (números positivos)');
    console.log('Ingresa un número negativo para terminar y calcular el promedio\n');
    
    let suma = 0;
    let cantidad = 0;
    let calificacion;
    
    function solicitarCalificaciones() {
        do {
            rl.question(`Calificación ${cantidad + 1}: `, (input) => {
                calificacion = parseFloat(input);
                
                if (isNaN(calificacion)) {
                    console.log('Error: Ingresa un número válido\n');
                    solicitarCalificaciones();
                    return;
                }
                
                if (calificacion >= 0) {
                    // Calificación válida, sumar y continuar
                    suma += calificacion;
                    cantidad++;
                    console.log(`Calificación ${calificacion} agregada | Promedio actual: ${(suma / cantidad).toFixed(2)}\n`);
                    solicitarCalificaciones();
                } else {
                    // Calificación negativa, terminar
                    console.log('Calculando promedio final...');
                    calcularPromedioFinal(suma, cantidad);
                }
            });
        } while (calificacion >= 0);
    }
    
    function calcularPromedioFinal(sumaTotal, totalCalificaciones) {
        console.log('\n' + '='.repeat(40));
        console.log('RESULTADO FINAL');
        console.log('='.repeat(40));
        
        if (totalCalificaciones > 0) {
            const promedio = sumaTotal / totalCalificaciones;
            console.log(`Total de calificaciones: ${totalCalificaciones}`);
            console.log(`Suma total: ${sumaTotal}`);
            console.log(`PROMEDIO: ${promedio.toFixed(2)}`);
            
            // Clasificación del promedio
            if (promedio >= 90) {
                console.log('Excelente - Calificación A');
            } else if (promedio >= 80) {
                console.log('Muy bien - Calificación B');
            } else if (promedio >= 70) {
                console.log('Bien - Calificación C');
            } else if (promedio >= 60) {
                console.log('Regular - Calificación D');
            } else {
                console.log('Necesita mejorar - Calificación F');
            }
        } else {
            console.log('No se ingresaron calificaciones válidas');
        }
        
        rl.close();
    }
    
    solicitarCalificaciones();
}

// Iniciar el programa
promedioCalificaciones();