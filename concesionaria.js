const autos = require('./autos');

let concesionaria = {
    autos : autos,
    buscarAuto: function(pPatente){
        let busqueda = this.autos.find(auto => auto.patente === pPatente)
        return busqueda === undefined ? null : busqueda;
    },
    venderAuto: function(pPatente){
        let autoEncontrado = this.buscarAuto(pPatente);
        if (autoEncontrado !== null) {
            autoEncontrado.vendido = true;
        }
    },
    autosParaLaVenta: function(){
        let listParaVenta = this.autos.filter(auto => auto.vendido === false);
        return listParaVenta.length > 0 ? listParaVenta : null;
    },
    autosNuevos: function(){
        let listVenta = this.autosParaLaVenta();
        let listAutosCero = listVenta.filter(auto => auto.km < 100); 
        return listAutosCero;
    },
    listaDeVentas: function(){
        let listPrecio = [];
        this.autos.forEach((auto) => {
            if (auto.vendido === true) {
                listPrecio.push(auto.precio);
            }
        });
        return listPrecio; 
    },
    totalDeVentas: function(){
        let listPrecioVendido = this.listaDeVentas();
        return listPrecioVendido.reduce((acum,num) => acum + num,0); 
    },
    puedeComprar: function(auto, persona) {
        let precioCuotas = auto.precio / auto.cuotas;
        return auto.precio <= persona.capacidadDePagoTotal &&  precioCuotas <= persona.capacidadDePagoEnCuotas ? true: false;
    },
    autosQuePuedeComprar: function(persona) {
        let puedeComprar =  [];
        let listaDeVenta = this.autosParaLaVenta();
        
        listaDeVenta.forEach((auto) => {
            if (this.puedeComprar(auto,persona)) {
                puedeComprar.push(auto.precio);
            }
        });

        return puedeComprar;
    }
    
}

/*
   puedeComprar: function(auto, persona) {
        let precioCuotas = auto.precio / auto.cuotas;
        if ((auto.precio <= persona.capacidadDePagoTotal) && ( precioCuotas <= persona.capacidadDePagoEnCuotas)) {
            return true;
        }
        
        return  false;
    }*/

//(acum, pelicula) => acum + pelicula.price, 0

//module.exports = concesionaria;
//console.log(concesionaria.buscarAuto('APL13'));

//console.log('todos los autos:');
//console.log(concesionaria.autos);
//console.log('Autos para la venta:');
//console.log(concesionaria.autosParaLaVenta());
//console.log('Vender Auto con patende JJK116' );
//concesionaria.venderAuto('JJK116');
//console.log('Autos para la venta');
//console.log(concesionaria.autosParaLaVenta());
//console.log('ARRAY de PRECIOS de AUTOS VENDIDOS:');
//console.log(concesionaria.listaDeVentas());

//console.log('total');
//console.log(concesionaria.totalDeVentas());

/*console.log(concesionaria.puedeComprar(
    {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Blanco',
    anio: 2019,
    km: 0,
    precio: 150000,
    cuotas: 12,
    patente: 'JJK116',
    vendido: false
    },
    {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 100,
    capacidadDePagoTotal: 100000000
    }
    ));*/

    console.log(concesionaria.autosQuePuedeComprar(
        {
        nombre: 'Juan',
        capacidadDePagoEnCuotas: 100,
        capacidadDePagoTotal: 100000000
        }
        ));
       

    //Un auto con precio: 150000 y cuotas: 12 no puede ser comprado por una persona con capacidadDePagoEnCuotas:100 y capacidadDePagoTotal 100000000
