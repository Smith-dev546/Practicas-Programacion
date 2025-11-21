import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function autenticarUsuario() {
    rl.question('Ingresa tu nombre de usuario: ', (usuario) => {
        if (usuario !== 'admin') {
            console.log('Usuario no encontrado');
            rl.close();
            return;
        }
        
        // Usuario correcto, pedir contraseña
        let intentos = 3;
        
        function pedirContraseña() {
            rl.question('Ingresa tu contraseña: ', (contraseña) => {
                if (contraseña === '1234') {
                    console.log('Acceso concedido');
                    rl.close();
                } else {
                    intentos--;
                    if (intentos > 0) {
                        console.log(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
                        pedirContraseña(); // Llamada recursiva
                    } else {
                        console.log('Demasiados intentos fallidos. Acceso bloqueado.');
                        rl.close();
                    }
                }
            });
        }
        
        pedirContraseña();
    });
}

// Iniciar el proceso de autenticación
autenticarUsuario();