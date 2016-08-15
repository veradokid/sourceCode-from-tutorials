console.log("movies module");
//exporting a propery, shared between users.
//module.exports = {
//    favMovie: "SVK"
//}

//exporting an object. The object is created using a function.
//this is an "OBJECT FACTORY"
//no each user requiring this module gets his own copy or instanse of this object created in the module:movies
module.exports = function () {
    return {
        favMovie: ""
    }
}