# FullStackWeb - Digital House - TN44

## Clase 10: Introducción a Express

### **Instalación de Express**
1. Creamos Nuestro proyecto (app.js ... etc)
2. Inicializamos el proyecto con el comando (ejecutamos desde la consola)
    - npm init -y
3. Instalamos el modulo Express al proyecto (ejecutando desde la consola.
    - npm install express --save

**NOTA:** Para instalar el modulo de express, ***si o si*** debe estar inicializado el proyecto como se indica en el punto (2).
<br><br>

### **Actividad -APP WEB DH Heroes** 
#### **Micro desafio 1**

***Levantar un servidor web con Express que responda al puerto 3030.***

---

*Método listen, que se encargará de levantar el servidor. Recibe dos parámetros: el puerto y, opcionalmente, un callback que se ejecutará si el servidor termina de iniciar.*

```

    app.listen (3030, () => console.log ("server started: http://localhost:3030") ); 

```

---

#### **Micro desafio 2**
***Estructura de carpetas del proyecto.***

Para este desafío armaremos una estructura de carpetas simple, pero respetando los estándares que se utilizan para este tipo de sitios. Por eso, crearemos la siguiente estructura de archivos:

```

|- DH-Heroes
|   |- public 
|      |- css
|      |- img
|   |- views
|   app.js

```

---

#### **Micro desafio 3**
***Ubicando recursos y sirviéndolos en nuestra aplicación.***

Ubicar imagenes, archivos html, etc en las carpeta del proyecto segun correspondan. Los archivos se obtiene del ***Material_para_ejercitacion.zip*** enviado por los profesores.

Para servir la no olvidar usar el metodo listen

```

app.listen (3030, () => console.log ("Server started: http://localhost:3030/") ); 

```

---

#### **Micro desafio 4**
***¿Qué pasa con nuestros estilos y fotos?***

La app ya funciona, pero sin los estilos CSS ni las fotos. A no preocuparse. ¡Vamos a solucionar esto!

Para indicar donde estan los archivos estaticos (css y las fotos), usar el siguiente metodo.

```
app.use(express.static('public'));

```
---
<br>