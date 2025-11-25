import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('VALIDADOR DE CALIFICACIONES\n');

// Pedir número de estudiantes
rl.question('¿Cuántos estudiantes vas a registrar? ', (numEstudiantes) => {
  const cantidad = parseInt(numEstudiantes);
  
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log('Debes ingresar un número válido de estudiantes.');
    rl.close();
    return;
  }
  
  // Contadores para cada categoría
  let excelente = 0;
  let bueno = 0;
  let satisfactorio = 0;
  let necesitaMejorar = 0;
  let contador = 0;
  
  console.log('\n' + '='.repeat(40));
  
  // Función recursiva para procesar cada estudiante
  function procesarEstudiante() {
    if (contador >= cantidad) {
      // Mostrar resultados cuando se terminen todos los estudiantes
      console.log('\n' + '='.repeat(50));
      console.log('RESULTADOS FINALES');
      console.log('='.repeat(50));
      console.log(`\nExcelente (90-100): ${excelente} estudiantes`);
      console.log(`Bueno (80-89): ${bueno} estudiantes`);
      console.log(`Satisfactorio (70-79): ${satisfactorio} estudiantes`);
      console.log(`Necesita mejorar (<70): ${necesitaMejorar} estudiantes`);
      console.log(`\n Total de estudiantes: ${cantidad}`);
      console.log('='.repeat(50));
      rl.close();
      return;
    }
    
    console.log(`\n ESTUDIANTE ${contador + 1}`);
    
    // Pedir nombre
    rl.question('Nombre: ', (nombre) => {
      // Función para pedir y validar calificación
      function pedirCalificacion() {
        rl.question('Calificación (0-100): ', (inputCalif) => {
          const calificacion = parseFloat(inputCalif);
          
          // Validar calificación con condicional
          if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
            console.log(' Error: La calificación debe ser un número entre 0 y 100');
            pedirCalificacion(); // Volver a pedir
          } else {
            // Clasificar con condicionales
            if (calificacion >= 90) {
              console.log(' Categoría: EXCELENTE');
              excelente++;
            } else if (calificacion >= 80) {
              console.log(' Categoría: BUENO');
              bueno++;
            } else if (calificacion >= 70) {
              console.log(' Categoría: SATISFACTORIO');
              satisfactorio++;
            } else {
              console.log(' Categoría: NECESITA MEJORAR');
              necesitaMejorar++;
            }
            
            contador++;
            procesarEstudiante(); // Procesar siguiente estudiante
          }
        });
      }
      
      pedirCalificacion();
    });
  }
  
  // Iniciar el procesamiento
  procesarEstudiante();
});