# FullStackWeb - Digital House - TN44

## Clase 6: app-movies

### **Micro desafio 1**

El tech leader de nuestro equipo de desarrollo propone programar una app de películas. Para esto nos encarga:

Crear una carpeta llamada **app-movies** y dentro de ella crear un archivo
***movies.js*** el cual, debe contener un array de objetos literales. Cada objeto literal deberá tener las propiedades: **id, title, rating, awards, length, price, genre**. Asigne a cada propiedad al menos cinco (5) de sus películas favoritas, considerando al menos alguna con los siguientes géneros: ***Acción - Animación - Aventuras - Comedia - Ciencia Ficción - Suspenso***.

#### **A continuación:**
1. En esta primera etapa, debes generar un archivo llamado: ***app.js*** y recuerda que necesitamos requerir tu módulo propio **movies** que se encuentra en la misma carpeta del archivo donde estás trabajando.

2. Además en este archivo necesitarás crear un objeto literal llamado moviesDH que contendrá todas las funcionalidades que el cliente solicita.
<br><br> 

### **Micro desafio 2**
Ahora se pone algo "picante" el tema. Pues nuestro tech leader nos solicita que incorporemos varias funcionalidades que se detallan a continuación:

1. Ahora que el objeto literal **moviesDH** tiene todas las películas, es posible crear la funcionalidad **listMovies**. Esta tendrá la responsabilidad de retornar el listado de todas las películas existentes. Puedes utilizar cualquier método para recorrer los arrays, que desees. Para probar que la funcionalidad está correcta debes utilizar el comando que nos permite imprimir los resultados en nuestra terminal. [mdn web docs | Console.log()](https://developer.mozilla.org/es/docs/Web/API/Console/log)

2. Crear la funcionalidad **searchMovie** que debe recibir por parámetro un **id** ó un **title** de la película. La responsabilidad de esta función será la de mostrar el detalle de alguna de las películas registradas en nuestro módulo **movies**, si la película no es encontrada entonces la función debe devolver **null**. [mdn web docs | Array.prototype.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

3. Crear la funcionalidad **searchMoviesByGenre** la misma debe recibir por parámetro algunos de los géneros asignados a las películas y la responsabilidad de esta función será la de devolver una lista (array) de todas aquellas películas que posean el género indicado, de no existir ninguna de ese género de retornar **null**. [mdn web docs | Array.prototype.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

4. También nos pide que creemos una funcionalidad **totalPrice** que justamente nos devuelve la sumatoria del precio (**price**) de todas las películas registradas. Acá el único requerimiento técnico explícito es que utilices la función **reduce**.

5. Por último, nuestro tech leader se da cuenta que algunas de las películas deben cambiar de género. Para esto nos pide que creemos una funcionalidad **changeMovieGenre** que reciba el id de una película y el nuevo género a cambiar. Para esto deberíamos utilizar funcionalidad ya existente (**searchMovie**) y cambiar el género de la película encontrada.