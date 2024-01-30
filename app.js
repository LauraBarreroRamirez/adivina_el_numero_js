//variables
let numeroSecreto = 2;
let numeroUsuario = prompt ("Me indicas un numero por favor");

console.log(numeroUsuario)

    //Este codigo realiza la comparacion
    if (numeroUsuario == numeroSecreto) {
        alert (`Acertaste, el numero es: ${numeroSecreto}.`)
    } else if (numeroUsuario < numeroSecreto) {
            alert ("el numero secreto es mayor")
    } else {
        alert ("el numero secreto es menor")
    } 