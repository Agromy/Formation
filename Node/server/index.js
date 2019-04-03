const http = require('http');
const url = require ("url");
const fs = require ('fs');
const path = require ('path');

const mimeType = {
    '.css': 'text/css'
};

const server = http.createServer();

const router = require ('find-my-way')({
   defaultRoute: (request, response) => {

       let page = url.parse(request.url).pathname;

       if ( !fs.existsSync(path.join(__dirname, page))){
           let html = `<h1>"erreur 404 : Not found</h1>
      <p>Revenir à la page d\'<a href="/">accueil</a></p>`;
       response.statusCode = 404;
       response.end(html);
   }else{
       fs.readFile( path.join(__dirname, page),(err, data) => {
           if(err){
               response.statusCode=500;
               response.end('Internal error');
           }else{
               const ext = path.parse(page).ext;
               response.setHeader('Content-Type', mimeType[ext] || 'text/plain')
               response.end(data);
           }
       });
       }
   }
});

router.get("/", (request, response)=> {
    let html =`
    <html> 
        <head>
        <title>Accueil</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
<h1>accueil</h1>
         <p>viens la mon cochon</p>
         <p><a href="/">Revenir à l'accueil" </a></p>
</body>
    </html>`;
    response.end(html);
});

router.get("/contact", (request, response)=> {
    let html =`
    <html> 
        <head>
        <title>Contact</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
<h1>contact</h1>;
         <p>viens la mon cochon</p>
         <p><a href="/">Revenir à l'accueil" </a></p>
</body>
    </html>`;
    response.end(html);

});

server.on ('request', (request, response)=>{

    console.log('New Request catch: %s', request.url);
    response.setHeader('Content-Type', 'text/html;charset=utf-8');

router.lookup(request, response);

});

server.listen(3521);
console.log('** Personal Node Server is listening on localhost : 3521, ' + 'open your bowser on http://localhost:3521/ **');
console.log('** Shutdown PNS with CTRL+C **');
