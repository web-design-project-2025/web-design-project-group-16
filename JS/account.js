function displayReviewElement(review) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("moviedetails-review");

  // PLACEHOLDER ( for adding a placeholder image instead of a poster, but it won't work)
  const placeholderElement = document.createElement("img");
  placeholderElement.classList.add("placeholder");
  placeholderElement.src = "images/Movie-Posters/placeholder-poster.jpg";
  reviewElement.appendChild(placeholderElement);

  // SUBJECT
  const subjectElement = document.createElement("h2");
  subjectElement.classList.add("reviews-subject");
  subjectElement.textContent = review.subject;
  reviewElement.appendChild(subjectElement);

  // RATING
  const ratingElement = document.createElement("h3");
  ratingElement.classList.add("rating");
  ratingElement.textContent = `Rating: ${review.rating}`;
  subjectElement.appendChild(ratingElement);

  // POST
  const postElement = document.createElement("p");
  postElement.classList.add("reviews-post");
  postElement.textContent = review.review;
  ratingElement.appendChild(postElement);

  return reviewElement;
}

//Help from teacherassistant

async function loadData() {
  const userReviews = JSON.parse(localStorage.userReviews);
  const ContentElement = document.querySelector(".account-reviews-container");
  const element = displayReviewElement(userReviews[0]);
  ContentElement.appendChild(element);
}

window.addEventListener("storage", loadData());
//loadData();

// Comment in and out to rinse the local storage of your review
//localStorage.removeItem("userReviews");
