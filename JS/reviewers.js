//Code taken from Garrit's Hamstergram Workshop
//// Search filtering
const input = document.getElementById("search-text");
const searchButton = document.getElementById("search-button");

let searchResults;

// Source for JS array filter(), https://www.w3schools.com/jsref/jsref_filter.asp Date: 10/5-2025
searchButton.addEventListener("click", function () {
  // Help from second year NMD student Erik Sanquist for the structure, explaining the steps to make the logic work.
  searchResults = reviewers.filter((reviewer, index) => {
    return (
      reviewer.name.toLowerCase().includes(input.value.toLowerCase().trim()) || // Source for trim, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim Date: 10/5-2025
      // Help from chtGPT: link: https://chatgpt.com/share/681f8fce-0f40-8007-86db-754f1d3b6327 Date: 10/5 - 2025
      reviewer.genre.some((g) =>
        g.title.toLowerCase().includes(input.value.toLowerCase().trim())
      ) || // End help chatGPT
      movies[index].movies.some((g) =>
        g.title.toLowerCase().includes(input.value.toLowerCase().trim())
      )
    );
  }); // End Help Erik for the structure

  contentElement.innerHTML = "";

  // Help from chatGPT, link: https://chatgpt.com/share/681f9e26-66c0-8007-a0f8-8d9993d8a4e5 Date: 10/5-2025
  for (let i = 0; i < searchResults.length; i++) {
    const reviewer = getReviewerById(searchResults[i].id);
    // Help from second year NMD student Erik sanquist, Date: 10/5-2025
    const movieElement = createMovieElement(
      movies.find((movie) => {
        return movie.user_id === reviewer.id;
      }),
      reviewer
    ); // End help Erik
    contentElement.appendChild(movieElement);
  }

  // End help ChatGPT
  console.log(searchResults);
});

//// Button for sort order
// Button
const sortReviewersButton = document.getElementById("sort-by-button");
const textElement = document.getElementById("sort-choices");

sortReviewersButton.addEventListener("click", function () {
  textElement.classList.toggle("visible");
});



// A-Z button
document.getElementById("sort-by-A-Z").addEventListener("click", sortMovieByAZ);



function sortMovieByAZ() {
  let sortedReviewers = reviewers.sort((curr, next) => {
    // Source https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/ Date: 11/5-2025
    if (curr.name < next.name) {
      return -1;
    }
    if (curr.name > next.name) {
      return 1;
    }
    return 0;
  });
  console.log(sortedReviewers);
  contentElement.innerHTML = ""; // Clears the old html

  // rewrite it, display on the web
  for (let i = 0; i < sortedReviewers.length; i++) {
    const reviewer = getReviewerById(sortedReviewers[i].id);
    const movieElement = createMovieElement(
      movies.find((movie) => {
        return movie.user_id === reviewer.id;
      }),
      reviewer
    );
    contentElement.appendChild(movieElement);
  }
}

function sortMovieByFavoriteGenre() {
  movies.sort((curr, next) => curr.genre - next.genre);
  console.log(movies);
}

// start: Code taken from Garrit's Hamstergram Workshop
//// Create and load the JSON files for reviwers and movies, create all elements.
// Reviewers cards
let reviewers = [];
let movies = [];
const contentElement = document.getElementById("cards");

// Load data
async function loadData() {
  const reviewerResponse = await fetch("JSON/reviewers.json"); // Load the reviewers
  const reviewerJSON = await reviewerResponse.json(); // Create the json
  reviewers = reviewerJSON.reviewers; // Saving the reviwers into our array, .reviewers is because that is how our json is formated

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

  // Name
  const nameElement = document.createElement("h3");
  nameElement.textContent = reviewer["name"];
  nameElement.classList.add("reviewer-name");
  textContainer.appendChild(nameElement);

  // Email
  const emailElement = document.createElement("p");
  emailElement.textContent = reviewer["account-name"];
  emailElement.classList.add("reviewer-email");
  textContainer.appendChild(emailElement);

  // Favorite genres
  const favoriteElement = document.createElement("p");
  favoriteElement.textContent = reviewer["favorite-genres"];
  favoriteElement.classList.add("reviewer-favorite");
  textContainer.appendChild(favoriteElement);

  // Div around all 3 icons
  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("icons-container");
  textContainer.appendChild(iconsContainer);

  // Different genres icons
  const icons = [];

  for (let i = 0; i < 3 && i < reviewer.genre.length; i++) {
    const icon = document.createElement("img");
    icon.src = reviewer.genre[i].image; // Help from second year NMD student Erik sandquist, Date: 10/5-2025
    icon.alt = `Genre icons ${i + 1} `;
    icon.classList.add("icons-img");
    icons.push(icon);
    iconsContainer.appendChild(icon);
  }

  // Reviewer text
  const textElement = document.createElement("p");
  textElement.textContent = reviewer["text"];
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
    img.src = movieGroup.movies[i].image; // Help from second year NMD student Erik sandquist, Date: 10/5-2025
    img.alt = `Movie Poster ${i + 1} `;
    img.classList.add("movie-img");
    images.push(img);
    movieContainer.appendChild(img);
  }
  // End help from chatGPT
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
