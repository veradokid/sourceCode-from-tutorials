// youtube: thenewboston by Bucky Roberts
// source: https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_


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

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);


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

