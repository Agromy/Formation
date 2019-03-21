'use strict'

import {PI} from "./example.js";
console.log(PI);

// l'étoile permet d'importer toutes les variables définies dans example.js
import * as truc from "./example.js";

console.log(truc.PI);
truc.myFunction();
// n'affichera rien car variable n'est pas défini dans exemple JS, il est cloisonné dans myFunction
console.log(truc.variable);


import {
    Gallery
} from "./gallery.js";

//permet d'attendre que le dom soit chargé pour pouvoir récupérer la classe gallery dans le DOM
//Déclarer la variable dans la fonction permet de la cloisonner
document.addEventListener("DOMContentLoaded", function () {
    const galleryElt = document.querySelector(".gallery");
    const gallery = new Gallery(galleryElt);
    gallery.init();
});