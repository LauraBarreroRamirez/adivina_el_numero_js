//variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1; //para generar numero aleatorio
let userInput = 0;
let intentos = 1;
let numeroMaximoIntentos = 5;
let salida = " ";

function playGame() {
  userInput = parseInt(document.getElementById("number").value);

  if (userInput != numeroSecreto) {
    salida = `${userInput} no es el numero a adivinar, intenta otra vez`;
    //contador de intentos en los que no acierta el jugador
    intentos++;
  }
  //Este codigo realiza la comparacion
  if (userInput == numeroSecreto) {
    salida = `Acertaste, el numero es: ${numeroSecreto}, Lo lograste en ${intentos} ${
      intentos == 1 ? "intento" : "intentos"
    }.`;
  } else if (userInput < numeroSecreto) {
    alert("el numero secreto es mayor");
  } else {
    alert("el numero secreto es menor");
  }
  document.getElementById("text1").innerHTML = `${salida}`;
  document.getElementById("number").select();

  //condicion si no logra en 3 intentos
  if (intentos > numeroMaximoIntentos) {
    alert(`Llegaste al numero maximo de intentos ${numeroMaximoIntentos}`);
  }

}

function resetGame() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    document.getElementById("text1").innerHTML = "A jugar!";
    document.getElementById("number").value = "";
    document.getElementById("number").focus();
  }
