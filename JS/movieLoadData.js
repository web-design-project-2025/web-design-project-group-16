const button = document.querySelector("#movieDetailsButton");
const displayMovie = document.querySelector("#movieDetails");
// const request = event.target;
// const response = request.response;

function finishedLoadingHandler(event) {
  const request = event.target;
  const response = request.response;
  console.log(response[0]);
}

function loadData() {
  const request = new XMLHttpRequest();
  request.responseType = "json";

  const url = "JSON/movie.json";
  const method = "GET";
  request.open(method, url);
  request.addEventListener("load", finishedLoadingHandler);
  request.send();
}

function loadHandler() {
  loadData();
}

function getMovieByID(id) {}

window.addEventListener("load", loadHandler);

// button.addEventListener("click", function (event) {
//   finishedLoadingHandler();
// });
