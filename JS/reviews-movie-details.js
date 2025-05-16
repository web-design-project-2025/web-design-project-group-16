//Code taken from Garrit's Hamstergram Workshop
const ContentElement = document.getElementById("reviews");
let reviews = [];
let reviewersData = [];

// Fetch both review and reviewer data
async function loadData() {
    const [reviewResponse, reviewerResponse] = await Promise.all([
        fetch('JSON/reviews-movie-details.json'),
        fetch('JSON/reviewers.json')
    ]);

    const reviewData = await reviewResponse.json();
    const reviewerJson = await reviewerResponse.json();

    reviews = reviewData["reviews"];
    reviewersData = reviewerJson.reviewers;

    displayRandomReviews(5);
    displayUserReviews();
}

// Display one review with optional reviewer info
function displayReviewElement(review) {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("moviedetails-review");

    // Try to match the reviewer if review-id exists
    let matchedReviewer = null;

    if (review["review-id"]) {
        matchedReviewer = reviewersData.find(
            (r) => r.id === String(review["review-id"])
        );
    }

    // PROFILE IMAGE
    const profileImageElement = document.createElement("img");
    profileImageElement.classList.add("reviews-profileimage");
    profileImageElement.src = matchedReviewer?.["picture-of-me"] || "images/mockup-profilepicture.jpg";
    reviewElement.appendChild(profileImageElement);

    // SUBJECT
    const subjectElement = document.createElement("h4");
    subjectElement.classList.add("reviews-subject");
    subjectElement.textContent = review.subject;
    reviewElement.appendChild(subjectElement);

    // NAME
    const nameElement = document.createElement("h5");
    nameElement.classList.add("reviews-name");
    nameElement.textContent = matchedReviewer?.name || review.name || "Anonymous Reviewer";
    reviewElement.appendChild(nameElement);

    // USERNAME
    const usernameElement = document.createElement("h6");
    usernameElement.classList.add("reviews-username");
    usernameElement.textContent = matchedReviewer?.["account-name"] || review.username || "@user";
    reviewElement.appendChild(usernameElement);

    // RATING
    const ratingElement = document.createElement("p");
    ratingElement.classList.add("reviews-rating");
    ratingElement.textContent = `Rating: ${review.rating}`;
    reviewElement.appendChild(ratingElement);

    // POST
    const postElement = document.createElement("p");
    postElement.classList.add("reviews-post");
    postElement.textContent = review.review;
    reviewElement.appendChild(postElement);

    return reviewElement;
}

// Display random reviews from fetched data
function displayRandomReviews(count) {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    const selectedReviews = shuffled.slice(0, count);

    ContentElement.innerHTML = "";

    selectedReviews.forEach((review) => {
        const element = displayReviewElement(review);
        ContentElement.appendChild(element);
    });
}

// LOCAL STORAGE: Load user reviews
function loadUserReviews() {
    const stored = localStorage.getItem("userReviews");
    return stored ? JSON.parse(stored) : [];
}

// LOCAL STORAGE: Save user review
function saveUserReview(review) {
    const current = loadUserReviews();
    current.push(review);
    localStorage.setItem("userReviews", JSON.stringify(current));
}

// Display all user-submitted reviews 
function displayUserReviews() {
    const userReviews = loadUserReviews();
    userReviews.forEach((review) => {
        const element = displayReviewElement(review);
        ContentElement.appendChild(element);
    });
}

// Handle review form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("review-form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const subject = document.getElementById("subject").value.trim();
            const username = document.getElementById("username").value.trim();
            const name = document.getElementById("name").value.trim();
            const rating = document.getElementById("rating").value;
            const reviewText = document.getElementById("review-text").value.trim();

            if (!subject || !username || !name || !rating || !reviewText) return;

            const newReview = {
                subject,
                name,
                username,
                rating,
                review: reviewText
            };

            saveUserReview(newReview);
            const reviewElement = displayReviewElement(newReview);
            ContentElement.appendChild(reviewElement);

            form.reset();
        });
    }
});

// Initial data load
loadData();

//Comment in and out to rinse the local storage of your review
    //localStorage.removeItem("userReviews");