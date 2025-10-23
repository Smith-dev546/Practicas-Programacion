function crearContador() {
    let contador = 0;  
    
    return {
        incrementar: function() {
            contador++;
        },
        decrementar: function() {
            contador--;
        },
        obtener: function() {
            return contador;
        }
    };
}

// Demostración
let contador1 = crearContador();
let contador2 = crearContador();

contador1.incrementar();
contador1.incrementar();
console.log("Contador1:", contador1.obtener());  

contador2.incrementar();
contador2.decrementar();
contador2.incrementar();
console.log("Contador2:", contador2.obtener());  

// Cada contador mantiene su propio valor
contador1.incrementar();
console.log("Contador1:", contador1.obtener()); 
console.log("Contador2:", contador2.obtener());  