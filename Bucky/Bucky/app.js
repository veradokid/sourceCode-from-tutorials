// youtube: thenewboston by Bucky Roberts
// source: https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_

//tutorial 8
console.log("\n//Node.js Tutorial for Beginners");
console.log("//8 Modules");
//break code into different files
//group similar code together in separate files


var movies = require('./movies'); //never include the '.js' extension. explicitly use path
//including extension will create problems in some contexts
//omit the path when importing core modules
movies.avatar();


//tutorial 7
console.log("\n//Node.js Tutorial for Beginners");
console.log("//7 Prototyping");

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

//play game
var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
//Life status
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//add function using prototype
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercuttet " + targetPlayer.name);
};


Wendy.uppercut(Bucky);
//Life status
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

//add properties using prototype
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);

// tutorial 6
console.log("\n//Node.js Tutorial for Beginners");
console.log("//6 this");
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky");
        console.log(this === Bucky);
    }
}
Bucky.printFirstName();

//default calling context is global
function doSomethingWorthless() {
    console.log("My name is Worthless");
    console.log(this === global);
}
doSomethingWorthless();

// tut5 - == vs ===
console.log(19 == '19'); //true bc same value
console.log(19 === '19'); //false bc different type

console.log("\n//Node.js Tutorial for Beginners");
console.log("//5 Everything is a reference");

var Bucky = {
    favFood: "backon",
    favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "Salad";
console.log(Bucky.favFood);

