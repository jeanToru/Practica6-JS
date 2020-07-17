//
// Determinar si es divisible
//
let numero1 = parseFloat(prompt('Digite el numero'));


// Declaracion de la funcion 
function divisible(num1, num2) {
    let estado = false;
    if (num1 % num2 == 0) {
        estado = true;
    }
    return estado;
}
// Prueba de la Funcion
console.log(divisible(numero1, 2));

if (divisible(numero1, 5) && divisible(numero1, 3)) {
    console.log('🍺', numero1);
} else if ((divisible(numero1, 5) && !divisible(numero1, 3))) {
    console.log('🍔', numero1);
}
else if ((!divisible(numero1, 5) && divisible(numero1, 3))) {
    console.log('🚀', numero1);
} else {
    console.log('No es divisible por 3 y 5');
}
