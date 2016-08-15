//Core modules
//buildtin to Node.js
//a ton of core modules. Will be explained as we need them

//show common practise:
//-Omit the .js extension
//-name the local variable the same as the required module

var fs = require('fs'); //file system core module. Omit the .js extension
fs.writeFileSync("corn.txt", "Corn is good for you");
console.log(fs.readFileSync("corn.txt").toString());
