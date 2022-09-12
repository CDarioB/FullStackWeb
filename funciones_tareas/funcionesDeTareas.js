const fs = require('fs');

let operarArchivo = {
    path : './app-tareas/tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.path, {encoding: 'utf-8'})
        return JSON.parse(tareas);
    },
    escribirJSON: function(tareas) {
        const stringTareas = JSON.stringify(tareas);
        fs.writeFileSync( this.path, stringTareas, 'utf-8');
    },
    guardarTarea: function(tareaNueva) {
        let tareas = this.leerArchivo();
        tareas.push(tareaNueva);
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function( estado ) {
        let tareas = this.leerArchivo();
        let tareasFiltras = tareas.filter( tarea => tarea.estado === estado );
        return tareasFiltras;
    }
}

module.exports = operarArchivo;