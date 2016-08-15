var http = require('http'); 

function onRequest(request, response) {
    //by default two objects are required as parameters. 
    //the server will send this two object to the "eventhandler"
    //the first object contains the request
    //the second object will be used to send back a response
    console.log("A user made a request" + request.url);
    response.writeHead(200, { "Context-Type": "text/plain" }); //200:everything is ok, 404:missing page
    response.write("Here is some data");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running and listening on port 8888....");

//tips!
//Whenever a web browser request a webpage it actually sends two requests
//first: for the actual webpage to look for
//second: for the graphic icon "favicon.ico"

