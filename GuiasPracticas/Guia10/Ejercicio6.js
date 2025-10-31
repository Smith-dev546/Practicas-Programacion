import readline from 'readline';
import fs from 'fs';

// IIFE que inicializa la configuración
const configuracion = (() => {
  try {
    // Intentar cargar configuración existente
    if (fs.existsSync('config.json')) {
      const configData = fs.readFileSync('config.json', 'utf8');
      console.log('Configuración cargada desde archivo');
      return JSON.parse(configData);
    }
  } catch (error) {
    // Si hay error, usar valores por defecto
  }
  
  // Valores por defecto
  const configPorDefecto = {
    tema: 'claro',
    idioma: 'es',
    notificaciones: true
  };
  
  // Guardar configuración por defecto
  fs.writeFileSync('config.json', JSON.stringify(configPorDefecto));
  console.log('Configuración inicializada con valores por defecto');
  return configPorDefecto;
})();

// Crear interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mostrar configuración
console.log('\nConfiguración actual:');
console.log('- Tema:', configuracion.tema);
console.log('- Idioma:', configuracion.idioma);
console.log('- Notificaciones:', configuracion.notificaciones ? 'Activadas' : 'Desactivadas');

rl.close();