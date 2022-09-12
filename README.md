# FullStackWeb - Digital House - TN44

## clase4: json_app_tareas_2

### **Micro desafio 2**

N uestro tech leader nos solicita nuevas funcionalidades, las mismas se detallan a continuación:

1. Permitir que al momento de ejecutar el archivo app.js desde la terminal con Node.js se pueda pasar un argumento después del nombre del archivo de la
siguiente manera:
    - a. node app.js listar:
      - Si se escribe la palabra “listar” después del nombre del archivo, se deberán listar todas las tareas existentes en el archivo tareas.json
<br><br>
    - b. node app.js
      - Si NO se escribe ninguna palabra después del nombre del archivo, en la terminal deberá aparecer el texto: Atención - Tienes que pasar una acción.
<br><br>      
    - c. node app.js cualquier texto
      - Si se llegase a pasar cualquier otro texto que no sea la palabra listar, en la terminal deberá aparecer el texto: No entiendo qué quieres hacer.
<br><br>

**NOTA:** Recordar utilizar ***process.argv[posición]*** para leer el contenido del comando en ejecución por consola con ***node***.
- ***Ejemplo:*** *node app.js listar*
            
            - comando:    node | app.js | listar
            - posicies:     0  |   1    |   2
            
            let acction = process.argv[2]; // listar
<br><br>

2. Después de haber logrado lo anterior, nuestro tech leader nos pide modularizar la aplicación, llevando toda la funcionalidad de lectura de tareas a un archivo llamado ***funcionesDeTareas.js***, el cual deberá ser consumido desde el archivo ***app.js*** y se espera que todo siga funcionando sin problemas. 
    - No te angusties: Aquí te dejamos una serie de ideas que debes tener presente para lograr este desafío:
      - Debes crear el archivo funcionesDeTareas.js
      - Ten presente que este es un módulo creado por ti el cual debes luego exportar, para poder ser importando desde el archivo app.js