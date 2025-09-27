// Array inicial de transacciones
let transacciones = [
    {
        id: 1,
        tipo: "deposito",
        monto: 1000,
        fecha: "2024-01-15",
        categoria: "salario"
    },
    {
        id: 2,
        tipo: "retiro",
        monto: 200,
        fecha: "2024-01-16",
        categoria: "compras"
    },
    {
        id: 3,
        tipo: "deposito",
        monto: 500,
        fecha: "2024-01-17",
        categoria: "freelance"
    }
];

// 1. Función para agregar nuevas transacciones usando spread operator
function procesarTransacciones(...nuevasTransacciones) {
    // Validar y procesar cada transacción antes de agregar
    const transaccionesValidas = nuevasTransacciones.filter(transaccion => {
        // Validaciones básicas
        return transaccion.id &&
               transaccion.tipo &&
               transaccion.monto > 0 &&
               transaccion.fecha &&
               transaccion.categoria;
    });

    // Agregar transacciones válidas usando spread
    transacciones = [...transacciones, ...transaccionesValidas];
    
    console.log(`${transaccionesValidas.length} transacciones agregadas correctamente`);
    return transacciones;
}

// 2. Función para calcular balance usando reduce
function calcularBalance() {
    const balance = transacciones.reduce((acumulador, transaccion) => {
        if (transaccion.tipo === "deposito") {
            return acumulador + transaccion.monto;
        } else if (transaccion.tipo === "retiro") {
            return acumulador - transaccion.monto;
        }
        return acumulador;
    }, 0);
    
    return balance;
}

// 3. Función para analizar gastos por período
function analizarGastos(periodo = "mes") {
    // Filtrar solo transacciones de retiro (gastos)
    const gastos = transacciones.filter(transaccion => transaccion.tipo === "retiro");
    
    // Agrupar gastos por período (simplificado)
    const gastosPorPeriodo = gastos.reduce((acumulador, gasto) => {
        let clave = "";
        
        if (periodo === "dia") {
            clave = gasto.fecha;
        } else if (periodo === "mes") {
            clave = gasto.fecha.substring(0, 7); // YYYY-MM
        } else if (periodo === "año") {
            clave = gasto.fecha.substring(0, 4); // YYYY
        }
        
        if (!acumulador[clave]) {
            acumulador[clave] = 0;
        }
        
        acumulador[clave] += gasto.monto;
        return acumulador;
    }, {});
    
    // Encontrar patrones (categorías más gastadas)
    const categoriasGastos = gastos.reduce((acumulador, gasto) => {
        if (!acumulador[gasto.categoria]) {
            acumulador[gasto.categoria] = 0;
        }
        acumulador[gasto.categoria] += gasto.monto;
        return acumulador;
    }, {});
    
    return {
        totalGastos: gastos.reduce((sum, gasto) => sum + gasto.monto, 0),
        gastosPorPeriodo,
        categoriasGastos,
        categoriaMayorGasto: Object.keys(categoriasGastos).reduce((a, b) => 
            categoriasGastos[a] > categoriasGastos[b] ? a : b
        )
    };
}

// 4. Función de búsqueda flexible con destructuring
function buscarTransacciones(criterios = {}) {
    const { tipo, categoria, montoMin, montoMax, fechaDesde, fechaHasta } = criterios;
    
    return transacciones.filter(transaccion => {
        // Aplicar filtros solo si los criterios están definidos
        if (tipo && transaccion.tipo !== tipo) return false;
        if (categoria && transaccion.categoria !== categoria) return false;
        if (montoMin && transaccion.monto < montoMin) return false;
        if (montoMax && transaccion.monto > montoMax) return false;
        if (fechaDesde && transaccion.fecha < fechaDesde) return false;
        if (fechaHasta && transaccion.fecha > fechaHasta) return false;
        
        return true;
    });
}

// Ejemplos de uso y pruebas
console.log("=== TRANSACCIONES INICIALES ===");
console.log(transacciones);

console.log("\n=== AGREGANDO NUEVAS TRANSACCIONES ===");
procesarTransacciones(
    {
        id: 4,
        tipo: "retiro",
        monto: 150,
        fecha: "2024-01-18",
        categoria: "entretenimiento"
    },
    {
        id: 5,
        tipo: "deposito",
        monto: 300,
        fecha: "2024-01-19",
        categoria: "venta"
    }
);
console.log(transacciones);

console.log("\n=== BALANCE ACTUAL ===");
console.log("Balance: $" + calcularBalance());

console.log("\n=== ANÁLISIS DE GASTOS ===");
console.log(analizarGastos("mes"));

console.log("\n=== BÚSQUEDA DE TRANSACCIONES ===");
console.log("Retiros de compras:", buscarTransacciones({ tipo: "retiro", categoria: "compras" }));
console.log("Transacciones > $400:", buscarTransacciones({ montoMin: 400 }));

// Demostración de métodos de arrays mencionados en el PDF
console.log("\n=== DEMOSTRACIÓN MÉTODOS DE ARRAYS ===");

// .map() - Transformar array
const montos = transacciones.map(t => t.monto);
console.log("Montos:", montos);

// .filter() - Filtrar elementos
const depositos = transacciones.filter(t => t.tipo === "deposito");
console.log("Depósitos:", depositos);

// .find() - Encontrar primer elemento que cumpla condición
const primerRetiro = transacciones.find(t => t.tipo === "retiro");
console.log("Primer retiro:", primerRetiro);

// .findIndex() - Encontrar índice del primer elemento que cumpla condición
const indiceRetiro = transacciones.findIndex(t => t.tipo === "retiro");
console.log("Índice del primer retiro:", indiceRetiro);

// .some() - Verificar si al menos un elemento cumple condición
const hayRetirosGrandes = transacciones.some(t => t.tipo === "retiro" && t.monto > 1000);
console.log("¿Hay retiros mayores a $1000?:", hayRetirosGrandes);

// .every() - Verificar si todos los elementos cumplen condición
const todosTienenCategoria = transacciones.every(t => t.categoria);
console.log("¿Todas las transacciones tienen categoría?:", todosTienenCategoria);

// .reduce() - Reducir array a un solo valor (ya usado en calcularBalance)
const totalDepositos = transacciones
    .filter(t => t.tipo === "deposito")
    .reduce((sum, t) => sum + t.monto, 0);
console.log("Total de depósitos: $" + totalDepositos);