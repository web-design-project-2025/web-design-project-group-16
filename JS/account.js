function displayReviewElement(review) {
    
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("moviedetails-review");

    // PLACEHOLDER ( for adding a placeholder image instead of a poster, but it won't work)
    const placeholderElement = document.createElement("img");
    placeholderImageElement.classList.add("placeholder");
    placeholderElement.src = review.placeholder || "images/Movie-Posters/placeholder-poster.jpg";
    reviewElement.appendChild(placeholderElement);

    // SUBJECT
    const subjectElement = document.createElement("h2");
    subjectElement.classList.add("reviews-subject");
    subjectElement.textContent = review.subject;
    reviewElement.appendChild(subjectElement);

    // // NAME
    // const nameElement = document.createElement("h5");
    // nameElement.classList.add("reviews-name");
    // //nameElement.textContent = matchedReviewer.name || review.name || "Anonymous Reviewer";
    // reviewElement.appendChild(nameElement);

    // USERNAME
    // const usernameElement = document.createElement("h6");
    // usernameElement.classList.add("reviews-username");
    // //usernameElement.textContent = matchedReviewer?.["account-name"] || review.username || "@user";
    // reviewElement.appendChild(usernameElement);

    // RATING
    const ratingElement = document.createElement("h3");
    ratingElement.classList.add("rating");
    ratingElement.textContent = `Rating: ${review.rating}`;
    reviewElement.appendChild(ratingElement);

    // POST
    const postElement = document.createElement("p");
    postElement.classList.add("reviews-post");
    postElement.textContent = review.review;
    reviewElement.appendChild(postElement);

    return reviewElement;
}

//Help from teacherassistant

async function loadData() {
   //displayReviewElement(localStorage.userReviews);
   const userReviews = JSON.parse(localStorage.userReviews);
   const ContentElement = document.getElementById("account-reviews");
//    accountReview.forEach((review) => {
//        const element = displayReviewElement(review);
//        ContentElement.appendChild(element);
//    });
   const element = displayReviewElement(userReviews[0]);
    ContentElement.appendChild(element);
}

window.addEventListener("storage", loadData());
//loadData();

// Comment in and out to rinse the local storage of your review
    //localStorage.removeItem("userReviews");