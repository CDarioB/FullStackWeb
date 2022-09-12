# FullStackWeb - Digital House - TN44

## Cierre del Modulo 2 - JS

### **app-concesionaria**

El tech leader de nuestro equipo de desarrollo propone programar una app para las concesionarias. Para esto nos encarga:

- Crear un modulo ***autos.js*** con la siguinete estructura:
```
 autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        color: 'Azul',
        anio: 2019,
        km: 200,
        precio: 150000,
        cuotas: 12,
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        color: 'Blanco',
        anio: 2019,
        km: 0,
        precio: 100000,
        cuotas: 14,
        patente: 'JJK116',
        vendido: false
    }
]
```
- Crear un archivo ***concesionaria.js*** que tendra un objeto literal con las siguientes funciuonalidades:
    - **autos**: poseera nuestro modulo creado en ***autos.js***.
    - **buscarAuto**: devolvera un auto en particular buscado por patente que sera enviado por parametro a la función.
    - **venderAuto**: recibe por parámetro la patente, y setea la propiedad **vendido** en ***"true"*** para indicar la venta.
    - **autosParaLaVenta**: Retorna una lista con todos los autos que se encuentren en venta (***vendido: false***). 
    - **autosNuevos**: Retorna todos los autos nuevos que esten para la venta (se consideran autos nuevos aquellos que tienen menos de 100 km).
    - **listaDeVentas**: Retorna un array de precios solo de los autos vendidos.
    - **totalDeVentas**: Retorna el monto total recaudado por las ventas (sumatoria de los precios de los autos vendidos).
    - **puedeComprar**: Recibe por parámetro el auto en particular que una persona quiere comprar, y los datos de esa persona. Luego compara si la persona puede comprar (***"true"***) o no (***"false"***) el auto. El criterio de la compra consiste en que: **el precio del auto debe se menor o igual a la capacidad de pago total de la persona**, y que **el precio en cuotas del auto sea menor o igual a la capacidad de pago en cuotas de la persona**.
        - La estructura del objeto persona sera la siguiente:
            ```
            {
                nombre: 'Juan',
                capacidadDePagoEnCuotas: 100,
                capacidadDePagoTotal: 100000000
            }
            ``` 

    - **autosQuePuedeComprar**: Recibe por parámetro los datos de la persona, y la función debera retornar todos aquellos autos que la persona pueda comprar (siempre y cuando esten aun en venta).