var movies = require('./movies');
console.log("wendy");

var wendysMovies = movies();
wendysMovies.favMovie = "The Notebook";
console.log("Wendy's favorite movie is: " + wendysMovies.favMovie);

