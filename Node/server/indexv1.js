const http = require('http');
const url = require ("url");

const server = http.createServer();

server.on ('request', (request, response)=>{

    console.log('New Request catch: %s', request.url);
    response.setHeader('Content-Type', 'text/html;charset=utf-8');

     let page = url.parse(request.url).pathname;
     if(page === "/") {
         response.write('<h1>yatacool</h1>');
         response.write('<p><a href="/contact"> Contact </a></p>');

     } else if (page === "/contact"){
         response.write('<h1>contact</h1>');
         response.write('<p>viens la mon cochon</p>');
         response.write('<p><a href="/">Revenir à l\'accueil" </a></p>');
     }
     else {
         response.statusCode = 404;
         response.write("erreur 404 : Not found");
         response.write('<p>Revenir à la page d\'<a href="/">accueil</a></p>');

     }
    response.end();
});

server.listen(3521);
console.log('** Personal Node Server is listening on localhost : 3521, ' + 'open your bowser on http://localhost:3521/ **');
console.log('** Shutdown PNS with CTRL+C **');
