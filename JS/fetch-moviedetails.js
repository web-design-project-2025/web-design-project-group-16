// let movies = [];
// let reviews = [];
const contentElement = document.getElementById("content");
const params = new URLSearchParams(document.location.search); // Taken from Garrits Example + help lab assistanst
let movieID = parseInt(params.get("id"));

async function loadData() {
  const movieResponse = await fetch(
    //https://api.themoviedb.org/3/movie/ - + and stuff
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=41633bc6f1e4947d357fb72eeb8115ed` // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ & help from lab assistants
  ); //Figure out how to fetch the "correct" movie id, arrays, help with specifying ID from lab assistans
  const movieData = await movieResponse.json();
  // movies = movieData.results;
  console.log(movieData);

  renderContent(movieData);
}

// function getMovieById(id) {
//   return movies.find((movie) => movie.id === id);
// }

function displayMovieElement(movie) {
  console.log(movie);
  const movieDetailsElement = document.createElement("div");
  movieDetailsElement.classList.add("moviedetails-container");

  // POSTER ELEMENT
  const posterElement = document.createElement("img");
  posterElement.classList.add("moviedetails-poster");
  posterElement.src = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path;
  movieDetailsElement.appendChild(posterElement);

  // TITLE ELEMENT
  const titleElement = document.createElement("h1");
  titleElement.classList.add("moviedetails-title");
  //console.log(movie);
  titleElement.textContent = movie.original_title;
  movieDetailsElement.appendChild(titleElement);

  // RELEASE DATE
  const releaseDateElement = document.createElement("h2");
  releaseDateElement.classList.add("moviedetails-release-date");
  //console.log(movie);
  releaseDateElement.textContent = movie.release_date;
  titleElement.appendChild(releaseDateElement);

  //SYNOPSIS
  const synopsisElement = document.createElement("p");
  synopsisElement.classList.add("moviedetails-synopsis");
  synopsisElement.textContent = movie.overview;
  releaseDateElement.appendChild(synopsisElement);

  //GENRE
  const genreElement = document.createElement("h3");
  genreElement.classList.add("moviedetails-genre");
  let genres = movie.genres;
  for (let genre of genres) {
    //help lab assistants
    genreElement.textContent += genre.name;
  }
  synopsisElement.appendChild(genreElement);

  //RUNTIME
  const runtimeElement = document.createElement("h3");
  runtimeElement.classList.add("moviedetails-runtime");
  runtimeElement.textContent = movie.runtime + "minutes";
  genreElement.appendChild(runtimeElement);

  return movieDetailsElement;
}

function renderContent(movie) {
  contentElement.innerHTML = "";
  // const movie = getMovieById(movieID);
  // console.log(movieID);
  const descriptionElement = displayMovieElement(movie);
  contentElement.appendChild(descriptionElement);
}

// Error handling with the help of chat https://chatgpt.com/share/6819f849-49cc-8008-a393-6ff2cae0cbcc

loadData();
