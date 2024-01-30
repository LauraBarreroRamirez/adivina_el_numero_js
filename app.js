//variables
let numeroSecreto = Math.floor(Math.random()*10)+1; //para generar numero aleatorio
let userInput = 0;
let intentos = 1;
let palabraVeces = "vez";
let numeroMaximoIntentos = 1;
let salida = "Hola Mundo!"

function playGame(){
    userInput = parseInt(document.getElementById("number").value)


    if (userInput != numeroSecreto) {
        salida = `${userInput} no es el numero a adivinar, intenta otra vez`
        //contador de intentos en los que no acierta el jugador
        intentos++;
    }
        //Este codigo realiza la comparacion
    if (userInput == numeroSecreto) {
           salida = `Acertaste, el numero es: ${numeroSecreto}, Lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces"}.`
        } else if (userInput < numeroSecreto) {
                alert ("el numero secreto es mayor")
        } else {
            alert ("el numero secreto es menor")
        } 
        
        //si no logra a la primera vez la palabraVeces cambiara de "vez" a "veces"
        palabraVeces = "veces"
        
        //condicion para cerrar el ciclo si no logra en 3 intentos
        if (intentos > numeroMaximoIntentos){
            alert (`Llegaste al numero maximo de intentos ${numeroMaximoIntentos}`);
            break; //para salir del while
        }
    } 
}