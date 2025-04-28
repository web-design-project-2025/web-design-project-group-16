let movies = [];
let reviews = [];
const contentElement = document.getElementById("content");

async function loadData() {
  const movieResponse = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=41633bc6f1e4947d357fb72eeb8115ed" // How to implement the key into the js taken form:https://www.youtube.com/watch?v=03FAepR-WVQ
  ); //Figure out how to fetch the "correct" movie id, arrays
  const movieData = await movieResponse.json();
  movies = movieData.movie;
  console.log(movieData);

  renderContent();
}

/*async function loadData() {
    const movieResponse = await fetch("http://www.omdbapi.com/?apikey=[yourkey]&");
    const movieJSON = await movieResponse.json();
    movies = movieJSON.movie;
    console.log(movieJSON);

    const reviewResponse = await fetch("JSON/user.json");
    const reviewJSON = await reviewResponse.json();
    reviews = reviewJSON.review;
    console.log(reviewJSON);

    renderContent();
}*/

function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

function createReviewElement(review, movie) {
  const reviewElement = document.createElement("article");
  reviewElement.classList.add("review");

  const headerElement = document.createElement("div");
  headerElement.classList.add("padding", "header");
  reviewElement.appendChild(headerElement);

  const imageElement = document.createElement("img");
  imageElement.src = review.image;
  reviewElement.appendChild(imageElement);

  return reviewElement;
}

function renderContent() {
  contentElement.innerHTML = "";

  for (let review of reviews) {
    const movie = getMovieById(review.movie_id);
    const reviewElement = createReviewElement(review, movie);
    contentElement.appendChild(reviewElement);
  }
}

loadData();
