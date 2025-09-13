import { parse } from 'path';
import readline from 'readline'

//Inventario y operaciones basicas CRUD
//producto = {
//nombre,
//stock,
//precio,
//proveedor{
//    empresa,
//    numero
//    }
//}

//Entrada de datos desde consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Objeto principal, estructura
const inventario = {
    //Aqui se guarda la informacion
    productos: [],
    //Con esta funcion guardamos los datos
    agregarProducto: function(){
        rl.question('Ingresa el nombre del producto: ', (nombre) => {
            rl.question('Ingrese la cantidad del producto disponible:\n ', (cantidad) => {
                rl.question('Ingrese el precio unitario del producto:\n ', (precio) => {
                    rl.question('Ingrese el nombre del proveedor:\n ', (nombreProveedor) => {
                        rl.question('Ingrese el telefono del proveedor:\n ', (telefono) => {
                            //Aqui se guardan los datos
                    let id = Math.floor(Math.random() * 1000 + 1);
                    const stock = parseInt(cantidad);
                    const decimalPrecio = parseFloat(precio);
                    const nombreProv = nombreProveedor;
                    const tel = telefono;
            if (nombre && !isNaN(stock) && !isNaN(decimalPrecio)) {
                let producto ={
                    id : id,
                    nombre: nombre,
                    cantidad: stock,
                    precio: decimalPrecio,
                    proveedor: {
                        nombreProveedor: nombreProv,
                        telefono: tel
                    }

                };
                this.productos.push(producto);
                console.log(this.productos);
            } else {
                console.log('No se puede ingresar el producto');
        }
        rl.close();
    });
});
});
});
        });
    }
    }


inventario.agregarProducto()