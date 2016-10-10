function Persona (nombre, edad, genero){
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;
	obtDetalles = function(){
		console.log(this.nombre);
	}
}
Persona("ale", 20, "Femenino");