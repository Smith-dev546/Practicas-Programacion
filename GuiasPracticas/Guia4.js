import { stdin, stdout } from 'process';
import readline from 'readline';

// Configuración de readline
const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

// Estructura de datos para productos
const inventario = {
    productos: [],
    
    // Agregar un nuevo producto
    agregarProducto: function() {
        rl.question("Ingresa el nombre del producto: ", (nombre) => {
            rl.question("Ingresa la cantidad disponible: ", (cantidad) => {
                rl.question("Ingresa el precio unitario: ", (precio) => {
                    rl.question("Ingresa el nombre del proveedor: ", (proveedor) => {
                        rl.question("Ingresa el teléfono del proveedor: ", (telefono) => {
                            const stock = parseInt(cantidad);
                            const decimalPrecio = parseFloat(precio);
                            
                            if (nombre && !isNaN(stock) && !isNaN(decimalPrecio) && proveedor && telefono) {
                                const producto = {
                                    id: Math.floor(Math.random() * 1000 + 1),
                                    nombre: nombre,
                                    cantidad: stock,
                                    precio: decimalPrecio,
                                    proveedor: {
                                        nombreProveedor: proveedor,
                                        telefono: telefono
                                    }
                                };
                                this.productos.push(producto);
                                console.log(`Producto "${nombre}" agregado correctamente.`);
                            } else {
                                console.log("Error: Verifica que todos los datos sean correctos.");
                            }
                            main();
                        });
                    });
                });
            });
        });
    },
    
    // Buscar producto por nombre y actualizar
    buscarYActualizar: function() {
        rl.question("Ingresa el nombre del producto a buscar: ", (nombre) => {
            const producto = this.productos.find(pro => 
                pro.nombre.toLowerCase() === nombre.toLowerCase()
            );
            
            if (!producto) {
                console.log("No se encontró el producto.");
                main();
                return;
            }
            
            console.log(`Producto encontrado: ${producto.nombre}, Stock: ${producto.cantidad}, Precio: $${producto.precio}`);
            
            rl.question("¿Qué deseas actualizar? (1-Stock, 2-Precio, 3-Ambos, 0-Cancelar): ", (opcion) => {
                const opcionNum = parseInt(opcion);
                
                switch (opcionNum) {
                    case 1:
                        rl.question("Nuevo valor de stock: ", (nuevoStock) => {
                            const stockNum = parseInt(nuevoStock);
                            if (!isNaN(stockNum)) {
                                producto.cantidad = stockNum;
                                console.log("Stock actualizado correctamente.");
                            } else {
                                console.log("Error: El stock debe ser un número.");
                            }
                            main();
                        });
                        break;
                    case 2:
                        rl.question("Nuevo precio: ", (nuevoPrecio) => {
                            const precioNum = parseFloat(nuevoPrecio);
                            if (!isNaN(precioNum)) {
                                producto.precio = precioNum;
                                console.log("Precio actualizado correctamente.");
                            } else {
                                console.log("Error: El precio debe ser un número.");
                            }
                            main();
                        });
                        break;
                    case 3:
                        rl.question("Nuevo valor de stock: ", (nuevoStock) => {
                            const stockNum = parseInt(nuevoStock);
                            if (!isNaN(stockNum)) {
                                producto.cantidad = stockNum;
                                rl.question("Nuevo precio: ", (nuevoPrecio) => {
                                    const precioNum = parseFloat(nuevoPrecio);
                                    if (!isNaN(precioNum)) {
                                        producto.precio = precioNum;
                                        console.log("Producto actualizado correctamente.");
                                    } else {
                                        console.log("Error: El precio debe ser un número.");
                                    }
                                    main();
                                });
                            } else {
                                console.log("Error: El stock debe ser un número.");
                                main();
                            }
                        });
                        break;
                    default:
                        console.log("Operación cancelada.");
                        main();
                }
            });
        });
    },
    
    // Listar todos los productos
    listarProductos: function() {
        if (this.productos.length === 0) {
            console.log("No hay productos en el inventario.");
        } else {
            console.log("\n--- INVENTARIO DE PRODUCTOS ---");
            this.productos.forEach(producto => {
                console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Stock: ${producto.cantidad}, Precio: $${producto.precio}, Proveedor: ${producto.proveedor.nombreProveedor}`);
            });
            console.log("--------------------------------\n");
        }
        main();
    },
    
    // Buscar productos por proveedor
    buscarPorProveedor: function() {
        rl.question("Ingresa el nombre del proveedor: ", (proveedor) => {
            const resultados = this.productos.filter(producto => 
                producto.proveedor.nombreProveedor.toLowerCase().includes(proveedor.toLowerCase())
            );
            
            if (resultados.length === 0) {
                console.log("No se encontraron productos de ese proveedor.");
            } else {
                console.log(`\n--- PRODUCTOS DEL PROVEEDOR: ${proveedor} ---`);
                resultados.forEach(producto => {
                    console.log(`Nombre: ${producto.nombre}, Stock: ${producto.cantidad}, Precio: $${producto.precio}`);
                });
                console.log("---------------------------------------------\n");
            }
            main();
        });
    }
};

// Mostrar menú de opciones
function mostrarMenu() {
    console.log(`
    === SISTEMA DE GESTIÓN DE PRODUCTOS ===
    1. Agregar Productos
    2. Buscar Productos y actualizar
    3. Listar productos
    4. Buscar por proveedor
    5. Salir del Sistema
    `);
}

// Función principal
function main() {
    mostrarMenu();
    rl.question("Seleccione una opción: ", (opcion) => {
        const opcionNum = parseInt(opcion);
        
        switch (opcionNum) {
            case 1:
                inventario.agregarProducto();
                break;
            case 2:
                inventario.buscarYActualizar();
                break;
            case 3:
                inventario.listarProductos();
                break;
            case 4:
                inventario.buscarPorProveedor();
                break;
            case 5:
                console.log("Saliendo del sistema...");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
                main();
        }
    });
}

// Iniciar la aplicación
main();