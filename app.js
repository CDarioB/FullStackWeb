//const fs = require('fs');
const archivo = require('./funciones_tareas/funcionesDeTareas');

let optionAcction = 'Listar';

let acction = process.argv[2];

if(acction == undefined){
    acction = 'UNDEFINED';
}


switch(acction.toUpperCase()){
    case "LISTAR":
        console.log('Listado de tareas');
        console.log('------------------'); 
        //let jsonTareas = fs.readFileSync('./app-tareas/tareas.json', {encoding: 'utf-8'})
        //let oTareas = JSON.parse(jsonTareas);
        let oTareas = archivo.leerArchivo();
        for(let i=0 ; i<oTareas.length ; i++){
            console.log(i+1 + '. ' + oTareas[i].titulo + ' - ' + oTareas[i].estado);
        }
        console.log('------------------------------------'); 
        break;
    case 'UNDEFINED':    //undefined 
        console.log(''); 
        console.log('Atención - Tienes que pasar una acción.');
        console.log('Las acciones diponibles son: ' + optionAcction);
        console.log('------------------------------------'); 
        break;
    default:
        console.log(''); 
        console.log('No entiendo qué quieres hacer.');
        console.log('Las acciones diponibles son: ' + optionAcction);
        console.log('------------------------------------'); 
        break;
}