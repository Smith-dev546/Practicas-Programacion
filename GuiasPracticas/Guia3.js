/*

Ejercicio 1: Perfil Personal
Crear un objeto que represente tu perfil personal con:
• Información básica (nombre, edad, carrera)
• Dirección (objeto anidado)
• Hobbies (array)
• Redes sociales (objeto con diferentes plataformas)


const perfil = {
    nombre : "Smith Mendez",
    edad : 18,
    carrera : "Desarrollo de Software",
    direccion : {
        departamento : "Morazan",
        pais : "El Salvador",
    },
    hobbies : ["Programar", "Escuchar musica", "Ver peliculas"],
    redesSociales : {
        facebook : "usuario.fb",
        instagram : "@usuario",
        twitter : "@usuario_dev"
    }
};

console.log("Perfil Personal:", perfil);

*/

/*
Ejercicio 2: Registro de Calificaciones
Crear un sistema que maneje:
• Array de materias con sus calificaciones
• Método para calcular promedio
• Método para determinar estado académico



const register ={
    materias : [
        {nombre: "Matematicas", calificacion: 85},
        {nombre: "programacion", calificacion: 90},
        {nombre: "Ingles", calificacion: 75},
        {nombre: "ASO", calificacion: 80}
    ],
    calcularPromedio: function() {
        const total = this.materias.reduce((sum, materia) => sum + materia.calificacion, 0);
        return total / this.materias.length;
    },
    estadoAcademico: function() {
        const promedio = this.calcularPromedio();
        return promedio >= 70 ? "Aprobado" : "Reprobado";
    }
};
console.log("Registro de Calificaciones:", register);
console.log("Promedio:", register.calcularPromedio());
console.log("Estado Academico:", register.estadoAcademico());

*/

/*
Ejercicio 3: Lista de Tareas
Implementar un sistema de tareas pendientes con:
• Array de tareas (objetos con título, descripción, completada)
• Método para marcar como completada
• Método para filtrar tareas pendientes
*/
const lista = {
    tareas : [
        {titulo: "Logica de Programaacion", descripcion: "Adaptar la logica en las bases de la programaacion", completada: true},
        {titulo: "Estructura de Datos", descripcion: "Aprender las estructuras de datos y su implementacion", completada: false},
        {titulo: "Ingles", descripcion: "Mejorar el ingles para la comunicacion", completada: false},
        {titulo: "ASO", descripcion: "Aprender sobre los sistemas operativos", completada: true}
    ],
    marcarCompletada: function(titulo) {
        const tarea = this.tareas.find(t => t.titulo === titulo);
        if (tarea) {
            tarea.completada = true;
            console.log(`Tarea "${titulo}" marcada como completada.`);
        } else {
            console.log(`Tarea "${titulo}" no encontrada.`);
        }
    },
    filtrarPendientes: function() {
        return this.tareas.filter(t => !t.completada);  
    }
};
console.log("Lista de Tareas:", lista);
console.log("Tareas Pendientes:", lista.filtrarPendientes());
lista.marcarCompletada("Ingles");   
console.log("Tareas Pendientes despues de marcar completada:", lista.filtrarPendientes());
console.log("Lista de Tareas despues de marcar completada:", lista);
