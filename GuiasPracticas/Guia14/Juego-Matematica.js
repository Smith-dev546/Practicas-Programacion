import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables del juego
let jugador1 = { nombre: "", puntos: 0, racha: 0 };
let jugador2 = { nombre: "", puntos: 0, racha: 0 };
let nivelDificultad = "";
const TOTAL_PREGUNTAS = 5;

// Función para hacer preguntas con promesas
function preguntar(pregunta) {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
        });
    });
}

// Función para generar números según la dificultad
function generarNumero(dificultad) {
    let max;
    switch(dificultad) {
        case "1": // Fácil
            max = 10;
            break;
        case "2": // Medio
            max = 50;
            break;
        case "3": // Difícil
            max = 100;
            break;
        default:
            max = 10;
    }
    return Math.floor(Math.random() * max) + 1;
}

// Función para generar operación aleatoria
function generarOperacion() {
    const operaciones = ['+', '-', '*', '/'];
    return operaciones[Math.floor(Math.random() * operaciones.length)];
}

// Función para calcular la respuesta correcta
function calcularResultado(num1, num2, operacion) {
    switch(operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Para división, nos aseguramos de que sea exacta
            return num1 * num2 / num2; // Esto asegura división exacta
        default:
            return 0;
    }
}

// Función para validar entrada numérica
function esNumeroValido(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

// Función para mostrar mensajes con estilo
function mostrarMensaje(mensaje) {
    console.log(`\n🎯 ${mensaje}`);
}

// Función para mostrar título
function mostrarTitulo() {
    console.log("\n" + "=".repeat(50));
    console.log("🎮  EL DUELO DE MATEMÁTICAS  🎮");
    console.log("=".repeat(50));
}

// Función principal del juego
async function jugarTurno(jugador, numeroTurno) {
    mostrarMensaje(`Turno de ${jugador.nombre} - Pregunta ${numeroTurno}`);
    
    const num1 = generarNumero(nivelDificultad);
    const num2 = generarNumero(nivelDificultad);
    const operacion = generarOperacion();
    
    // Para división, generamos números que den resultado exacto
    let resultadoCorrecto;
    if (operacion === '/') {
        resultadoCorrecto = num1;
        const divisor = num2;
        const dividendo = num1 * divisor;
        resultadoCorrecto = num1;
        
        console.log(`❓ ¿Cuánto es ${dividendo} ${operacion} ${divisor}?`);
        
        let respuestaUsuario;
        do {
            respuestaUsuario = await preguntar("👉 Tu respuesta: ");
            if (!esNumeroValido(respuestaUsuario)) {
                console.log("❌ Por favor, ingresa un número válido");
            }
        } while (!esNumeroValido(respuestaUsuario));
        
        const respuestaNumero = parseFloat(respuestaUsuario);
        
        if (Math.abs(respuestaNumero - resultadoCorrecto) < 0.01) {
            jugador.puntos += 10;
            jugador.racha++;
            console.log("✅ ¡Correcto! +10 puntos");
            
            // Bonus por racha
            if (jugador.racha >= 3) {
                const bonus = 5;
                jugador.puntos += bonus;
                console.log(`🔥 ¡Racha de ${jugador.racha}! Bonus +${bonus} puntos`);
            }
        } else {
            jugador.racha = 0;
            console.log(`❌ Incorrecto. La respuesta era: ${resultadoCorrecto}`);
        }
    } else {
        resultadoCorrecto = calcularResultado(num1, num2, operacion);
        
        console.log(`❓ ¿Cuánto es ${num1} ${operacion} ${num2}?`);
        
        let respuestaUsuario;
        do {
            respuestaUsuario = await preguntar("👉 Tu respuesta: ");
            if (!esNumeroValido(respuestaUsuario)) {
                console.log("❌ Por favor, ingresa un número válido");
            }
        } while (!esNumeroValido(respuestaUsuario));
        
        const respuestaNumero = parseFloat(respuestaUsuario);
        
        if (Math.abs(respuestaNumero - resultadoCorrecto) < 0.01) {
            jugador.puntos += 10;
            jugador.racha++;
            console.log("✅ ¡Correcto! +10 puntos");
            
            // Bonus por racha
            if (jugador.racha >= 3) {
                const bonus = 5;
                jugador.puntos += bonus;
                console.log(`🔥 ¡Racha de ${jugador.racha}! Bonus +${bonus} puntos`);
            }
        } else {
            jugador.racha = 0;
            console.log(`❌ Incorrecto. La respuesta era: ${resultadoCorrecto}`);
        }
    }
    
    console.log(`📊 Puntos actuales de ${jugador.nombre}: ${jugador.puntos}`);
}

// Función para mostrar resultados finales
function mostrarResultados() {
    mostrarTitulo();
    console.log("\n🏆 RESULTADOS FINALES 🏆");
    console.log(`👤 ${jugador1.nombre}: ${jugador1.puntos} puntos`);
    console.log(`👤 ${jugador2.nombre}: ${jugador2.puntos} puntos`);
    
    if (jugador1.puntos > jugador2.puntos) {
        console.log(`\n🎉 ¡${jugador1.nombre} es el GANADOR! 🎉`);
    } else if (jugador2.puntos > jugador1.puntos) {
        console.log(`\n🎉 ¡${jugador2.nombre} es el GANADOR! 🎉`);
    } else {
        console.log("\n🤝 ¡EMPATE! Ambos jugadores son igual de buenos 🤝");
    }
}

// Función para seleccionar nivel de dificultad
async function seleccionarDificultad() {
    console.log("\n🎯 SELECCIONA EL NIVEL DE DIFICULTAD:");
    console.log("1️⃣  Fácil (números del 1 al 10)");
    console.log("2️⃣  Medio (números del 1 al 50)");
    console.log("3️⃣  Difícil (números del 1 al 100)");
    
    let opcion;
    do {
        opcion = await preguntar("👉 Elige una opción (1-3): ");
        if (!['1', '2', '3'].includes(opcion)) {
            console.log("❌ Por favor, elige una opción válida (1, 2 o 3)");
        }
    } while (!['1', '2', '3'].includes(opcion));
    
    nivelDificultad = opcion;
    
    const niveles = {
        '1': 'FÁCIL',
        '2': 'MEDIO', 
        '3': 'DIFÍCIL'
    };
    
    console.log(`\n✅ Nivel seleccionado: ${niveles[nivelDificultad]}`);
}

// Función principal que orquesta el juego
async function juegoPrincipal() {
    mostrarTitulo();
    
    // Configurar jugadores
    console.log("\n👥 CONFIGURACIÓN DE JUGADORES");
    jugador1.nombre = await preguntar("👉 Nombre del Jugador 1: ");
    jugador2.nombre = await preguntar("👉 Nombre del Jugador 2: ");
    
    // Seleccionar dificultad
    await seleccionarDificultad();
    
    console.log("\n🎮 ¡QUE COMIENCE EL DUELO!");
    
    // Jugar rondas
    for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
        await jugarTurno(jugador1, i);
        await jugarTurno(jugador2, i);
    }
    
    // Mostrar resultados
    mostrarResultados();
    
    // Preguntar si quieren jugar otra vez
    const jugarOtraVez = await preguntar("\n¿Quieren jugar otra vez? (s/n): ");
    if (jugarOtraVez.toLowerCase() === 's') {
        // Reiniciar puntajes
        jugador1.puntos = 0;
        jugador1.racha = 0;
        jugador2.puntos = 0;
        jugador2.racha = 0;
        
        console.clear();
        await juegoPrincipal();
    } else {
        console.log("\n¡Gracias por jugar! 👋");
        rl.close();
    }
}

// Iniciar el juego
juegoPrincipal().catch(error => {
    console.error("Error en el juego:", error);
    rl.close();
});