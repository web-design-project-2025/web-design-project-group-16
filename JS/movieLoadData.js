const button = document.querySelector("#movieDetailsButton");
const request = event.target;
const response = request.response;

function finishedLoadingHandler(event) {
    const request = event.target;
    const response = request.response;
    /*const displayMovie = document.querySelector("#movieDetails");*/
    /*displayMovie.innerText = response[0];*/
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
 
    /*button.addEventListener("click", finishedLoadingHandler);*/
    loadData();
    
}
window.addEventListener("load", loadHandler);

/*button.addEventListener ("click", loadData); {
    finishedLoadingHandler();
    console.log(response[0]);
};*/


