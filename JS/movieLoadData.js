function finishedLoadingHandler(event) {
    const request = event.target;
    const response = request.response;
    console.log(response[1]);
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
window.addEventListener("load", loadHandler);