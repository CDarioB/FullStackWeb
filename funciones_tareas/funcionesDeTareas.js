const fs = require('fs');

let leerTareas = {
    archivo : './app-tareas/tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.archivo, {encoding: 'utf-8'})
        return JSON.parse(tareas);
    }
}

module.exports = leerTareas;