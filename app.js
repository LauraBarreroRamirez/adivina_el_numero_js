//variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
let numeroMaximoIntentos = 4;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt ("Me indicas un numero entre 1 y 10 por favor"));

    //Este codigo realiza la comparacion
    if (numeroUsuario == numeroSecreto) {
        alert (`Acertaste, el numero es: ${numeroSecreto}, Lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces"}.`)
    } else if (numeroUsuario < numeroSecreto) {
            alert ("el numero secreto es mayor")
    } else {
        alert ("el numero secreto es menor")
    } 
    //contador de intentos en los que no acierta el jugador
    intentos++;
    //si no logra a la primera vez la palabraVeces cambiara de "vez" a "veces"
    palabraVeces = "veces"
    
    //condicion para cerrar el ciclo si no logra en 3 intentos
    if (intentos > numeroMaximoIntentos){
        alert (`Llegaste al numero maximo de intentos ${numeroMaximoIntentos}`);
        break; //para salir del while
    }
} 