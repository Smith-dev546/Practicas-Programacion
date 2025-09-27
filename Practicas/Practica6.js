//Closure ejemplos
//contador
function crearContador(){
    //contexto en meoria
    let contador = 0
    return function(){
        contador++
        return contador
    }
}

let contador1 = crearContador()
let contador2 = crearContador()

console.log(contador1())
console.log(contador1(), "<= contador 1 \n")
console.log("Hola soy el contador 2 ",contador2())


//Ejemplo 2
//El saldo en una cuenta bancaria
function cuentaAhorro(inicial){
    let saldo = inicial;
    return {
        verSaldo: () => saldo,
        depositar: x => saldo += x,
        retirar: x => saldo -= x+1
    }
}

let miCuenta = cuentaAhorro(100);
console.log(`Tu saldo actual es de ${miCuenta.verSaldo()}`)
miCuenta.depositar(250)
miCuenta.retirar(110)
console.log(`Tu saldo actual es de: ${miCuenta.verSaldo()}`)



//Callback function
let numeros = [2,4,6,7,9]
function recorrerArray(arr, callback){
    for(let item of arr){
        callback(item)
    }
}

recorrerArray(numeros, n => console.log(n * n))


//Ejemplo 2 de Callback
function procesarUsuario(nombre, callback){
    console.log(`Procesando usuario, espere...`)
    callback(nombre)
}

procesarUsuario("Kevin", function(nombre){
    console.log("Ya estas siendo proceado ", nombre)
})


//Funciones
const sumar = (a,b) => a + b
const saludo = () => "Holiwis"
console.log(sumar(30, 40))
console.log(saludo())


const pares = [2,4,6,8]
const exponente = pares.map(x => x * x)
console.log(`array normal ${pares}`)
console.log(`Elevado a si mismo ${exponente}`)