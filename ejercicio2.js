//Pseudocodigo Ejercicio 2
/*
INICIO
	1. Lee nombres = [];
	2. For(i = 1; i<=3; i++){
		2.1 Escribir "Dame un nombre";
		2.2 Lee name;
		2.3 Agrega la variable name al arreglo nombres;
		} fin del FOR
	3. Escribir nombres;
FIN
*/

var nombres = [];
var name;
for(var i = 1; i <= 3; i++){
	name = prompt("Dame un nombre");
	nombres.push(name);
}
console.log(nombres);