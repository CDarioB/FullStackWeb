const sumar = require('./sumar');
const restar = require('./restar');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');
const potencia = require('./potencia');
const raiz = require('./raiz');
const modulo = require('./modulo');

console.log('Suma: ' + sumar(5,5));
console.log('Resta: ' + restar(5,4));
console.log('Multiplicación: ' + multiplicar(5,0));
console.log('Divición: ' + dividir(6,2));
console.log('Potencia: ' + potencia(2,2));
console.log('Raiz: ' + raiz(16));
console.log('Modulo - Resto: ' + modulo(3,2));