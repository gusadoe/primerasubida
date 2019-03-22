const {estudiante, obtenerPromedio} = require ('./calculos');	

const fs = require('fs');
/*console.log('el nombre del estudiante es: ' + estudiante.nombre);
console.log('el promedio es '+ obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));
*/
// ejemplo 2

let {nombre, edad : años,notas:{matematicas, ingles, programacion}} = estudiante;
console.log('el nombre del estudiante es: ' + nombre);
console.log('el promedio es '+ obtenerPromedio(matematicas, ingles, programacion));
console.log('la edad del estudiante es '+ años)

let crearArchivo  = (estudiante) =>{
	texto = 'el nombre ddel estudiante es ' + nombre + '\n' + 
			'ha obtenido un promedio de ' + obtenerPromedio(matematicas, ingles, programacion);
	fs.writeFile('promedio.txt', texto, (err)=>{
		if (err) throw (err);//si hay error envia mensaje de alerta
		console.log('se ha creado el archivo')
	});
}

crearArchivo(estudiante);