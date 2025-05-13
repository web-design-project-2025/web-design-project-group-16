# Web Design Project - Neolens Website 🥳

This website is the final project for the Web Design Project course a Jönköping University. It is a group project 
and the people people behind it are Maja Johansson, Emelie Kryger and Lova Venema. It is a movie review website where 
the UI and UX design plays a big role in combination with the complexity of the code.

### What can you do with the Neolens site?🎥
* The Neolens website is for leaving reviews as well as finding honest opinions of different films. 
* Reviews can be left on the individual detail pages for the films.
* Users can find information and honest opinions about number of different movies
* Users can also read some of the latest news in the film world under the articles page
* When looking over the different films the user can also filter the various films based on preference (uppcomming, top rated etc...)

### Different Pages on the Site 🖥
* Home Page - The main page from which you can navigate to pretty much any page on the site
* Movies Page - The page from whihc you can scroll all the movies and click onto each movies separete detail page
* Moviedetails Page - The page that shows the user a whole overview of a specific film, showing information and different reviews.
  From this page you can also leave reviews.
* Reviewers Page - The page from which you can scroll different reviewers and see what they have reviewed. Here you can also filter the
  reviewers and search for films that they have reviewed
* Log in Page - If you are on the site an not logged in an klick the account button in the menu, you first get redirected to the log in page.
* Account Page - When you press "log in" on the log in page, you get redirected to the account page. This page shows you your own profile, as
  well as all the reviews you've written about different films
* Article Page - The page which displays a featured article as well as other articles for the user to read if they whish to feel updated about
  what is going in the film world.
  
### What are some main mechanics behind the site? 🦿
* The feature for leaving reviews works via JSON.
* All of the films and the information about them (such as titles, runtimes etc..) are rendered via the API TMDB through JavaScript.
* This rendering via JavaScript is used both for the page where you can scroll multiple films as well as for the individual movide pages.
  These pages therfore work with one HTML page each.
* The filtering feature also works via the TMDB API
* How to render this content has been taken from our techer Garrit Schapp, his code is the main source behind making it work, and we have also recieved
  help from the lab assistans. This is cited in the code. 
* You can also scroll different reviewers, which also uses JSON. For this tab there is also a working search function. You can look up different keywords
  such as genre or movie titles that are listed in the JSON. Due to our timeframe, this does no work through the API.

### Information about content 🖼
* All visual content that are not the movie posters are taken from Pexels, a website providing free stock images and videos
* The Featured article is a fictive article written by one of the group members
* The movie posters are taken from the TMDB API
* To be allowed to use the TMDB API, the website needs to show their logo with specific requirments, and make clear that the site is powered
    by TMDB but not owned or endorsed by them. This is specified both when a user logs in as well as at the bottom of the page when scrolling all films

### Hope you like the site, and happy reviewing! 🗯🗯
