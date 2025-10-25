function contarArgumentos() {
    return arguments.length;
}

console.log(contarArgumentos()); 
console.log(contarArgumentos(1));
console.log(contarArgumentos(1, 2, 3)); 
console.log(contarArgumentos('a', 'b', 'c', 'd'));