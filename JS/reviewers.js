// Button
const filterReviewersButton = document.getElementById("filter-button");
const textElement = document.getElementById("filter-choices");

filterReviewersButton.addEventListener("click", function () {
  textElement.classList.toggle("visible");
});

// Reviewers cards
let reviewers = [];
let movies = [];
const contentElement = document.getElementById("cards");

// Load data
async function loadData() {
  const reviewerResponse = await fetch("JSON/reviewers.json"); // Load the reviewers
  const reviewerJSON = await reviewerResponse.json(); // Create the json
  reviewers = reviewerJSON.reviewers; // saving the reviwers into our array, .reviewers is because that is how our json is formated

  const movieResponse = await fetch("JSON/reviewers-movies.json");
  const movieJSON = await movieResponse.json();
  movies = movieJSON.movies;

  renderContent();
}

// Finding the user
function getReviewerById(id) {
  return reviewers.find((reviewer) => reviewer.id === id); // Type check
}

// Render each single movie package, 4 movies under one id
function createMovieElement(movieGroup, reviewer) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("container");

  // const allInfoContainer = document.createElement("div");
  // allInfoContainer.classList.add("all-info");
  // moviesContainer.appendChild(allInfoContainer);

  // const reviewerElement = document.createElement("div");
  // reviewerElement.classList.add("reviewer");

  // Div around the image of the reviewer and text container
  const imgTextContainer = document.createElement("div");
  imgTextContainer.classList.add("image-text");
  cardContainer.appendChild(imgTextContainer);

  // Reviewer image
  const image = document.createElement("img");
  image.src = reviewer["picture-of-me"];
  image.classList.add("reviewer-image");
  imgTextContainer.appendChild(image);

  // Div around all text exept recently reviewed
  const textContainer = document.createElement("div");
  textContainer.classList.add("text");
  imgTextContainer.appendChild(textContainer);

  // Name and email
  const nameElement = document.createElement("h3");
  nameElement.textContent = reviewer.name;
  nameElement.classList.add("reviewer-name");
  textContainer.appendChild(nameElement);

  const emailElement = document.createElement("p");
  emailElement.textContent = reviewer["account-name"];
  emailElement.classList.add("reviewer-email");
  textContainer.appendChild(emailElement);

  // Favorite genres
  const favoriteElement = document.createElement("p");
  favoriteElement.textContent = reviewer["favorite-genres"];
  favoriteElement.classList.add("reviewer-favorite");
  textContainer.appendChild(favoriteElement);

  // Reviewer text
  const textElement = document.createElement("p");
  textElement.textContent = reviewer.text;
  textElement.classList.add("reviewer-text");
  textContainer.appendChild(textElement);

  // Recently reviewed
  const recentlyElement = document.createElement("p");
  recentlyElement.textContent = reviewer["recently-reviewed"];
  recentlyElement.classList.add("reviewer-recently");
  cardContainer.appendChild(recentlyElement);

  // Div around all 4 movies
  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");
  cardContainer.appendChild(movieContainer);

  // Movie posters
  const images = [];

  // Help from chatGPT, date: 6/5 - 2025, link https://chatgpt.com/share/6819d798-0d64-8007-a3d7-b23008610074
  for (let i = 0; i < 4 && i < movieGroup.movies.length; i++) {
    const img = document.createElement("img");
    img.src = movieGroup.movies[i];
    img.alt = `Movie Poster ${i + 1} `;
    img.classList.add("movie-img");
    images.push(img);
    movieContainer.appendChild(img);
  }
  // End help from chatGPT

  // Help from chatGPT, date: 6/5 - 2025 link: https://chatgpt.com/share/6819dd90-23f0-8007-98af-92aba6a093cb
  // moviesContainer.appendChild(reviewerElement);
  return cardContainer;
}

// go through all the movies, for each movie, create a movieelement and put it on the list
function renderContent() {
  contentElement.innerHTML = "";

  for (let movie of movies) {
    const reviewer = getReviewerById(movie.user_id); // Catch the reviewer that belongs to the movies
    const movieElement = createMovieElement(movie, reviewer);
    contentElement.appendChild(movieElement);
  }
}

loadData();
