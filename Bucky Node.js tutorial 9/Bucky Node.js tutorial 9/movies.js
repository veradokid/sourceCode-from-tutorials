//function printAvatar() {
//    console.log("Avatar: PG-13");
//}

//function printChappie() {
//    console.log("Chapie: R");
//}

//module.exports.avatar = printAvatar;
//module.exports.chappie = printChappie;


//module.exports is created behind the scene
//first example populates this object with item/value pairs
//following example creates the exported functions inline the exports object.
//even variables may be exported this way. Public variables.
module.exports = {
    printAvatar: function () {
        console.log("Avatar");
    },
    printChappie: function () {
        console.log("Chappie");
    },
    favMovie: "The Matrix"
};
