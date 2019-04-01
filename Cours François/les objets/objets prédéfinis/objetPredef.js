'use strict'

//Objet Date

//Instanciation d'une date
let date = new Date();
console.log(date);
//retourne la date au format jj//mm/aa
console.log(date.toLocaleDateString());
//donne le décalage horaire en muinute par rapport au méridien de greenwich
//Une paire de paranthèse aprés un nom indique qu'il s'agit d'une méthode
console.log(date.getTimezoneOffset());

//Objet String
let string = new String("ceci est une belle chaine");
console.log(string);
console.log(string.bold());

// Objet Array
// Deux façon de définir un tableau
let array = new Array ();
let array2 = [];

// Objet math
let rand = Math.round(2.3);
let rand1 = Math.round(Math.random() * 20);
console.log(rand);
console.log(rand1);



