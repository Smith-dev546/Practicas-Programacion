import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables del juego
let recordRondas = Infinity;
const MAX_RECHAZOS = 3;
const NUMERO_OBJETIVO_MIN = 50;
const NUMERO_OBJETIVO_MAX = 100;

// Estrategias disponibles
const ESTRATEGIAS = {
    ALEATORIO: 'aleatorio',
    PARES: 'pares',
    PRIMOS: 'primos',
    COMBINADO: 'combinado'
};

// Función para hacer preguntas con promesas
function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero < 2) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Función para generar números según la estrategia
function generarNumero(estrategia) {
    const min = 1;
    const max = 20;
    let numero;
    
    switch(estrategia) {
        case ESTRATEGIAS.ALEATORIO:
            numero = Math.floor(Math.random() * (max - min + 1)) + min;
            break;
            
        case ESTRATEGIAS.PARES:
            do {
                numero = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (numero % 2 !== 0);
            break;
            
        case ESTRATEGIAS.PRIMOS:
            const primos = [];
            for (let i = min; i <= max; i++) {
                if (esPrimo(i)) primos.push(i);
            }
            numero = primos[Math.floor(Math.random() * primos.length)];
            break;
            
        case ESTRATEGIAS.COMBINADO:
            const opciones = [ESTRATEGIAS.ALEATORIO, ESTRATEGIAS.PARES, ESTRATEGIAS.PRIMOS];
            const estrategiaAleatoria = opciones[Math.floor(Math.random() * opciones.length)];
            numero = generarNumero(estrategiaAleatoria);
            break;
            
        default:
            numero = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    return numero;
}

// Función para mostrar el menú de estrategias
async function seleccionarEstrategia() {
    console.log("\n🎯 SELECCIONA TU ESTRATEGIA:");
    console.log("1️⃣  Aleatorio (cualquier número del 1-20)");
    console.log("2️⃣  Solo Pares (números pares del 1-20)");
    console.log("3️⃣  Solo Primos (números primos del 1-20)");
    console.log("4️⃣  Combinado (mezcla aleatoria de las anteriores)");
    
    let opcion;
    do {
        opcion = await preguntar("👉 Elige una estrategia (1-4): ");
        if (!['1', '2', '3', '4'].includes(opcion)) {
            console.log("❌ Por favor, elige una opción válida (1-4)");
        }
    } while (!['1', '2', '3', '4'].includes(opcion));
    
    const estrategiasMap = {
        '1': ESTRATEGIAS.ALEATORIO,
        '2': ESTRATEGIAS.PARES,
        '3': ESTRATEGIAS.PRIMOS,
        '4': ESTRATEGIAS.COMBINADO
    };
    
    return estrategiasMap[opcion];
}

// Función para mostrar el estado actual del juego
function mostrarEstado(objetivo, puntuacionActual, rondas, rechazosRestantes, numerosAceptados) {
    console.log("\n" + "=".repeat(50));
    console.log("🏁 CARRERA DE NÚMEROS - ESTADO ACTUAL");
    console.log("=".repeat(50));
    console.log(`🎯 Objetivo: ${objetivo}`);
    console.log(`📊 Puntuación actual: ${puntuacionActual}`);
    console.log(`📈 Diferencia restante: ${objetivo - puntuacionActual}`);
    console.log(`🔄 Ronda: ${rondas}`);
    console.log(`❌ Rechazos disponibles: ${rechazosRestantes}`);
    console.log(`📝 Números aceptados: ${numerosAceptados.join(' → ')}`);
    console.log("=".repeat(50));
}

// Función para mostrar el récord actual
function mostrarRecord() {
    if (recordRondas === Infinity) {
        console.log("🏆 Récord actual: Aún no hay récord establecido");
    } else {
        console.log(`🏆 Récord actual: ${recordRondas} rondas`);
    }
}

// Función para validar entrada del jugador
async function preguntarAceptarRechazar() {
    let respuesta;
    do {
        respuesta = await preguntar("¿Aceptas este número? (s/n): ");
        respuesta = respuesta.toLowerCase();
        
        if (respuesta !== 's' && respuesta !== 'n') {
            console.log("❌ Por favor, ingresa 's' para aceptar o 'n' para rechazar");
        }
    } while (respuesta !== 's' && respuesta !== 'n');
    
    return respuesta === 's';
}

// Función para mostrar instrucciones
function mostrarInstrucciones() {
    console.log("\n📚 INSTRUCCIONES DEL JUEGO:");
    console.log("• Debes alcanzar exactamente el número objetivo empezando desde 0");
    console.log("• En cada ronda se te ofrece un número según tu estrategia");
    console.log("• Puedes aceptar o rechazar el número");
    console.log(`• Solo tienes ${MAX_RECHAZOS} rechazos disponibles`);
    console.log("• Si te pasas del objetivo, pierdes");
    console.log("• Si usas todos tus rechazos, pierdes");
    console.log("• ¡Intenta ganar en el menor número de rondas posible!");
}

// Función principal del juego
async function jugarCarreraDeNumeros() {
    // Configuración inicial
    const objetivo = Math.floor(Math.random() * (NUMERO_OBJETIVO_MAX - NUMERO_OBJETIVO_MIN + 1)) + NUMERO_OBJETIVO_MIN;
    const estrategia = await seleccionarEstrategia();
    
    // Estado del juego
    let puntuacionActual = 0;
    let rondas = 0;
    let rechazosRestantes = MAX_RECHAZOS;
    let numerosAceptados = [];
    let juegoActivo = true;
    let gano = false;
    
    console.clear();
    console.log("\n" + "=".repeat(50));
    console.log("🏁 CARRERA DE NÚMEROS 🏁");
    console.log("=".repeat(50));
    
    mostrarInstrucciones();
    mostrarRecord();
    
    // Bucle principal del juego
    while (juegoActivo) {
        rondas++;
        
        mostrarEstado(objetivo, puntuacionActual, rondas, rechazosRestantes, numerosAceptados);
        
        // Generar número según estrategia
        const numeroGenerado = generarNumero(estrategia);
        console.log(`\n🎲 Número generado: ${numeroGenerado}`);
        
        // Preguntar si acepta o rechaza
        const aceptar = await preguntarAceptarRechazar();
        
        if (aceptar) {
            // Aceptar el número
            puntuacionActual += numeroGenerado;
            numerosAceptados.push(numeroGenerado);
            
            // Verificar condiciones de victoria/derrota
            if (puntuacionActual === objetivo) {
                juegoActivo = false;
                gano = true;
                console.log("\n🎉 ¡LO LOGRASTE! ¡Llegaste exactamente al objetivo!");
            } else if (puntuacionActual > objetivo) {
                juegoActivo = false;
                gano = false;
                console.log("\n💀 ¡TE PASASTE! La puntuación superó el objetivo");
            } else {
                console.log(`✅ Número ${numeroGenerado} aceptado. Nueva puntuación: ${puntuacionActual}`);
            }
        } else {
            // Rechazar el número
            rechazosRestantes--;
            console.log(`❌ Número rechazado. Rechazos restantes: ${rechazosRestantes}`);
            
            if (rechazosRestantes === 0) {
                juegoActivo = false;
                gano = false;
                console.log("\n💀 ¡SE TE ACABARON LOS RECHAZOS! Has perdido el juego");
            }
        }
    }
    
    // Mostrar resultado final
    console.log("\n" + "=".repeat(50));
    console.log("🏁 RESULTADO FINAL");
    console.log("=".repeat(50));
    console.log(`🎯 Objetivo: ${objetivo}`);
    console.log(`📊 Puntuación final: ${puntuacionActual}`);
    console.log(`🔄 Rondas jugadas: ${rondas}`);
    console.log(`📝 Camino recorrido: 0 → ${numerosAceptados.join(' → ')}`);
    
    if (gano) {
        console.log("\n🎉 ¡FELICIDADES! ¡HAS GANADO! 🎉");
        
        // Actualizar récord
        if (rondas < recordRondas) {
            console.log(`🏆 ¡NUEVO RÉCORD! ${rondas} rondas`);
            recordRondas = rondas;
        } else if (rondas === recordRondas) {
            console.log(`🏆 ¡IGUALASTE EL RÉCORD! ${rondas} rondas`);
        } else {
            console.log(`📈 Rondas esta partida: ${rondas} (Récord: ${recordRondas})`);
        }
    } else {
        console.log("\n💀 Has perdido. ¡Inténtalo de nuevo!");
    }
    
    // Preguntar si quiere jugar otra vez
    const jugarOtraVez = await preguntar("\n¿Quieres jugar otra vez? (s/n): ");
    if (jugarOtraVez.toLowerCase() === 's') {
        await jugarCarreraDeNumeros();
    } else {
        console.log("\n¡Gracias por jugar! 👋");
        if (recordRondas !== Infinity) {
            console.log(`🏆 Tu mejor récord: ${recordRondas} rondas`);
        }
        rl.close();
    }
}

// Función para iniciar el juego
async function iniciarJuego() {
    console.log("🎮 BIENVENIDO A 'CARRERA DE NÚMEROS'");
    
    const empezar = await preguntar("¿Estás listo para empezar? (s/n): ");
    if (empezar.toLowerCase() === 's') {
        await jugarCarreraDeNumeros();
    } else {
        console.log("¡Hasta la próxima! 👋");
        rl.close();
    }
}

// Manejo de errores y inicio del juego
iniciarJuego().catch(error => {
    console.error("Error en el juego:", error);
    rl.close();
});