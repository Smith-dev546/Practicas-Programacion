import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables del juego
let secuenciaSecreta = [];
const LONGITUD_SECUENCIA = 4;
const MAX_INTENTOS = 10;
const NUMERO_MIN = 1;
const NUMERO_MAX = 9;

// Símbolos para las pistas
const PISTA_CORRECTO = '🟢';    // Número correcto en posición correcta
const PISTA_PRESENTE = '🟡';    // Número correcto en posición incorrecta  
const PISTA_AUSENTE = '⚫';     // Número no está en la secuencia

// Función para hacer preguntas con promesas
function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para generar la secuencia secreta
function generarSecuenciaSecreta() {
    const secuencia = [];
    for (let i = 0; i < LONGITUD_SECUENCIA; i++) {
        const numero = Math.floor(Math.random() * (NUMERO_MAX - NUMERO_MIN + 1)) + NUMERO_MIN;
        secuencia.push(numero);
    }
    return secuencia;
}

// Función para validar la entrada del usuario
function validarEntrada(entrada) {
    // Verificar que la entrada tenga exactamente 4 caracteres
    if (entrada.length !== LONGITUD_SECUENCIA) {
        return {
            valida: false,
            mensaje: `❌ La secuencia debe tener exactamente ${LONGITUD_SECUENCIA} números`
        };
    }
    
    // Verificar que todos los caracteres sean números
    if (!/^\d+$/.test(entrada)) {
        return {
            valida: false,
            mensaje: "❌ La secuencia debe contener solo números"
        };
    }
    
    // Convertir a array de números y verificar rango
    const numeros = entrada.split('').map(Number);
    for (let numero of numeros) {
        if (numero < NUMERO_MIN || numero > NUMERO_MAX) {
            return {
                valida: false,
                mensaje: `❌ Los números deben estar entre ${NUMERO_MIN} y ${NUMERO_MAX}`
            };
        }
    }
    
    return {
        valida: true,
        numeros: numeros
    };
}

// Función para comparar la secuencia del jugador con la secreta
function compararSecuencias(secuenciaJugador, secuenciaSecreta) {
    const pistas = [];
    const numerosUsadosSecreto = new Array(LONGITUD_SECUENCIA).fill(false);
    const numerosUsadosJugador = new Array(LONGITUD_SECUENCIA).fill(false);
    
    // Primera pasada: buscar números correctos en posición correcta
    for (let i = 0; i < LONGITUD_SECUENCIA; i++) {
        if (secuenciaJugador[i] === secuenciaSecreta[i]) {
            pistas.push(PISTA_CORRECTO);
            numerosUsadosSecreto[i] = true;
            numerosUsadosJugador[i] = true;
        } else {
            pistas.push(null); // Marcador temporal
        }
    }
    
    // Segunda pasada: buscar números correctos en posición incorrecta
    for (let i = 0; i < LONGITUD_SECUENCIA; i++) {
        if (pistas[i] === PISTA_CORRECTO) continue; // Ya procesado
        
        let encontrado = false;
        for (let j = 0; j < LONGITUD_SECUENCIA; j++) {
            if (!numerosUsadosSecreto[j] && 
                !numerosUsadosJugador[i] && 
                secuenciaJugador[i] === secuenciaSecreta[j]) {
                pistas[i] = PISTA_PRESENTE;
                numerosUsadosSecreto[j] = true;
                numerosUsadosJugador[i] = true;
                encontrado = true;
                break;
            }
        }
        
        if (!encontrado && pistas[i] === null) {
            pistas[i] = PISTA_AUSENTE;
        }
    }
    
    return pistas;
}

// Función para mostrar el tablero de intentos
function mostrarTablero(intentos, historialPistas) {
    console.log("\n" + "=".repeat(40));
    console.log("📊 HISTORIAL DE INTENTOS");
    console.log("=".repeat(40));
    
    if (intentos.length === 0) {
        console.log("   (Aún no hay intentos)");
        return;
    }
    
    for (let i = 0; i < intentos.length; i++) {
        const intentoStr = intentos[i].join(' ');
        const pistasStr = historialPistas[i].join(' ');
        console.log(`Intento ${i + 1}:  ${intentoStr}  →  ${pistasStr}`);
    }
}

