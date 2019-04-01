'use strict'

// Déclaration d'un tableau
let tableau = [1, 2, 3];
console.log(tableau);

//un tableau se compte a partir de 0 (la clef) la clef est une chaine de caractere par défaut dans un tableau
console.log(tableau[0]);

console.log("Boucle for");
for (let ii = 0; ii < tableau.length; ii++) {
    console.log(tableau[ii]);
}

console.log(tableau[0]);
console.log(tableau[1]);
console.log(tableau[2]);

//tableau à deux dimensions
let arrayMultiDimension = ["un", "deux", "trois", ["one", "two", "three"]];
console.log(arrayMultiDimension);
console.log(arrayMultiDimension[3][1]);

//tableau associatif (on va nommer les clefs)
let arrayAssociatif = {
    1: "First value",
    deux: "Second value",
    number: 42,
    // les clefs sont uniques, ici il y aura ecrasement de la clef number a valeur 42
    "number": 89,
}
console.log(arrayAssociatif);
console.log(arrayAssociatif["deux"]);
console.log(arrayAssociatif[1]);
console.log(arrayAssociatif["number"]);

//Tableau multidimension associatif
let myArray = {
    roger: {
        article1: {
            titre: "Titre 1 (roger)",
            contenu: "Wahou",
        },
        article2: {
            titre: "titre 2 (roger)",
            contenu: "youpi",
        },
    },
    novak: {
        article1: {
            titre: "Titre 1 (novak)",
            contenu: "Wahou",
        },
        article2: {
            titre: "titre 2 (novak)",
            contenu: "youpi",
        },
    },
    rafa: {
        article3: {
            titre: "Titre 1 (rafa)",
            contenu: "Wahou",
        },
        article2: {
            titre: "titre 2 (rafa)",
            contenu: "youpi",
        },
    },
};
console.log(myArray);
console.log(myArray["roger"]["article1"]);
console.log(myArray["roger"]["article1"]["titre"]);