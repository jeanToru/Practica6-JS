//
// Numero Max
//

let numero1 = parseFloat(prompt('Digite un numero'));

let numero2 = parseFloat(prompt('Digite un numero'));

function max(num1, num2){
    let max = 0;
    if(num1 > num2){
        max = num1;
    }else{
        max = num2;
    }
    return max;
}

const numeroMayor = max(numero1, numero2);

console.log(`El numero maximo es: ${numeroMayor}`);