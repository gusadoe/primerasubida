const opciones = {
	matematicas:{
		default:0,
		alias:'m'
	},
	ingles:{
		default:0,
		alias:'i'
	},
	programacion:{
		demand:true,
		alias:'p'
	}		
}
const argv = require('yargs')
			.command('promedio', 'calcular el promedio', opciones)
			.argv

console.log(argv.matematicas);//doble guion para crear variable un solo guion para el alias
console.log(argv);
console.log('el promedio es ' + (argv.m + argv.i + argv.p)/3);