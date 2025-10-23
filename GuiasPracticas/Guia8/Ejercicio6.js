function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        profesion: profesion
    };
}

// Diferentes formas de usar la función
console.log(crearPerfil("Ana"));


console.log(crearPerfil("Carlos", 25));

console.log(crearPerfil("Maria", 30, "Madrid"));


console.log(crearPerfil("Juan", 22, "Barcelona", "Programador"));
