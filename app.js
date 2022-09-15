const express = require('express');
const app = express();

// Configuramos un metodo get en la raiz '/' para que nos devuelva algo. 
app.get ('/', (req, res) => { res.send ("Mi Primer Servidor Express ::: UP !!!") }); 

// Levantamos el servicio en el puerto 3030
app.listen (3030, () => console.log ("server started: http://localhost:3030/") ); 