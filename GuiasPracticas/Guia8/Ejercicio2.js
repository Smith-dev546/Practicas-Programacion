// 1. Declaración de función
function calcularCubo(numero) {
    return numero * numero * numero;
}

// 2. Expresión de función
const calcularCubo2 = function(numero) {
    return numero * numero * numero;
};

// Función que usa callback anónimo
function transformarArray(numeros, callback) {
    return numeros.map(callback);
}

// Probamos las funciones
console.log("Cubo con declaración:", calcularCubo(3));
console.log("Cubo con expresión:", calcularCubo2(3));

// Usando función anónima como callback
const numeros = [1, 2, 3, 4];
const cuadrados = transformarArray(numeros, function(num) {
    return num * num;
});

console.log("Números originales:", numeros);
console.log("Al cuadrado:", cuadrados);