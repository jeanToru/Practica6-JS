let numeros = [156, 1245, 67, 6, 35000, 145000];


function alinearDerecha(numero, espacio) {
    let letraNun = String(numero).length;
    let camino = espacio - letraNun;
    espacio = '';
    for (let tamaño = 0; tamaño < camino; tamaño++) {
        espacio += '';
    }
    let palabra = espacio + numero;
    return palabra;
}

for (let contador = 0; contador < numeros.length; contador++) {
    console.log(alinearDerecha(numeros[contador], 6));
}
