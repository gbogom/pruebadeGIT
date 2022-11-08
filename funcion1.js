function tengoClases(dia) {
	switch (dia) {
		case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases");
			break;
		default:
			console.log("no tenés clases");
	}
}

let sumar = a => a/2;

console.log(sumar(4));

let saludar = nombre => 'Hola, ' + nombre + '!';

console.log(saludar("pepe"));

let doble = num1 => num1 *2;
let triple = num1 => num1 *3;
function aplicarCallback (num1, functionCallBack){
    return functionCallBack(num1);
}

console.log(aplicarCallback(5,triple));


