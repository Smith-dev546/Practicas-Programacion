import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inventario = [];

function mostrarMenu() {
    console.log('\n=== GESTOR DE INVENTARIO ===');
    console.log('1. Agregar producto');
    console.log('2. Vender producto');
    console.log('3. Mostrar inventario');
    console.log('4. Salir');
}

function procesarOpcion() {
    mostrarMenu();
    
    rl.question('Selecciona una opcion (1-4): ', (opcion) => {
        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                venderProducto();
                break;
            case '3':
                mostrarInventario();
                procesarOpcion();
                break;
            case '4':
                console.log('Saliendo del sistema...');
                rl.close();
                break;
            default:
                console.log('Opcion invalida. Intenta nuevamente.');
                procesarOpcion();
                break;
        }
    });
}

function agregarProducto() {
    rl.question('Nombre del producto: ', (nombre) => {
        rl.question('Cantidad: ', (cantidadStr) => {
            const cantidad = parseInt(cantidadStr);
            
            if (isNaN(cantidad) || cantidad < 0) {
                console.log('Cantidad invalida. Debe ser un numero positivo.');
                agregarProducto();
                return;
            }
            
            // Buscar si el producto ya existe
            let productoExistente = false;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                    inventario[i].cantidad += cantidad;
                    productoExistente = true;
                    console.log(`Se agregaron ${cantidad} unidades al producto existente.`);
                    break;
                }
            }
            
            if (!productoExistente) {
                inventario.push({ nombre: nombre, cantidad: cantidad });
                console.log('Producto agregado al inventario.');
            }
            
            procesarOpcion();
        });
    });
}

function venderProducto() {
    if (inventario.length === 0) {
        console.log('El inventario esta vacio.');
        procesarOpcion();
        return;
    }
    
    rl.question('Nombre del producto a vender: ', (nombre) => {
        let productoEncontrado = false;
        
        for (let i = 0; i < inventario.length; i++) {
            if (inventario[i].nombre.toLowerCase() === nombre.toLowerCase()) {
                productoEncontrado = true;
                
                rl.question('Cantidad a vender: ', (cantidadVentaStr) => {
                    const cantidadVenta = parseInt(cantidadVentaStr);
                    
                    // Validar la venta con condicionales
                    if (isNaN(cantidadVenta) || cantidadVenta <= 0) {
                        console.log('Cantidad invalida. Debe ser un numero positivo.');
                        venderProducto();
                        return;
                    }
                    
                    if (cantidadVenta > inventario[i].cantidad) {
                        console.log('No hay suficiente stock. Stock disponible: ' + inventario[i].cantidad);
                        venderProducto();
                        return;
                    }
                    
                    inventario[i].cantidad -= cantidadVenta;
                    console.log(`Venta realizada. Stock restante: ${inventario[i].cantidad}`);
                    
                    // Eliminar producto si queda en 0
                    if (inventario[i].cantidad === 0) {
                        inventario.splice(i, 1);
                        console.log('Producto eliminado del inventario por falta de stock.');
                    }
                    
                    procesarOpcion();
                });
                break;
            }
        }
        
        if (!productoEncontrado) {
            console.log('Producto no encontrado en el inventario.');
            procesarOpcion();
        }
    });
}

function mostrarInventario() {
    console.log('\n=== INVENTARIO ACTUAL ===');
    
    if (inventario.length === 0) {
        console.log('El inventario esta vacio.');
    } else {
        for (let i = 0; i < inventario.length; i++) {
            console.log(`${inventario[i].nombre}: ${inventario[i].cantidad} unidades`);
        }
    }
}

// Iniciar el programa
console.log('BIENVENIDO AL GESTOR DE INVENTARIO');
procesarOpcion();
