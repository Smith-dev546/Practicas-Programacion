import readline from 'readline';

// Función que crea el gestor de tareas con lista privada
function crearGestorTareas() {
  // Lista privada de tareas
  let tareas = [];
  
  // Retornar métodos públicos
  return {
    agregarTarea: (descripcion) => {
      const nuevaTarea = {
        id: tareas.length + 1,
        descripcion: descripcion,
        completada: false
      };
      tareas.push(nuevaTarea);
      console.log(`✓ Tarea agregada: "${descripcion}"`);
    },
    
    completarTarea: (id) => {
      const tarea = tareas.find(t => t.id === id);
      if (tarea) {
        tarea.completada = true;
        console.log(`✓ Tarea ${id} marcada como completada`);
      } else {
        console.log(`✗ Tarea ${id} no encontrada`);
      }
    },
    
    listarPendientes: () => {
      const pendientes = tareas.filter(t => !t.completada);
      console.log('\n--- TAREAS PENDIENTES ---');
      if (pendientes.length === 0) {
        console.log('No hay tareas pendientes');
      } else {
        pendientes.forEach(tarea => {
          console.log(`${tarea.id}. ${tarea.descripcion}`);
        });
      }
      return pendientes;
    },
    
    contarTareas: () => {
      const total = tareas.length;
      const completadas = tareas.filter(t => t.completada).length;
      const pendientes = total - completadas;
      
      console.log(`\n--- ESTADÍSTICAS ---`);
      console.log(`Total: ${total}`);
      console.log(`Completadas: ${completadas}`);
      console.log(`Pendientes: ${pendientes}`);
      
      return { total, completadas, pendientes };
    }
  };
}

// Crear interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crear instancia del gestor
const gestor = crearGestorTareas();

// Función para mostrar menú
function mostrarMenu() {
  console.log('\n=== GESTOR DE TAREAS ===');
  console.log('1. Agregar tarea');
  console.log('2. Completar tarea');
  console.log('3. Listar pendientes');
  console.log('4. Contar tareas');
  console.log('5. Salir');
}

// Función principal
function ejecutarPrograma() {
  mostrarMenu();
  
  rl.question('\nSelecciona una opción (1-5): ', (opcion) => {
    switch (opcion) {
      case '1':
        rl.question('Descripción de la tarea: ', (descripcion) => {
          gestor.agregarTarea(descripcion);
          ejecutarPrograma();
        });
        break;
        
      case '2':
        rl.question('ID de la tarea a completar: ', (idInput) => {
          const id = parseInt(idInput);
          gestor.completarTarea(id);
          ejecutarPrograma();
        });
        break;
        
      case '3':
        gestor.listarPendientes();
        ejecutarPrograma();
        break;
        
      case '4':
        gestor.contarTareas();
        ejecutarPrograma();
        break;
        
      case '5':
        console.log('¡Hasta luego!');
        rl.close();
        break;
        
      default:
        console.log('Opción no válida');
        ejecutarPrograma();
        break;
    }
  });
}

// Iniciar programa
ejecutarPrograma();