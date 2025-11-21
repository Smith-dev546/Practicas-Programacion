import readline from 'readline';

// Crear la interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const PRECIO_BASE = 10;

function calcularPrecioCine() {
    console.log('=== CALCULADORA DE PRECIO DE BOLETO DE CINE ===');
    console.log('Precio base: $' + PRECIO_BASE);
    console.log('Descuentos disponibles:');
    console.log('- 40% para menores de 12 y mayores de 65 años');
    console.log('- 25% para todos los miercoles');
    console.log('Los descuentos no son acumulables\n');
    
    rl.question('Ingresa la edad del espectador: ', (edadInput) => {
        const edad = parseInt(edadInput);
        
        if (isNaN(edad) || edad < 0 || edad > 120) {
            console.log('Error: Ingresa una edad valida (0-120)');
            rl.close();
            return;
        }
        
        rl.question('Ingresa el dia de la semana: ', (diaSemana) => {
            const dia = diaSemana.toLowerCase().trim();
            
            let precioFinal = PRECIO_BASE;
            let descuentoAplicado = 0;
            let tipoDescuento = 'Ninguno';
            
            // Calcular descuentos
            const descuentoEdad = (edad < 12 || edad > 65) ? 0.4 : 0;
            const descuentoDia = (dia === 'miercoles' || dia === 'miércoles') ? 0.25 : 0;
            
            // Aplicar el mayor descuento (no acumulables)
            if (descuentoEdad > descuentoDia) {
                precioFinal = PRECIO_BASE * (1 - descuentoEdad);
                descuentoAplicado = descuentoEdad * 100;
                tipoDescuento = edad < 12 ? 'Menor de 12 años' : 'Mayor de 65 años';
            } else if (descuentoDia > 0) {
                precioFinal = PRECIO_BASE * (1 - descuentoDia);
                descuentoAplicado = descuentoDia * 100;
                tipoDescuento = 'Dia miercoles';
            }
            
            // Mostrar resultados
            console.log('\n=== RESUMEN DE COMPRA ===');
            console.log('Edad: ' + edad + ' años');
            console.log('Dia: ' + dia);
            console.log('Precio base: $' + PRECIO_BASE);
            console.log('Descuento aplicado: ' + descuentoAplicado + '%');
            console.log('Tipo de descuento: ' + tipoDescuento);
            console.log('PRECIO FINAL: $' + precioFinal.toFixed(2));
            
            rl.close();
        });
    });
}

// Iniciar el programa
calcularPrecioCine();