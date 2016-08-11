function printAvatar() {
    console.log("Avatar: PG-13");
}

function printChappie() {
    console.log("Chappie: R");
}

//this is available for outside world using import (require)
//this is iow available in public scope -as opposed to the content above which is private
module.exports.avatar = printAvatar;