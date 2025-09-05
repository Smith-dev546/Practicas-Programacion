import readline from 'readline'

const rl = readline .createInterface({
    input: process.stdin,
    output: process.stdout

});

/*
    Ejercicio 1

    rl.question('Ingrese tres precios en formato de texto (ejemplo: "12.5", "20.99", "30") ', (precio) => {
        const precios = precio.split(',').map(p => parseFloat(p.trim()));
        const sumaTotal = precios.reduce((acc, curr) => acc + curr, 0);
        console.log(`La suma total es: ${sumaTotal.toFixed(2)}`);
        rl.close();
    });

*/


/*
    Ejercicio 2

    rl.question('Ingresa una serie de números enteros separados por espacios: ', (numeros) => {
        const listaNumeros = numeros.split(' ').map(num => Number(num));
        const maximo = Math.max(...listaNumeros);
        const minimo = Math.min(...listaNumeros);
        console.log(`Número mayor: ${maximo}`);
        console.log(`Número menor: ${minimo}`);
        rl.close();
    });

    */

    /*
        Ejercicio 3

        Genera dos números aleatorios:
• La base debe ser un número entre 2 y 10.
El exponente debe ser un número entre 1 y 5.
El programa debe pedir al usuario el resultado de la potencia.
• Convierte la respuesta con parseInt.
• Comprueba si es correcta comparando con Math.pow(base, exponente).
• Si el usuario falla, muestra la respuesta correcta y la diferencia absoluta con
Math.abs.
*/

rl.question('Ingresa tu respuesta para la potencia: ', (respuesta) => {
    const base = Math.floor(Math.random() * 9) + 2;
    const exponente = Math.floor(Math.random() * 5) + 1;
    const resultadoCorrecto = Math.pow(base, exponente);
    const respuestaUsuario = parseInt(respuesta, 10);   
    if (respuestaUsuario === resultadoCorrecto) {
        console.log('¡Correcto!');
    } else {
        const diferencia = Math.abs(resultadoCorrecto - respuestaUsuario);
        console.log(`Incorrecto. La respuesta correcta es ${resultadoCorrecto}. Diferencia absoluta: ${diferencia}`);
    }       
    rl.close();
});