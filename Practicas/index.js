import readline from 'readline'

const rl = readline .createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question('What is your? ',(nombre) =>{
    console.log(`Welcome ${nombre}`);

    rl.close()
})*/

/*
let word ="Hola esto es javaScript";
//ToLowerCase()
console.log(word.toLowerCase());
console.log(word.toUpperCase());
console.log(word.trim().split(/\s+/));
console.log("reverse:"+word.split("").reverse().join(''));

console.log(word.replaceAll(" ", "").split(','));

*/


//Ejercicio 1
// Verificar si la palabra es palindromo
//Escribir laa palabra en consolay procesar para saber si lo es

/*
rl.question('Ingresa una palabra para saber si es palindromo: ',(word)=>{
    const palabraInvertida = word.split('').reverse().join("")
    let respuesta;

    
    if (word == palabraInvertida){
        respuesta = "Es palindromo"
    }else{
        respuesta = "No es palindromo"
    }
       

    //Usando ternario
    respuesta = word == palabraInvertida? "espalindromo" : "No es palindromo"
    console.log(word + " : "+respuesta);
    rl.close();
})
    */

/*
    Ejercicio 2
     verifica si una palabra inicia con letra mayuscula*/
rl.question('Ingresa una palabra: ', (palabra) =>{
    
    const primeraLetra = palabra.charAt(0);
    let respuesta;

    if (primeraLetra === primeraLetra.toUpperCase()){
        respuesta = "Inicia con mayuscula"
    }else{
        respuesta = "No inicia con mayuscula"
    }

    console.log(palabra + " : " + respuesta);
    rl.close();
})