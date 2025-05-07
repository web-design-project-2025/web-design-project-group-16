// let movies = [];

// const contentElement = document.querySelector(".search-content");

// async function loadData() {
//   const movieResponse = await fetch(
//     "https://api.themoviedb.org/3/search/movie?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
//   ); //Figure out how to fetch the "correct" movie id, arrays
//   const movieData = await movieResponse.json();
//   movies = movieData.results;
//   //   console.log(movieData);

//   renderContent();
// }

// function getMovieById(id) {
//   return movies.find((movie) => movie.id === id);
// }

// function displayMovieElement(movie) {
//   const searchMovieElement = document.createElement("div");
//   searchMovieElement.classList.add("movies-search-container");

//   // POSTER ELEMENT
//   const posterElement = document.createElement("img");
//   posterElement.classList.add("movie-poster-search");
//   //console.log(movie);
//   posterElement.src = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path;
//   searchMovieElement.appendChild(posterElement);

//   return searchMovieElement;
// }

// function renderContent() {
//   contentElement.innerHTML = "";

//   for (let movie of movies) {
//     //const film = getMovieById(movie.movie_id);
//     const descriptionElement = displayMovieElement(movie);
//     contentElement.appendChild(descriptionElement);
//   }
// }

// loadData();
