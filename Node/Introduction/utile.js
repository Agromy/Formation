const util = require ('util');
const path = require ('path');
const fs = require('fs');

// promisify (fonction de utile)

const filename = path.join(__direname, 'assets', 'content', 'hello.txt');

const fs.readFile = util.promisify(fs.readFile);

function result (file){
    console.log( String(file));
}

readFile(filename
    .then( file => console.log(String(file)))
    .catch(console.log);