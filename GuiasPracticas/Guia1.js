import readline from 'readline'

const rl = readline .createInterface({
    input: process.stdin,
    output: process.stdout

});

/*
    Ejercicio 1
   

rl.question('Ingresa una palabra o frase: ', (input) => {
    
    const fraseLimpia = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const fraseInvertida = fraseLimpia.split('').reverse().join('');
    const esPalindromo = fraseLimpia === fraseInvertida;
    console.log(`¿Es palíndromo? ${esPalindromo}`);
    rl.close();
})
    */

/*
    Ejercicio 2

rl.question('Ingresa una palabra o frase: ', (frase) => {
    const vocales = frase.match(/[aeiou]/gi);
    const contador = vocales ? vocales.length : 0;
    console.log(`Número de vocales: ${contador}`);
    rl.close();
})
    */

/*
    Ejercicio 3

    rl.question('Ingresa la primera palabra: ', (palabraA) => {
        rl.question('Ingresa la segunda palabra: ', (palabraB) => {
            const normalizar = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');
            const sonAnagramas = normalizar(palabraA) === normalizar(palabraB);
            console.log(`¿Son anagramas? ${sonAnagramas}`);
            rl.close();
        });
    });
        */

    /*
        Ejercicio 4
            Palabra más frecuente: dada una frase, devolver la palabra que aparece
            más veces (ignorar mayúsculas y signos). Si hay empate, devolver
            cualquiera.
            */
    rl.question('Ingresa una frase: ', (frase) => {
        const palabras = frase.toLowerCase().match(/\b\w+\b/g);
        const frecuencia = {};
        let maxPalabra = '';
        let maxConteo = 0;
        palabras.forEach(palabra => {
            frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
            if (frecuencia[palabra] > maxConteo) {
                maxConteo = frecuencia[palabra];
                maxPalabra = palabra;
            }
        });
        console.log(`Palabra más frecuente: ${maxPalabra} (aparece ${maxConteo} veces)`);
        rl.close();
    });

