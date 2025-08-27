import readline from 'readline'

const rl = readline .createInterface({
    input: process.stdin,
    output: process.stdout
});

//Ejercicio 1 

/*rl.question('Ingresa un operacion matematica, ejemplo: "10 + 20", "7.5 * 3", "100 / 0"', (operacion) => {
    //split(" ")
   let partes = operacion.split(" ");
    console.log(partes[0])
    //Variables
    //Operacion
    let tipoDeOperacion = partes[1];
    //valor1 y convertir a number
    let valor1 = Number(partes[0]);
    //valor2 y convertir a number
    let valor2 = Number(partes[2]);

    // si valor1 y 2 son numeros
    if(isNaN(valor1) || isNaN(valor2)){
        console.log("Error los valores ingresados no son numeros")
    }

    //switch case parametro: tipo de operaacion
    switch(tipoDeOperacion){
        case "+":
            console.log(`El resultado de la suma es: ${valor1 + valor2}`);
            break;
        case "-":
            console.log(`El resultado de la resta es: ${valor1 - valor2}`);
            break; 
        case "*":
            console.log(`El resultado de la multiplicacion es: ${valor1 * valor2}`);
            break;
        case "/":
            //verificar que valor2 no sea 0
            if(valor2 === 0){
                console.log("Error no se puede dividir entre 0")
            }else{
                console.log(`El resultado de la division es: ${valor1 / valor2}`);
            }
            break;
        default:
            console.log("Error la operacion no es valida");
            break;
    }
    rl.close();
})
    */

/* 
    Ejercicio 2
    */

    rl.question('Ingresa un numero decimal: ', (num) =>{
        //COnvertimos el dato a numerico
        const numero = Number(num);

        //Mostramos el numero ingresado, redondeado de 4 formas
        console.log(`El numero redondeado usando floor es: ${Math.floor(numero)} `);
        console.log(`El numero redondeado usando ceil es: ${Math.ceil(numero)} `);
        console.log(`El numero redondeado usando round es: ${Math.round(numero)} `);
        console.log(`El numero redondeado usando trunc es: ${Math.trunc(numero)} `);

        rl.close()

    })