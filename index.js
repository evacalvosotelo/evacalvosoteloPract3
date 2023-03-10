const getFilms = async (nombreDePelícula) => {
    let data;
    let request = await fetch("https://www.omdbapi.com/?apikey=47fb7234&t=" + nombreDePelícula, {
        method: "GET"
    });
    if (request.status === 200) {
        data = await request.json();
        console.log(data);
        let poster = data.Poster;
        console.log(data.Poster);
        imagen = document.getElementById('imagen-pelicula');
        imagen.src = poster;
        titulo = document.getElementById("h2-titulo");
        if (data.Title == undefined) {
            titulo.textContent = "Película no encontrada :("
            rating = document.getElementById("rating");
            rating.textContent = " ";
            director = document.getElementById("director");
            director.textContent = " ";
            awards = document.getElementById("awards-text");
            awards.textContent = " ";
            awards2 = document.getElementById("awards");
            awards2.classList.add("escondido")
        }
        else {
            titulo.textContent = "Titulo: " + data.Title;
            rating = document.getElementById("rating");
            rating.textContent = "Valoración de IMDB: " + data.imdbRating;
            director = document.getElementById("director");
            director.textContent = "Director: " + data.Director;
            awards = document.getElementById("awards-text");
            awards.textContent = data.Awards;
            awards2 = document.getElementById("awards");
            awards2.classList.remove("escondido")
        }

    }
}

const buscarPelicula = () => {
    divPeliculaBuscada = document.getElementById("div-pelicula-buscada");
    divPeliculaBuscada.innerHTML = '';
    nombre = document.getElementById('input-pelicula').value;
    const elemento = document.createElement('h1');
    elemento.textContent = 'Tu película';
    elemento.classList.add("head1");
    divPeliculaBuscada.appendChild(elemento);
    getFilms(nombre);
}
