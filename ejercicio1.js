//Pseudocodigo del ejercicio 1: PIEDRA, PAPEL O TIJERA

/*
INICIO
	1. for(var i=1; i<=3; i++){
		1.1 Escribir "1. Piedra, 2. Papel, 3. Tijera";
		1.2 Leer turno_Usuario;
		1.3 Leer respuesta de CPU;
		1.4 Si...
			1.4.1 turno_Usuario === Piedra entonces 
				1.4.1.1 Si CPU === Piedra entonces "Empate";
				1.4.1.2 Si CPU === Tijera entonces "Gana usuario";
				1.4.1.3 Si CPU === Papel entonces "Gana CPU";
			1.4.2 turno_Usuario === Papel entonces
				1.4.2.1 Si CPU === Papel entonces "Empate";
				1.4.2.2 Si CPU === Piedra entonces "Gana Usuario";
				1.4.2.3 Si CPU === Tijera entonces "Gana CPU";
			1.4.3 turno_Usuario === Tijera entonces
				1.4.3.1 Si CPU === Tijera entonces "Empate";
				1.4.3.2 Si CPU === Papel entonces "Gana Usuario";
				1.4.3.3 Si CPU === Piedra entonces "Gana CPU";
			Fin del SI
	}	Fin del FOR
FIN
*/

var aleatorio, cpu, turno_Usuario, tirada, ganador;
var j = 0;
var k = 0;
for(var i = 1 ; i <= 3 ; i++){
	turno_Usuario = prompt("1. Piedra \n 2. Papel \n 3. Tijera");
	turno_Usuario = Number(turno_Usuario);
	aleatorio = Math.random();
	//console.log(aleatorio);
	cpu = asignarRespuesta(aleatorio);
	//console.log(cpu);
	if(cpu === 1){
		tirada = "Piedra";
	} else if(cpu === 2){
		tirada = "Papel";
	} else {
		tirada = "Tijera";
	}
	switch(turno_Usuario){
		case 1: 
			ganador = elegirPiedra(cpu);
			alert("Usuario: Piedra \nCPU: " + tirada + "\nRonda: " + ganador + "\nUsuario: " + j + "\nCPU: " + k);
			break;
		case 2: 
			ganador = elegirPapel(cpu);
			alert("Usuario: Papel \nCPU: " + tirada + "\nRonda: " + ganador + "\nUsuario: " + j + "\nCPU: " + k);
			break;
		case 3:
			ganador = elegirTijera(cpu);
			alert("Usuario: Tijera \nCPU: " + tirada + "\nRonda: " + ganador + "\nUsuario: " + j + "\nCPU: " + k);
			break;
	}

}

if(j === k){
	alert("EMPATE");
} else if(j > k){
	alert("Gana: USUARIO");
} else {
	alert("Gana: CPU");
}



function asignarRespuesta(respuesta){ //Funcion que determina la respuesta del CPU
	if(respuesta <= (1/3)){
		cpu = 1; // piedra
		return cpu;
	} else if ((respuesta > (1/3)) && (respuesta <= (2/3))) {
		cpu = 2; //papel
		return cpu;
	} else {
		cpu = 3; //tijera
		return cpu;
	}
}

function elegirPiedra(compu){ //Funcion que sirve cuando USUARIO escoge piedra
	if(compu === 1){
		return "Empate";
	} else if (compu === 3) {
		this.j = j+1;
		return "Gana Usuario";
	} else if (compu === 2){
		this.k = k+1;
		return "Gana CPU";
	}
}

function elegirPapel(compu){ //Funcion que sirve cuando USUARIO escoge papel
	if(compu === 2){
		return "Empate";
	} else if (compu === 1) {
		this.j = j+1;
		return "Gana Usuario";
	} else if (compu === 3){
		this.k = k+1;
		return "Gana CPU";
	}
}

function elegirTijera(compu){ //Funcion que sirve cuando USUARIO escoge tijera
	if(compu === 3){
		return "Empate";
	} else if (compu === 2) {
		this.j = j+1;
		return "Gana Usuario";
	} else if (compu === 1){
		this.k = k+1;
		return "Gana CPU";
	}
}