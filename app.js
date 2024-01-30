//variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt ("Me indicas un numero entre 1 y 10 por favor");

    //Este codigo realiza la comparacion
    if (numeroUsuario == numeroSecreto) {
        alert (`Acertaste, el numero es: ${numeroSecreto}, Lo lograste en ${intentos} ${palabraVeces}.`)
    } else if (numeroUsuario < numeroSecreto) {
            alert ("el numero secreto es mayor")
    } else {
        alert ("el numero secreto es menor")
    } 
    //contador de intentos en los que no acierta el jugador
    intentos = intentos + 1;
    //si no logra a la primera vez la palabraVeces cambiara de "vez" a "veces"
    palabraVeces = "veces"
    
    //condicion para cerrar el ciclo si no logra en 3 intentos
    if (intentos > 3){
        alert ("Llegaste al numero maximo de intentos");
        break;
    }
} 