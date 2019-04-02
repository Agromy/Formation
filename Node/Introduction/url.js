const nodeUrl = require('url')
const {format} = require ('url'); //permet de récupéré uniquement la fonction format()

let url = new URL('https://user:password@www.dawan.fr:8080/node?page=1#plan');

//la fonction parse permet de découper les fonctions de l'objet et de les afficher via le console.log
 console.log(nodeUrl.parse('https://user:password@www.dawa.fr:8080/node?page=1#plan'));

 console.log(url)
console.log("Protocol: %s; Hostname: %s", url.protocol, url.hostname);

 let option ={
     auth : false,
    // la partie fragment d'une url est ce qui se trouve derriere le diese
     fragment :false,
     search : false,
 };

 console.log(format(url, option));

let newUrl = format(url, option);

console.log( newUrl ) ;

let newUrlObjet = new URL(newUrl);

newUrlObjet.searchParams.set('page', 2);
newUrlObjet.searchParams.append('limit', 5);

console.log(newUrlObjet.toString());