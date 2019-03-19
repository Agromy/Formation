'use strict'

// Definition de l'objet
let objet1 = {
    name: "Roger",
    firstName: "Federer",
    city: "Bâle",
};

console.log("affichage objet1")
console.log(objet1);

console.log("affichage nom objet1")
//On appelle la propriété name à l'aide du "."
console.log(objet1.name);


//Deuxième façon de définir un objet = Instanciation de l'objet Object
let personne = new Object();
console.log(personne);
//Ajout d'une propriétée prenom à mon objet personne
personne.prenom = "Roger";
personne.nom = "Federer";
//nomobjet.nompropriétée
console.log(personne.nom);

//Troisiéme façon
let marque = "ford"
let modele = "mustang"
let année = 1962;

let voiture = {
    marque,
    modele,
    année,
}
console.log(année.voiture);



//Definition d'un objet avec un constructeur, l'objet s'écrit avec une majuscule et on lui donne 3 propriétées
console.log("definition d'un objet avec un constructor")

function Raquette(marque, tensionv, tensionh) {
    //Définition des propriétées de l'objet Raquette
    this.marque = marque;
    this.tensionv = tensionv;
    this.tensionh = tensionh;

    this.showMarque = function () {
        console.log("C'est une " + this.marque);
    }
};

let bidule = new Raquette("Wilson", "24kg", "25kg");
console.log(bidule.tensionv);
bidule.showMarque();

let machin = new Raquette("Head", "26lbs", "23lbs");
machin.showMarque();

//Ajout de méthode à un objet
console.log("Ajout d'une méthode à l'objet Raquette");
Raquette.prototype.infoRaquette = function () {
    //le return n'est pas obligatoire
    return console.log("Cette raquette est une " + this.marque + " et est tendue à" + " " + this.tensionh + " et" + " " + this.tensionh);
}

let truc = new Raquette("Babolat", "25kg", "26kg");

truc.infoRaquette();
console.log(Raquette);

let newRaquette = Object.assign(
    {
        couleur: "rouge",
        equilibrage: "attaque",
    },
//ici il faut obligatoirement entrer un objet qui a été instancié
truc
);

console.log(newRaquette);
console.log(newRaquette.couleur);