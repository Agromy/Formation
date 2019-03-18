'use strict'

//Opérateur en javascript

//opérateur d'affectation
// =

let attribution = 1000;

//Addition
let add = 1;
add += 1;
// Meme chose que add = add+1;
console.log(add);

//Soustraction
let sous = 10;
sous -= 5;
// Meme chose que sous = sous - 5
console.log("Soustraction :" + sous);


//Multiplication
let mult = 3;
mult *= 4;
console.log(mult)

// Division
let div = 10;
div /= 2;
// Meme chose que div = div/2
console.log("Division :" / div);

// Modulo
// Done le reste de la division
let modulo = 10
modulo %= 3; //Il restera 1
//Meme chose que modulo = modulo % 3
console.log(modulo);

// Incrémentation (++ ajoute 1) 
// Décrémentation (-- retire 1)
let increment = 10;
console.log("Incrémentation: " + increment++);
console.log(increment)



//Concatenation (+)
let nom = "Federer";
let prenom = "Roger";
let concatenation = "je m'appelle " + prenom + " " + nom;
console.log(concatenation);

let premierNombre = 5;
let deuxiemeNombre = "10";
let resultat = null;
resultat = premierNombre + deuxiemeNombre; //ici le resultat donnera 515 car on ajoute un nb et une chaine de caracteres
console.log(resultat);

//le symbole + devant une variable la convertira en nombre
resultat = premierNombre + +deuxiemeNombre;
console.log(resultat);

//Opérateurs de comparaison
// Comparaison entre 2 variables : == (exemple c == b) ici il n'y a verification que de la valeur de la variable
let c = 5;
let d = 5;
console.log(c == d);

// Comparaison stricte entre 2 variable : === ici il y a vérification de la valeur et du type de la variable
let e = 6;
let f = "6";
console.log(e === f);

//Supérieur et inférieur à : > et <
console.log(c > e);
console.log(c < e);

//Supérieur et inférieur ou egale à : >= et <=
let g = 1;
let h = 1;
let i = 1.1;
console.log(h < i);
console.log(g > h);

//La négation simple : !=
let j = 5;
let k = 2;
console.log(j != k);

//La négation stricte ou inégalité : !==
let l = 6;
let m = "6";
console.log(l !== m);

//Opérateurs logique

//ET logique ou && (tester 2 conditions pour avoir la valeur vrai)
//OU logique ou || (tester 1 ou l'autre condition pour avoir la valeur vrai)
//NON logique ou ! ()
// Les conditions
let maVariable = 10;

if (maVariable === 10) {
console.log("La variable est bien égale a 10");
} 
else {
    console.log(" La variable n'est pas égale à 10");
}

// if else if
if (maVariable ===5) {
    console.log("La variable est egale a 5");
} else if (maVariable ===15) {
    console.log("la variable est egale a 15");
} else if (maVariable ===20) {
    console.log("la variable est egale a 20");
}  else if (maVariable ===30) {
        console.log("la variable est egale a 30");
} else {
    console.log("C'est loupé!");
}

//Ternaire
if (maVariable === 5) {
    console.log("ma variable vaut : 5");
} else {
    console.log("Je ne connais pas la valeur") ;
}

//même chose qu'au dessus ùais ecris plus simplement
//condition ? siTrue : siFalse;
maVariable ===5 || maVariable ===10? console.log("ma variable vaut 5") : console.log("Je ne connais pas la valeur");

//switch est equivalent au else if
switch (maVariable) {
    case 5:
console.log("valeur : " + maVariable);
    break;
    case 15:
    console.log("valeur : " + maVariable);
    break;
    case 20:
    console.log("valeur : " + maVariable);
    break;
    case 30:
    console.log("valeur : " + maVariable);
    break;
    default:
    console.log("i don't know the fucking value");
    break;
}

// Structure itérative ou boucles
console.log("Boucle while");
let resultWhile = 0;
while (resultWhile <5){
    ++resultWhile;
    console.log(resultWhile);
}

console.log("Boucle do while");
let doWhile = 0
do{
    doWhile--;
    console.log(doWhile);
} while (doWhile > -10);

console.log("Boucle for");
//zz est la variable qui sert de compteur
for (let zz = 20; zz < 24; zz++){
    console.log(zz);
}

//La boucle for of permet de parcourir des objets itérables
console.log("Boucle for of");
let array = ["Roger", "Novak", "Rafa"];
for (const iterator of array) {
    console.log(iterator);
}

// Meme chose que la boucle for of
for (let ii = 0; ii < array.length; ii++) {
    console.log(array[ii])
}

