const frutas = ['Manzana', 'Banana', 'Cereza', 'Durazno'];
//console.log(frutas);      Muestra todo el array

console.log(frutas.length) // Muestra la cantidad de elementos del array

const nums = [1,4,7,10];
//nums.forEach(num => {
    //console.log(num * 2); // Muestra cada numero multiplicado por 2
//});

frutas.forEach((fruta, index) => {
    console.log(`${fruta} en el indice ${index}`); // Muestra cada fruta con su indice
});

const resultado = nums.reduce((sum, num) => sum + num, 0);
console.log(resultado); // Muestra la suma de todos los numeros del array

frutas.map((fruta, index) => {
    console.log(`${fruta} en el indice ${index}`); // Muestra cada fruta con su indice
});