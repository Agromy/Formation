'use strict'
//Définir un tableau
console.log("Nom tabelau");
let ATPRanking = ["0", "Novak", "Rafa", "Roger", "Sacha"];

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Supprimer la premiere valeur du tableau
console.log("Nom tabelau sans 1ere valeur");
let first = ATPRanking.shift();

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Supprimer la dernière valeur du tableau
console.log("Nom tabelau sans derniere valeur");
let last = ATPRanking.pop();

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Ajouter à l'index 2 de votre tableau un nouveau tableau avec plusieurs valeurs (deux façon de faire)
console.log("ajout tableau dans tableau");
ATPRanking.splice(2, 0, ['toto', 'titi', 'tata']);

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Ajouter une valeur a la fin du tableau
console.log("Ajout d'une valeur a la fin du tableau");
let newLength = ATPRanking.push("Dominic");

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Inverser le tableau
console.log("afficher le tableau a l'envers");
ATPRanking.reverse();

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Trier le tableau par ordre alphabétique
console.log("tier par ordre alpha");
ATPRanking.sort();

ATPRanking.forEach(function (item, index, array) {
    console.log(item, index);
});

//Retrouver la longueur du tableau
console.log("longueur du tableau");
console.log(ATPRanking.length);