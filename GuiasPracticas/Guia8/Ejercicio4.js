// Factorial: n! = n * (n-1)!
function factorial(n) {
    if (n === 0) return 1;  
    return n * factorial(n - 1);  
}

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)
function fibonacci(n) {
    if (n <= 1) return n;  
    return fibonacci(n - 1) + fibonacci(n - 2);  
}

// Sumar dígitos: suma los dígitos de un número
function sumarDigitos(num) {
    if (num < 10) return num;  
    return (num % 10) + sumarDigitos(Math.floor(num / 10));  
}

// Demostración
console.log("Factorial:");
console.log("5! =", factorial(5));  
console.log("3! =", factorial(3));  

console.log("\nFibonacci:");
console.log("fib(6) =", fibonacci(6));  
console.log("fib(4) =", fibonacci(4));  

console.log("\nSumar dígitos:");
console.log("123 =", sumarDigitos(123));    
console.log("4567 =", sumarDigitos(4567));  