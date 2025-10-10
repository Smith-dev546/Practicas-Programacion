import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ejercicio 1

/*
const miArray = [];

function preguntarCantidad() {
    rl.question("¿Cuántos elementos quieres agregar al array? ", (cantidad) => {
        cantidad = parseInt(cantidad);
        
        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Por favor, ingresa un número válido.");
            preguntarCantidad();
        } else {
            console.log(`Vamos a crear ${cantidad} objetos...`);
            crearObjetos(cantidad, 0);
        }
    });
}

function crearObjetos(total, actual) {
    if (actual >= total) {
        mostrarResultados();
        return;
    }
    
    console.log(`\n--- Objeto ${actual + 1} ---`);
    
    rl.question("Nombre: ", (nombre) => {
        rl.question("Edad: ", (edad) => {
            rl.question("Email: ", (email) => {
                // Crear el objeto
                const objeto = {
                    id: actual + 1,
                    nombre: nombre,
                    edad: parseInt(edad) || 0,
                    email: email
                };
                
                // Agregar al array
                miArray.push(objeto);
                console.log(" Objeto agregado");
                
                // Continuar con el siguiente objeto
                crearObjetos(total, actual + 1);
            });
        });
    });
}

function mostrarResultados() {
    console.log("\n ARRAY COMPLETO:");
    console.log(miArray);
    
    console.log("\n LISTA DE OBJETOS:");
    miArray.forEach((objeto) => {
        console.log(`- ${objeto.nombre} (${objeto.edad} años) - ${objeto.email}`);
    });
    
    rl.close();
}

// Iniciar el programa
console.log("=== CREAR ARRAY CON OBJETOS ===");
preguntarCantidad();

*/

//Ejercicio 2

/*

function sumarElementos() {
    const numeros = [];
    
    function preguntarNumeros() {
        rl.question("Ingresa un número (o 'fin' para terminar): ", (input) => {
            if (input.toLowerCase() === 'fin') {
                if (numeros.length === 0) {
                    console.log("No se ingresaron números.");
                    rl.close();
                    return;
                }
                
                // Calcular la suma usando reduce
                const sumaTotal = numeros.reduce((acumulador, numero) => {
                    return acumulador + numero;
                }, 0);
                
                // Mostrar resultados
                console.log("\n RESULTADOS:");
                console.log("Array de números:", numeros);
                console.log("Suma total:", sumaTotal);
                
                rl.close();
            } else {
                const numero = parseFloat(input);
                if (!isNaN(numero)) {
                    numeros.push(numero);
                    console.log(` Número ${numero} agregado. Array actual: [${numeros.join(', ')}]`);
                } else {
                    console.log(" Por favor, ingresa un número válido.");
                }
                preguntarNumeros();
            }
        });
    }
    
    console.log("\n=== SUMAR ELEMENTOS CON REDUCE ===");
    console.log("Ingresa números y escribe 'fin' para calcular la suma");
    preguntarNumeros();
}

// Llamar a la función para ejecutar el ejercicio 
sumarElementos();

*/

//Ejercicio 3

/*
function contarMayoresQue() {
    const numeros = [];
    
    function preguntarNumeros() {
        rl.question("Ingresa un número (o 'fin' para terminar): ", (input) => {
            if (input.toLowerCase() === 'fin') {
                if (numeros.length === 0) {
                    console.log("No se ingresaron números.");
                    rl.close();
                    return;
                }
                
                // Preguntar el número límite
                preguntarLimite();
            } else {
                const numero = parseFloat(input);
                if (!isNaN(numero)) {
                    numeros.push(numero);
                    console.log(` Número ${numero} agregado. Array: [${numeros.join(', ')}]`);
                } else {
                    console.log(" Por favor, ingresa un número válido.");
                }
                preguntarNumeros();
            }
        });
    }
    
    function preguntarLimite() {
        rl.question("\nIngresa el número límite: ", (limiteInput) => {
            const limite = parseFloat(limiteInput);
            
            if (isNaN(limite)) {
                console.log(" Por favor, ingresa un número válido para el límite.");
                preguntarLimite();
                return;
            }
            
            // Usar filter para obtener los números mayores al límite
            const mayores = numeros.filter(numero => numero > limite);
            
            // Mostrar resultados
            console.log("\n RESULTADOS:");
            console.log("Array completo:", numeros);
            console.log("Límite:", limite);
            console.log("Números mayores al límite:", mayores);
            console.log("Cantidad de números mayores:", mayores.length);
            
            rl.close();
        });
    }
    
    console.log("\n=== CONTAR ELEMENTOS MAYORES QUE UN VALOR ===");
    console.log("Primero ingresa los números del array");
    preguntarNumeros();
}

// Llamar a la función para ejecutar el ejercicio 3
contarMayoresQue();

*/

