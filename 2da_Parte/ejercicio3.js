function evaluarPalindromo (cadena){
	cadena = cadena.toUpperCase();
	this.cadena = cadena.split(" ");
	if(cadena.length > 1){
		this.nombre = this.cadena.join("");
		this.nombre = this.nombre.split("");
	} else{
		this.nombre = this.nombre.split("");
	}
	//comparando
	this.j = nombre.length-1;
	this.i = 0;
	while((i <= nombre.length-1) && (j >=0)) {
		document.write(nombre[i] + " " + nombre[j] + "<br>");
		if(nombre[i] !== nombre [j]){
			alert("NO es palindromo");
			return;
		}
		i++;
		j--;
	}
	alert("Es Palindromo");
	return;

}

var palindromo = prompt("Escriba su frase o palabra a evaluar");
evaluarPalindromo(palindromo);