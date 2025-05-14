//Code taken from Garrit's Hamstergram Workshop
let movies = [];

const contentElement = document.getElementById("content");

async function loadData() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  ); //Figure out how to fetch the "correct" movie id, arrays
  const movieData = await movieResponse.json();
  movies = movieData.results;
  console.log(movieData);

  renderContent();
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

function displayMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movies-homepage-container");

  // POSTER ELEMENT
  const posterElement = document.createElement("img");
  posterElement.classList.add("movie-poster-homepage");
  //console.log(movie);
  posterElement.src = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path;
  movieElement.appendChild(posterElement);

  return movieElement;
}

function renderContent() {
  contentElement.innerHTML = "";

  for (let movie of movies) {
    //const film = getMovieById(movie.movie_id);
    const descriptionElement = displayMovieElement(movie);
    contentElement.appendChild(descriptionElement);
    descriptionElement.addEventListener("click", () => {
      window.location.href = `moviedetails.html?id=${movie.id}`; // on the click, go to the location on the window where you get a link, where the link will redirect you to the html where the movie id is equal to the id of the movie you pressed
    });
  }
}

loadData();
