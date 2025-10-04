//Ejercio 1
/*
function crearAcumulador() {
    let total = 0;
    
    return function(numero) {
        total += numero;
        return total;
    };
}

// Ejemplo de uso:
const suma = crearAcumulador();

console.log(suma(5));  // 5
console.log(suma(2));  // 7
console.log(suma(6));  // 13
console.log(suma(10)); // 23

*/

//Ejercicio 2
/*

function operacionMatematica(a, b, callback) {
    return callback(a, b);
}

// Definimos los callbacks para cada operación
function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    if (y === 0) {
        return "Error: No se puede dividir por cero";
    }
    return x / y;
}

// Ejemplos de uso:
console.log(operacionMatematica(10, 5, sumar));        // 15
console.log(operacionMatematica(10, 5, restar));       // 5
console.log(operacionMatematica(10, 5, multiplicar));  // 50
console.log(operacionMatematica(10, 5, dividir));      // 2
console.log(operacionMatematica(10, 0, dividir));      // "Error: No se puede dividir por cero"

*/

//Ejercicio 3
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando arrow function y map para elevar al cuadrado
const numerosAlCuadrado = numeros.map(numero => numero ** 2);

// Mostrando los resultados
console.log("Array original:", numeros);
console.log("Array al cuadrado:", numerosAlCuadrado);

*/

//Ejercicio 4
/*

function sumaRecursiva(arr) {
    // Caso base: si el array está vacío, retornamos 0
    if (arr.length === 0) {
        return 0;
    }
    
    // Caso recursivo: primer elemento + suma del resto del array
    return arr[0] + sumaRecursiva(arr.slice(1));
}

// Ejemplos de uso:
console.log(sumaRecursiva([1, 2, 3, 4, 5]));     // 15
console.log(sumaRecursiva([10, 20, 30]));        // 60
console.log(sumaRecursiva([5]));                 // 5
console.log(sumaRecursiva([]));                  // 0

*/

//Ejercicio 5

// Array de objetos con nombre y edad
const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "María", edad: 16 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 22 },
    { nombre: "Javier", edad: 15 }
];

// Usando arrow function y find para buscar la primera persona mayor de 18
const mayorDeEdad = personas.find(persona => persona.edad > 18);

// Mostrando el resultado
console.log("Array completo:");
console.table(personas);

console.log("Primera persona mayor de 18 años:");
console.log(mayorDeEdad);