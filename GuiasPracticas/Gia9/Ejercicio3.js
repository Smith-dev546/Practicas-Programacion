//Rest Parameters

/*
function promedioRest(...numeros) {
    if (numeros.length === 0) return 0;
    
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

console.log(promedioRest(2, 4, 6));        
console.log(promedioRest(1, 3, 5, 7, 9));  
console.log(promedioRest(10));   

*/

//Arguments

function promedioArguments() {
    if (arguments.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma / arguments.length;
}

console.log(promedioArguments(2, 4, 6));        
console.log(promedioArguments(1, 3, 5, 7, 9));  
console.log(promedioArguments(10));              