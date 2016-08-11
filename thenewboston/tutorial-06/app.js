console.log("Node.js Tutorial for Beginners");
console.log("6 this");

// this referes to the thing that called it
console.log("\n tutorial 6");
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