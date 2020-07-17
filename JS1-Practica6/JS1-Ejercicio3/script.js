//
// Determinar si es primo con Funcion
//

let numero = parseFloat(prompt('Digite un número: '));

function numeroPrimo(num1) {
    let contador = 2;

    let primo = true;

    while (contador < numero) {
        if (numero % contador == 0) {
            primo = false;
        }
        contador++;
    }

    return primo;
}

if(numeroPrimo(numero)){
    console.log(`El numero ${numero} es primo`);
}else{
    console.log(`El numero ${numero} no es primo`);
}