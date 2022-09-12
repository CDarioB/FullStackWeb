const peliculas = require ('./app-movies/movies');

const moviesDH = {
    listarMovies: function(){
        peliculas.forEach((pelicula, indice)  => {
            console.log(indice + 1 , ' ', pelicula.title)
        })
    },
    searchMovie: function(parametro){
        let resultado = peliculas.filter(elemento => elemento.title === parametro || elemento.id === parametro)
        if(resultado.length == 0){
           return "No se encuentra la pelicula que buscas"
        } else{
           return resultado[0]
        }
    },
    searchMovieTernario: function (idMovie) {
        let searchMovie = peliculas.find(movie => idMovie === movie.id || idMovie === movie.title) // {} o undefined
        return searchMovie !== undefined ? searchMovie : null;
        // CONDICION ? VERDADERO : FALSO
    },
    searchMoviesByGenre: function(genero) {
        let filtrado = peliculas.filter(peliculas => peliculas.genre == genero);
        filtrado.length == 0 ? console.log("Lo sentimos :(😒") : console.log(filtrado)
    },
    searchMoviesByGenreSoraimar: function (genre){
        let result = peliculas.filter(function (movie){
          return movie.genre === genre ;
        })
        // TODO: investigar si existe una mejor forma de hacerlo
        return result[0] ? result : null;
    },
    searchMovieByGenreNico: function(genero){
        // let peliculas = this.leerArchivo()
        let generoPelicula = peliculas.filter(elemento => elemento.genre === genero);
        if (generoPelicula.length > 0){
           return generoPelicula
        } else {
           return null
        }
    },
    totalPrice: function(){
        let price = peliculas.reduce((acum, pelicula) => acum + pelicula.price, 0)
        return console.log(price)
    },
    changeMovieGenre: function (id, generoNuevo) {
        let movie = this.searchMovie(id)

        console.log('antes de modificar')
        console.log(movie)
        movie.genre = generoNuevo;
        console.log('despues de modificar')
        console.log(movie)

    }
}

console.log('Equipo 8, 4, 6, 3')
console.log("##############")
console.log("Listado de peliculas")
moviesDH.listarMovies()
console.log("##############")
console.log("Pelicula buscada")
console.log(moviesDH.searchMovie("The fast & the furious"))
console.log(moviesDH.searchMovieTernario(1))
console.log("##############")
console.log("Pelicula buscada por genero")
console.log(moviesDH.searchMoviesByGenreSoraimar('Aventuras'))
console.log("##############")
console.log("Total price")
moviesDH.totalPrice()
console.log("##############")
console.log("Cambio de genero")
moviesDH.changeMovieGenre(3, 'Accion')

