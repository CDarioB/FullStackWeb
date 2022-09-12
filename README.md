# FullStackWeb - Digital House - TN44

## Clase 5: app_tareas

### **Micro desafio **

El tech leader de nuestro equipo de desarrollo propone refactorizar la app de tareas. Para esto nos encarga:

1. Modificar la funcionalidad de listar tareas. Deberemos utilizar el método forEach. Recordemos que forEach puede recibir dos parámetros, siendo el segundo nuestro index (es posible que tengamos que usarlo).<br>
Te invitamos a que investigues al respecto en el siguiente: [w3schools.com | JavaScript Array forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp) .
<br><br>
2. Brindar la posibilidad al usuario de guardar nuevas tareas. Para ello tendremos que armar varias cosas: 
    - ***Por un lado***, tendremos que **crear funciones, dentro del archivo: *funcionesDeTareas.js***, que nos permitan **escribir** información dentro del archivo ***tareas.json*** que tiene nuestras tareas y **guardar** ese archivo actualizado, no sólo con la nueva tarea, sino con todas. 
    - ***En segundo lugar***, tendremos que crear una alternativa dentro de nuestro **“switch” (un nuevo case)** para identificar que el usuario quiere crear una tarea y ejecutar las funciones de escribir json **(escribirJSON)** y guardar el archivo actualizado **(guardarTareas)**.
    - Algunos sitios de ayuda:
        - [w3schools.com | JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp) . 
        - [npmjs.com | JSON - stringify()](https://www.npmjs.com/package/json-stringify) . 
        - [nodejs.org | fs - módulo File System](https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fswritevsyncfd-buffers-position) . 
        - [nodejs.org | process.argv](https://nodejs.org/dist/latest-v17.x/docs/api/process.html#processargv) . 
<br><br> 
3. Vamos ahora a **filtrar** las tareas por estado. Crearemos una función llamada **filtrarPorEstado** en nuestro módulo de tareas (archivo ***funcionesDeTareas.js***) que nos permita filtrar tareas por estado y luego mostrarlas en consola. Para esto:
    - a. Necesitaremos crear en ***funcionesDeTareas.js*** un nuevo método **“filtrarPorEstado”** que reciba un estado como parámetro.
    - b. La función deberá, en primer lugar, obtener todas las tareas de nuestro archivo ***tareas.json***. Tenemos una función que ya sabe hacerlo. ¿Te acuerdas cuál es?
    - c. Ahora vamos a necesitar obtener únicamente las tareas cuyo estado coincida con el parámetro ingresado. Para lograrlo sabemos que los arrays tienen métodos propios que nos podrían ayudar. [nodejs.org | JavaScript Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp) . 
    - d. Por último, la función deberá retornar el nuevo array con las tareas ya filtradas.
    - e. Vamos ahora a nuestro archivo ***app.js***. En nuestros **“switch”** tendremos que crear un nuevo **“case”** que se encargue de identificar el estado ingresado por el usuario, que ejecute el método **“filtrarPorEstado”** y muestre las tareas al usuario.

    