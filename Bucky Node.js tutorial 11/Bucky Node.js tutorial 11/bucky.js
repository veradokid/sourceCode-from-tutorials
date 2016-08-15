var movies = require('./movies');
console.log("bucky");

var buckysMovies = movies();
buckysMovies.favMovie = "The Matrix";
console.log("Bucky's favorite movie is: " + buckysMovies.favMovie);
