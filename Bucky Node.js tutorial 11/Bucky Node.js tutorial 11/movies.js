// exports a property shared amongst all users (ref tut 10)
//module.exports = {
//    favMovie:  ""
//}

// ref tut 11 one have to export a function creating a object at the "user level". This way
// the state is local to each user -and NOT shared between users.
// This is called using object factory.
module.exports = function () {
    return {
        favMovie: ""
    }
};
