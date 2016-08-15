//Core modules
//buildtin to Node.js
//a ton of core modules. Will be explained as we need them

//show common practise:
//-Omit the .js extension
//-name the local variable the same as the required module


//fs (filesystem) core module
//handling files
var fs = require('fs'); //file system core module. Omit the .js extension
fs.writeFileSync("corn.txt", "Corn is good for you");
console.log(fs.readFileSync("corn.txt").toString());

//Path core module
//paths, filenames, 
var path = require('path');
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html"; 

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));


//setInterval
setInterval(function () {
    console.log("beef");
}, 2000);

