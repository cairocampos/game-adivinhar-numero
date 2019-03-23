//Buttons
var verify = document.getElementById("verificador");
var clear = document.getElementById("limpador");
var box = document.getElementById("box-question");

function verificar()
{

	var number1 = document.getElementById("n1").innerHTML;
	var number2 = document.getElementById("n2").value;
	var result = document.getElementById("result");
	
	if(number1 == number2) {
		box.style.display = "none";
		result.style.backgroundColor = "green";
		result.innerHTML = "PARABÉNS, você acertou!!";
		result.style.display = "block";
		
		
	} else {
		box.style.display = "none";
		result.style.backgroundColor = "red";
		result.innerHTML = "ERROU, você perdeu!!";
		result.style.display = "block";		

	}

	reset();
}

function reset()
{
	var numberRandom = Math.floor(Math.random() * 10);
	document.getElementById("n1").innerHTML = numberRandom;
	document.getElementById("n2").value = "";

	//Botão para redefinir o game.
	clear.style.display = "block";
	verify.style.display = "none";
}

function update(){
	location.href = location.href
}