// Función para mostrar las instrucciones
function mostrarInstrucciones() {
    console.log("\n🎯 INSTRUCCIONES DEL JUEGO:");
    console.log("• Adivina la secuencia secreta de 4 números (1-9)");
    console.log("• Los números pueden repetirse");
    console.log("• Tienes 10 intentos");
    console.log("\n🔍 PISTAS:");
    console.log(`${PISTA_CORRECTO} = Número correcto en posición correcta`);
    console.log(`${PISTA_PRESENTE} = Número correcto en posición incorrecta`);
    console.log(`${PISTA_AUSENTE} = Número no está en la secuencia`);
    console.log("\n💡 EJEMPLO:");
    console.log("Secuencia secreta: 1 2 3 4");
    console.log("Tu intento: 1 4 5 6");
    console.log("Pistas: 🟢 🟡 ⚫ ⚫");
}

// Función para mostrar el resultado final
function mostrarResultadoFinal(gano, intentosUsados, secuenciaSecreta) {
    console.log("\n" + "=".repeat(50));
    if (gano) {
        console.log("🎉 ¡FELICIDADES! ¡HAS GANADO! 🎉");
        console.log(`📈 Adivinaste la secuencia en ${intentosUsados} intentos`);
    } else {
        console.log("💀 ¡GAME OVER! Se te acabaron los intentos");
    }
    console.log(`🔒 La secuencia secreta era: ${secuenciaSecreta.join(' ')}`);
    console.log("=".repeat(50));
}

// Función principal del juego
async function jugarAdivinaLaSecuencia() {
    // Reiniciar variables del juego
    secuenciaSecreta = generarSecuenciaSecreta();
    const intentos = [];
    const historialPistas = [];
    let intentosRestantes = MAX_INTENTOS;
    let gano = false;
    
    console.clear();
    console.log("\n" + "=".repeat(50));
    console.log("🔢 ADIVINA LA SECUENCIA 🔢");
    console.log("=".repeat(50));
    
    mostrarInstrucciones();
    
    // Bucle principal del juego
    while (intentosRestantes > 0 && !gano) {
        console.log(`\n🎯 Intentos restantes: ${intentosRestantes}`);
        
        // Mostrar historial
        mostrarTablero(intentos, historialPistas);
        
        // Obtener intento del jugador
        let entradaValida = false;
        let secuenciaIntento = [];
        
        while (!entradaValida) {
            const entrada = await preguntar(`\n👉 Ingresa tu secuencia de ${LONGITUD_SECUENCIA} números (${NUMERO_MIN}-${NUMERO_MAX}): `);
            
            const validacion = validarEntrada(entrada);
            if (validacion.valida) {
                secuenciaIntento = validacion.numeros;
                entradaValida = true;
            } else {
                console.log(validacion.mensaje);
            }
        }
        
        // Procesar el intento
        intentos.push(secuenciaIntento);
        const pistas = compararSecuencias(secuenciaIntento, secuenciaSecreta);
        historialPistas.push(pistas);
        
        // Verificar si ganó
        const aciertosCompletos = pistas.every(pista => pista === PISTA_CORRECTO);
        if (aciertosCompletos) {
            gano = true;
        } else {
            intentosRestantes--;
            console.log(`\n🔍 Pistas para este intento: ${pistas.join(' ')}`);
        }
    }
    
    // Mostrar resultado final
    mostrarTablero(intentos, historialPistas);
    mostrarResultadoFinal(gano, MAX_INTENTOS - intentosRestantes, secuenciaSecreta);
    
    // Preguntar si quiere jugar otra vez
    const jugarOtraVez = await preguntar("\n¿Quieres jugar otra vez? (s/n): ");
    if (jugarOtraVez.toLowerCase() === 's') {
        await jugarAdivinaLaSecuencia();
    } else {
        console.log("\n¡Gracias por jugar! 👋");
        rl.close();
    }
}

// Función para iniciar el juego
async function iniciarJuego() {
    console.log("🎮 BIENVENIDO A 'ADIVINA LA SECUENCIA'");
    
    const empezar = await preguntar("¿Estás listo para empezar? (s/n): ");
    if (empezar.toLowerCase() === 's') {
        await jugarAdivinaLaSecuencia();
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