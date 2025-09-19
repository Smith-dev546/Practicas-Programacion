//Metodos de arrays

estudiantes = [
    {nombre: "Smith Mendez", nota: 95},
    {nombre: "Luis", nota: 75},
    {nombre: "Kevin", nota: 85}
]

const grupos = [{mejorar: [], excelent: []}]

estudiantes.forEach(element => {
    if (element.nota < 80){
        console.log(`estudiantes: ` , element)
        grupos.mejorar.push(estudiantes)
    }else {
       console.log("aprobado ", estudiantes)
    }
});

//Map
let impares = numeros.map((num, index) => {
    let par = num % 2 === 0
    if (par){
        console.log("numero par:", num)
    }
})

//filter
let excelent= estudiantes.filter((estudiantes) => estudiantes.nota > 90)
console.log(excelent)