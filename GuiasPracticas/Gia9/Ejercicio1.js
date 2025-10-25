function crearContador() {
    let contador = 0; // Variable privada
    
    return {
        incrementar: function() {
            contador++;
        },
        decrementar: function() {
            contador--;
        },
        obtenerValor: function() {
            return contador;
        }
    };
}

// Demostración con múltiples contadores
const contador1 = crearContador();
const contador2 = crearContador();

contador1.incrementar();
contador1.incrementar();
contador1.incrementar();

contador2.decrementar();
contador2.decrementar();

console.log(contador1.obtenerValor());
console.log(contador2.obtenerValor()); 