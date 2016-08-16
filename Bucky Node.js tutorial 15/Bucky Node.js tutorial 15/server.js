var connect = require('connect');
var http = require('http');

var listeningPort = 8888;
var app = connect();

//1.
function doSecond(request, response, next) {
    console.log("eggs");
    next();
}
function doFirst(request, response, next) {
    console.log("bacon");
    next();
}

//2.
function profile() {
    console.log("User requested profile");
}
function forum() {
    console.log("User requested forum");
}



//1. stack of functions relevant for the app object
//use next() keyword to daisychain and execute several functions one after the other
//the order in the stack is decided by the order below.
app.use(doFirst);
app.use(doSecond);


//2. Based on url, decide what function to call
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(listeningPort);
console.log("Server is running....");

