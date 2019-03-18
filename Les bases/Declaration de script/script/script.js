// Permet de vérifier si une variable est bien déclarée
// et si elle n'est pas présente plusieurs fois
'use strict'

// Déclarer une variable :
// Tois mots clefs :
var nom = "Federer";
let prenom = "Roger";
const age = 37;

// Type de données (ce qui est inscrit après le =)
// Type string ou chaine de caractères : se déclare avec "" ou '' (les 2 premières)
// Type Number ou nombre 
// Type boolean 0 ou 1  et True ou False
// Type Null (valeur null)
// Type Undefined (la variable existe mais n'a pas de valeur)
// Type Array ou tableau

// Déclaration d'un nouvelle valeur des la variable nom et prénom
nom = "Paire";
prenom = "Benoit";
console.log(nom);
console.log(prenom);


// Impossible de redéfinir la valeur d'une constante
// age = 42;   passage de l'erreur dans un commentaire car le script n'est plus lu dès qu'il y a une erreur
console.log(age);

//Redéfinir le nom avec des chiffres est possible, c'est une chaine de caractere
nom=1000;
console.log(nom);

// Caractère d'échappement
let description = 'Je m\'appelle Roger';
// Même chose mais sans anti slash
description = "Je m'appelle Roger";

let u = null;
let uu;
let nn = NaN; // NaN = Not a Number dc la valeur n'est pas un nombre

console.log(typeof(u));
console.log(typeof(uu));
console.log(typeof(nn));

//Déclaration d'un tableu
let listPrenom = ["Roger", "Novak", "Rafa"]; // les crochet pour dire que c'est un tableau et on peut mettre les valeurs que l'on veut.
console.log(listPrenom);

//Déclaration d'une instruction de bloc
//{} permet de faire cette action

//La portée des variables

/* 
*Lorsque l'on declare une variable avec le mot clef var, la variable sera accessible dans tout le script
*
*/

// var x = 1;

{
   //  console.log("X dans le bloc : " + x));
   var x = 2;
}
console.log("X hors du bloc : " + x);

/*
*Avec le mot clef let la variable ne sera accessible uniquement que dans le bloc ou elle est déclarée
*
*/
let v = 10;
{
let v = 1;
    console.log("V dans le bloc:" + v);
}
console.log("V hors du bloc : "+ v);

/*const se comporte comme le let : il prend sa valeur dans le bloc ou il est défini*/

const c = 1;
{
    const c = 2;
    console.log("C dans le bloc :" +c);
}
console.log("C hors le bloc :" +c);


let country = "france";
console.log(country);