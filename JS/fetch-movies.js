//Code taken from and inspired by Garrit's Hamstergram Workshop
let movies = [];
let reviews = [];
const contentElement = document.getElementById("content");

/* --- FUNCTIONS TO RENDER THE DATA START --- */

/* Original function for rendering the content, showing a random selection of films*/
async function loadData() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  );
  const movieData = await movieResponse.json();
  movies = movieData.results;

  renderContent();
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

/* Function to display different elements of the movie */
function displayMovieElement(movie) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-container");

  // DIV AROUND IMG
  const imageElement = document.createElement("div");
  imageElement.classList.add("image-container");
  movieElement.appendChild(imageElement);

  // POSTER ELEMENT
  const posterElement = document.createElement("img");
  posterElement.classList.add("movie-poster");
  posterElement.src = "https://image.tmdb.org/t/p/w1280/" + movie.poster_path;
  imageElement.appendChild(posterElement);

  // TITLE ELEMENT
  const titleElement = document.createElement("h1");
  titleElement.classList.add("moviedetails-title");
  titleElement.textContent = movie.original_title;
  movieElement.appendChild(titleElement);

  return movieElement;
}

/* Function to render the content as well as being redirected to the moviedetails page if a movie is clicked */
function renderContent() {
  contentElement.innerHTML = "";

  for (let movie of movies) {
    const descriptionElement = displayMovieElement(movie);
    descriptionElement.addEventListener("click", () => {
      window.location.href = `moviedetails.html?id=${movie.id}`;
    }); //Help from lab assistants to make the redirect work
    contentElement.appendChild(descriptionElement);
  }
}

loadData();

/* --- FUNCTIONS TO RENDER THE DATA END --- */

/* --- MAIN FILTERING START --- */

/* Elements taken from HMTL */
const filterButton = document.querySelector("#filter-button");
const dropDownMenuElement = document.querySelector(".dropdown-content");
const upcommingButtonElement = document.querySelector("#upcomming-button");
const topRatedButtonElement = document.querySelector("#topRated-button");
const mostPopularButtonElement = document.querySelector("#mostPopular-button");

/* This function loads data for upcomming films */
async function loadDataUpcomming() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  );
  const movieData = await movieResponse.json();
  movies = movieData.results;

  renderContent();
}

/* This function loads data for Top Rated films */
async function loadDataTopRated() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  );
  const movieData = await movieResponse.json();
  movies = movieData.results;

  renderContent();
}

/* This function loads data for Most Popular films */
async function loadDataMostPopular() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  );
  const movieData = await movieResponse.json();
  movies = movieData.results;

  renderContent();
}

/* Toggle for filter options - insipration taken partly from old project and W3 schools */ /* https://www.w3schools.com/howto/howto_js_dropdown.asp */
filterButton.addEventListener("click", function (event) {
  dropDownMenuElement.classList.toggle("dropdown-content-show");
});

/* Rendering upcomming Films */
upcommingButtonElement.addEventListener("click", () => {
  /* Inspiration taken/code from stack overflow https://stackoverflow.com/questions/73174313/how-to-use-async-await-on-event-handlers-on-buttons-in-javascript*/
  loadDataUpcomming();
});

/* Rendering Top Rated Films */
topRatedButtonElement.addEventListener("click", () => {
  loadDataTopRated();
});

/* Rendering Most Popular Films */
mostPopularButtonElement.addEventListener("click", () => {
  loadDataMostPopular();
});

/* --- MAIN FILTERING END --- */
