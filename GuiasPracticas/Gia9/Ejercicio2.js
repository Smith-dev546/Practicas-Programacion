function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
    return {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad,
        profesion: profesion
    };
}

// Diferentes formas de llamar la función:

// 1. Con todos los parámetros
const perfil1 = crearPerfil("Ana", 25, "Madrid", "Ingeniera");
console.log(perfil1);

// 2. Omitiendo algunos parámetros (usan valores por defecto)
const perfil2 = crearPerfil("Carlos", 30);
console.log(perfil2);

// 3. Solo con el nombre obligatorio
const perfil3 = crearPerfil("Laura");
console.log(perfil3);

// 4. Usando undefined para saltar un parámetro
const perfil4 = crearPerfil("Pedro", undefined, "Barcelona");
console.log(perfil4);