const fs = require('fs');

console.log('');
console.log('fs.readFileSync sin Encoding - nos devuelve el buffer sin codificar');
console.log('---');
let infoJSON = fs.readFileSync('./app-tareas/tareas.json'); // devuelve el buffer del JSON
console.log(infoJSON);
console.log('----------');
console.log('');
console.log('Parse Buffer JSON - lo convertimos en objeto JS utilizando la libreria JSON');
console.log('---');
let tareas = JSON.parse(infoJSON);
console.log(tareas);

console.log('--------------------------------------------');
console.log('');
console.log('fs.readFileSync con Encoding - nos trae JSON y traduce el Buffer a uft-8');
console.log('---');
let tareasConEncoding = fs.readFileSync('./app-tareas/tareas.json', {encoding: 'utf-8'})
console.log(tareasConEncoding);

console.log('--------------------------------------------');
console.log('');
console.log('requiere JSON y lo convierte en objeto JS');
console.log('---');
const tareasJSON = require('./app-tareas/tareas.json');
console.log(tareasJSON); // lo transforma automaticamente en objeto JS (pero no podremos modificarlo)