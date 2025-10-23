// Función para formatear saludo personalizado
function formatearSaludo(persona, horaDelDia) {
    const saludo = horaDelDia === "mañana" ? "Buenos días" : 
                  horaDelDia === "tarde" ? "Buenas tardes" : 
                  "Buenas noches";
    
    const tratamiento = persona.edad >= 18 ? "Señor/Señora" : "";
    
    return `${saludo} ${tratamiento} ${persona.nombre}.`;
}

// Función para calcular el área de un círculo
function calcularArea(radio) {
    return Math.PI * radio * radio;
}

// Demostración del uso de ambas funciones
const persona1 = {
    nombre: "Ana",
    edad: 25
};

const persona2 = {
    nombre: "Carlos",
    edad: 15
};

// Probando la función formatearSaludo
console.log(formatearSaludo(persona1, "mañana"));    
console.log(formatearSaludo(persona1, "tarde"));     
console.log(formatearSaludo(persona2, "noche"));     

// Probando la función calcularArea
console.log("Área con radio 5:", calcularArea(5).toFixed(2));     
console.log("Área con radio 2.5:", calcularArea(2.5).toFixed(2)); 