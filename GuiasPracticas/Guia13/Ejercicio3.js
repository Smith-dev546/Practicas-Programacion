import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let votosA = 0;
let votosB = 0;
let votosC = 0;

console.log('SISTEMA DE VOTACION');
console.log('Candidatos: A, B, C');
console.log('Escribe "fin" para terminar la votacion\n');

function procesarVoto() {
    rl.question('Ingresa tu voto (A, B, C): ', (voto) => {
        const votoUpper = voto.toUpperCase();
        
        if (votoUpper === 'FIN') {
            mostrarResultados();
            return;
        }
        
        // Validar voto con condicionales
        if (votoUpper === 'A') {
            votosA++;
            console.log('Voto registrado para candidato A');
        } else if (votoUpper === 'B') {
            votosB++;
            console.log('Voto registrado para candidato B');
        } else if (votoUpper === 'C') {
            votosC++;
            console.log('Voto registrado para candidato C');
        } else {
            console.log('Voto invalido. Solo se permiten A, B, C');
        }
        
        console.log(''); // linea en blanco
        procesarVoto(); // Continuar con siguiente voto
    });
}

function mostrarResultados() {
    console.log('\n--- RESULTADOS DE LA VOTACION ---');
    console.log(`Candidato A: ${votosA} votos`);
    console.log(`Candidato B: ${votosB} votos`);
    console.log(`Candidato C: ${votosC} votos`);
    console.log(`Total de votos: ${votosA + votosB + votosC}`);
    
    // Determinar ganador con condicionales
    if (votosA > votosB && votosA > votosC) {
        console.log('GANADOR: Candidato A');
    } else if (votosB > votosA && votosB > votosC) {
        console.log('GANADOR: Candidato B');
    } else if (votosC > votosA && votosC > votosB) {
        console.log('GANADOR: Candidato C');
    } else if (votosA === votosB && votosA > votosC) {
        console.log('EMPATE entre Candidato A y B');
    } else if (votosA === votosC && votosA > votosB) {
        console.log('EMPATE entre Candidato A y C');
    } else if (votosB === votosC && votosB > votosA) {
        console.log('EMPATE entre Candidato B y C');
    } else {
        console.log('EMPATE GENERAL entre todos los candidatos');
    }
    
    rl.close();
}

// Iniciar el sistema de votacion
procesarVoto();