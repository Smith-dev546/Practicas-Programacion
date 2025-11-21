import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Base de datos simulada de cuentas
const cuentasBancarias = {
    '1234': { pin: '5678', saldo: 1000, titular: 'Juan Pérez' },
    '5678': { pin: '1234', saldo: 2500, titular: 'María García' },
    '9012': { pin: '3456', saldo: 750, titular: 'Carlos López' },
    '3456': { pin: '9012', saldo: 1500, titular: 'Ana Martínez' }
};

function sistemaBancario() {
    console.log('SISTEMA BANCARIO AUTOMATIZADO');
    console.log('=================================\n');
    
    rl.question('Ingresa tu número de cuenta (4 dígitos): ', (numeroCuenta) => {
        // Validar número de cuenta
        if (!/^\d{4}$/.test(numeroCuenta)) {
            console.log('Error: El número de cuenta debe tener 4 dígitos');
            rl.close();
            return;
        }
        
        if (!cuentasBancarias[numeroCuenta]) {
            console.log('Cuenta no encontrada');
            console.log('Verifica el número de cuenta e intenta nuevamente');
            rl.close();
            return;
        }
        
        const cuenta = cuentasBancarias[numeroCuenta];
        console.log(`Cuenta encontrada: ${cuenta.titular}`);
        
        // Verificar PIN
        verificarPIN(cuenta, numeroCuenta);
    });
}

function verificarPIN(cuenta, numeroCuenta) {
    let intentosPIN = 3;
    
    function pedirPIN() {
        rl.question(`Ingresa tu PIN (${intentosPIN} intentos restantes): `, (pin) => {
            if (!/^\d{4}$/.test(pin)) {
                console.log('El PIN debe tener 4 dígitos');
                pedirPIN();
                return;
            }
            
            if (pin === cuenta.pin) {
                console.log('PIN correcto');
                pedirMonto(cuenta, numeroCuenta);
            } else {
                intentosPIN--;
                if (intentosPIN > 0) {
                    console.log(`PIN incorrecto. Te quedan ${intentosPIN} intentos`);
                    pedirPIN();
                } else {
                    console.log('Demasiados intentos fallidos');
                    console.log('uenta bloqueada por seguridad');
                    console.log('Contacta al servicio al cliente');
                    rl.close();
                }
            }
        });
    }
    
    pedirPIN();
}

function pedirMonto(cuenta, numeroCuenta) {
    rl.question(`Ingresa el monto a retirar (Saldo disponible: $${cuenta.saldo}): $`, (montoInput) => {
        const monto = parseFloat(montoInput);
        
        // Validaciones del monto
        if (isNaN(monto) || monto <= 0) {
            console.log('Error: Ingresa un monto válido mayor a 0');
            pedirMonto(cuenta, numeroCuenta);
            return;
        }
        
        if (monto > cuenta.saldo) {
            console.log('Fondos insuficientes');
            console.log(`Saldo disponible: $${cuenta.saldo}`);
            console.log(`Monto solicitado: $${monto}`);
            console.log('Operación cancelada');
            rl.close();
            return;
        }
        
        if (monto % 1 !== 0) {
            console.log('Error: El monto debe ser un número entero');
            pedirMonto(cuenta, numeroCuenta);
            return;
        }
        
        // Procesar retiro
        procesarRetiro(cuenta, numeroCuenta, monto);
    });
}

function procesarRetiro(cuenta, numeroCuenta, monto) {
    // Actualizar saldo
    cuenta.saldo -= monto;
    
    console.log('RETIRO EXITOSO');
    console.log('═════════════════');
    console.log(`Titular: ${cuenta.titular}`);
    console.log(`Cuenta: ${numeroCuenta}`);
    console.log(`Monto retirado: $${monto}`);
    console.log(`Nuevo saldo: $${cuenta.saldo}`);
    console.log(`Transacción: ${new Date().toLocaleString()}`);
    console.log('Guarda este comprobante');
    
    rl.close();
}

// Iniciar el sistema
sistemaBancario();