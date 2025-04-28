let movies = [];
let reviews = [];
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
  movieElement.classList.add("movie-container");

  // POSTER ELEMENT
  const posterElement = document.createElement("img");
  posterElement.classList.add("movie-poster");
  //console.log(movie);
  posterElement.src = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path;
  movieElement.appendChild(posterElement);

  // TITLE ELEMENT
  const titleElement = document.createElement("h1");
  titleElement.classList.add("title");
  //console.log(movie);
  titleElement.textContent = movie.original_title;
  movieElement.appendChild(titleElement);

  // RELEASE DATE
  //   const releaseDateElement = document.createElement("h2");
  //   releaseDateElement.classList.add("release-date");
  //   //console.log(movie);
  //   releaseDateElement.textContent = movie.release_date;
  //   movieElement.appendChild(releaseDateElement);

  return movieElement;
}

function renderContent() {
  contentElement.innerHTML = "";

  for (let movie of movies) {
    //const film = getMovieById(movie.movie_id);
    const descriptionElement = displayMovieElement(movie);
    contentElement.appendChild(descriptionElement);
  }
  //const movie = getMovieById(1197306);
  //const descriptionElement = displayMovieElement(movie);
  //contentElement.appendChild(descriptionElement);
}

loadData();
