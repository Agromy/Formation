const express = require('express');
const path = require ('path');
const app = express();

const njk = require ('nunjucks').configure(`${__dirname}/template`, {
    autoescape: true,
    express: app
});


app.use( express.static(__dirname)); //fichiers statics

app.get('/', (request, response)=> {
    // blocker la faille XSS
    let userSource = "<script>alert('xss')</script>";


    response.render('accueil.njk.html', {html: userSource});
});

app.get('/hello/:name', (request, response)=> {
   let name = request.params.name;
    response.render('hello.njk.html', {name : name});

});

app.get('/old', (request, response)=>{
    let html = `
<html >
<head>
 *  <meta charset="UTF-8">
   <link rel="stylesheet" href=./public/css/style.css">
 
</head>
<h1>Polololop</h1>
<main> pouet</main>
</body>
</html>`;
   response.end (html);
});


app.listen(3521, ()=> {
      console.log("web server listenning at http://localhost:3521");
});
