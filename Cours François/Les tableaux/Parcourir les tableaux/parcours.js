'use strict'

// Déclaration d'un tableau
let listePrenom = ["Roger", "Novak", "Rafa", "Sacha"];
console.log(listePrenom);

console.log("Boucle for of");
for (let prenom of listePrenom) {
    console.log(prenom);
}

//for each est une méthode de lecture du tableau qui prend un parametre, ici une fonction, qu'il excecutera à chaque tours de sa boucle
//une fonction passée en parametre dans une méthode s'appelle une callback
console.log("Boucle foreach"); //array.forEach(function(){})
listePrenom.forEach(function(element, index){
    console.log(element, index);
});

listePrenom.forEach(function(prenom){
    if (prenom === "Novak"){
        console.log("YATA")
    }
});