// Ejercicio 4

/*
function buscarElemento() {
    const nombres = [];
    
    function preguntarNombres() {
        rl.question("Ingresa un nombre (o 'fin' para terminar): ", (input) => {
            if (input.toLowerCase() === 'fin') {
                if (nombres.length === 0) {
                    console.log("No se ingresaron nombres.");
                    rl.close();
                    return;
                }
                
                // Preguntar qué nombre buscar
                preguntarBusqueda();
            } else {
                if (input.trim() !== '') {
                    nombres.push(input);
                    console.log(` Nombre "${input}" agregado. Lista: [${nombres.join(', ')}]`);
                } else {
                    console.log(" Por favor, ingresa un nombre válido.");
                }
                preguntarNombres();
            }
        });
    }
    
    function preguntarBusqueda() {
        rl.question("\n¿Qué nombre quieres buscar? ", (nombreBuscado) => {
            if (nombreBuscado.trim() === '') {
                console.log(" Por favor, ingresa un nombre válido para buscar.");
                preguntarBusqueda();
                return;
            }
            
            // Usar find para buscar el nombre (case sensitive)
            const resultado = nombres.find(nombre => nombre === nombreBuscado);
            
            // Mostrar resultados
            console.log("\n RESULTADOS:");
            console.log("Lista completa:", nombres);
            console.log("Buscando:", nombreBuscado);
            
            if (resultado) {
                console.log(` El nombre "${nombreBuscado}" SÍ está en la lista`);
            } else {
                console.log(` El nombre "${nombreBuscado}" NO está en la lista`);
            }
            
            rl.close();
        });
    }
    
    console.log("\n=== BUSCAR ELEMENTO EN ARRAY ===");
    console.log("Primero ingresa los nombres del array");
    preguntarNombres();
}

// Llamar a la función para ejecutar el ejercicio 4
buscarElemento();

*/
//Ejercicio 5

function eliminarRepetidos() {
    const numeros = [];
    
    function preguntarNumeros() {
        rl.question("Ingresa un número (o 'fin' para terminar): ", (input) => {
            if (input.toLowerCase() === 'fin') {
                if (numeros.length === 0) {
                    console.log("No se ingresaron números.");
                    rl.close();
                    return;
                }
                
                // Eliminar elementos repetidos usando filter e indexOf
                const numerosUnicos = numeros.filter((numero, index) => {
                    return numeros.indexOf(numero) === index;
                });
                
                // Mostrar resultados
                console.log("\n RESULTADOS:");
                console.log("Array original:", numeros);
                console.log("Array sin repetidos:", numerosUnicos);
                console.log("Elementos eliminados:", numeros.length - numerosUnicos.length);
                
                rl.close();
            } else {
                const numero = parseFloat(input);
                if (!isNaN(numero)) {
                    numeros.push(numero);
                    console.log(` Número ${numero} agregado. Array: [${numeros.join(', ')}]`);
                } else {
                    console.log(" Por favor, ingresa un número válido.");
                }
                preguntarNumeros();
            }
        });
    }
    
    console.log("\n=== ELIMINAR ELEMENTOS REPETIDOS ===");
    console.log("Ingresa números (pueden haber repetidos)");
    preguntarNumeros();
}

// Llamar a la función para ejecutar el ejercicio 5
eliminarRepetidos();