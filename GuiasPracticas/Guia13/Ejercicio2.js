import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let productos = [];

console.log('BUSQUEDA DE PRODUCTOS');

// Pedir cantidad de productos
rl.question('Cuantos productos deseas ingresar? ', (cantidadStr) => {
    const cantidad = parseInt(cantidadStr);
    let contador = 0;
    
    function ingresarProducto() {
        if (contador >= cantidad) {
            buscarProducto();
            return;
        }
        
        console.log(`\nProducto ${contador + 1}:`);
        rl.question('Nombre del producto: ', (nombre) => {
            rl.question('Precio: ', (precioStr) => {
                const precio = parseFloat(precioStr);
                productos.push({ nombre: nombre.toLowerCase(), precio: precio });
                contador++;
                ingresarProducto();
            });
        });
    }
    
    function buscarProducto() {
        let intentos = 0;
        const maxIntentos = 3;
        
        function intentarBusqueda() {
            if (intentos >= maxIntentos) {
                console.log('\nHas agotado tus 3 intentos. Programa terminado.');
                rl.close();
                return;
            }
            
            console.log('\n--- BUSQUEDA ---');
            rl.question('Que producto buscas? ', (busqueda) => {
                const productoBuscado = busqueda.toLowerCase();
                let encontrado = false;
                
                // Buscar producto con ciclo
                for (let i = 0; i < productos.length; i++) {
                    if (productos[i].nombre === productoBuscado) {
                        console.log(`Producto encontrado: ${productos[i].nombre} - Precio: $${productos[i].precio}`);
                        encontrado = true;
                        break;
                    }
                }
                
                if (!encontrado) {
                    intentos++;
                    console.log(`Producto no encontrado. Intentos restantes: ${maxIntentos - intentos}`);
                    intentarBusqueda();
                } else {
                    rl.close();
                }
            });
        }
        
        intentarBusqueda();
    }
    
    ingresarProducto();
});