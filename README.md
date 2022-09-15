# FullStackWeb - Digital House - TN44

## Clase 10: Introducción a Express

### **Instalación de Express**
1. Creamos Nuestro proyecto (app.js ... etc)
2. Inicializamos el proyecto con el comando (ejecutamos desde la consola)
<br>
        ```
            npm init -y
        ```
<br>
3. Instalamos el modulo Express al proyecto (ejecutando desde la consola)
<br>
        ```
            npm install express --save
        ```
<br> <br>
**NOTA:** Para instalar el modulo de express, ***si o si*** debe estar inicializado el proyecto como se indica en el punto (2).


### **Actividad -APP WEB DH Heroes** 

#### **Micro desafio 1**

- **Levantar un servidor web con Express que responda al puerto 3030.**
<br>
---


***Método listen, que se encargará de levantar el servidor. Recibe dos parámetros: el puerto y, opcionalmente, un callback que se ejecutará si el servidor termina de iniciar.***
```
    app.listen (3030, () => console.log ("server started: http://localhost:3030") ); 
```
<br> <br>

---
