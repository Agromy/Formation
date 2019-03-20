'strict use'
let [a, b, c, d, e, f] = [5, 10, 15, 20, 25, 30];
console.log(a, b, c, d, e, f);

let resultAB = calc(a, b);
console.log(resultAB);

let resultCD = calc(c, d);
console.log(resultCD);

let resultEF = calc(e, f);
console.log(resultEF);

//Définition d'une fonction

//Fonction nommé. Il faut l'appeler par function puis on lui donne un nom, ici calc, et entre paranthèse on lui donne des parametres que l'on nomme comme on le veut.
//puis on ouvre des accolades puis return pour faire ce qu'on veut : function nomffonction (parametre1, parametre2) {return truc a renvoyer}

function calc(n1, n2) {
    return n1 + n2;
}

//Appel d'une fonction (mis dans un console log pour voir le resultat)

console.log(calc(10, 20));

//exemple
function YO() {
    return "Bonjour!!";
}
console.log(YO());

//façon pourri de définir une fonction
let multiplication = function (n1, n2) {
    return n1 * n2;
}

//impossible d'appeler un paramètres hors dune fonction
//console.log(n1) ne marchera pas

console.log(multiplication(10, 20));

//Fonction immédiatement invoquée. On l'a définit a un endroit et elle ne s'execute qu'une fois!

(function () {
    console.log("Retour de la fonction immédiatement invoquée");
})();

//Fonction immédiatement invoquée avec un paramètre c'est useless
(function (param) {
    console.log("youhou" + param);
})("Mec");

//Fonctions fléchées
//La syntaxe est : ()=>{} 

array = ["Roger", "Novak", "Rafa"];

array.forEach((element, ) => {
    console.log(element)
});

//Les closures

function closure() {
    let prenom = "Roger";

    function affichePrenom() {
        console.log(prenom)
    }
    return affichePrenom();
}
 //ici si j'utilise affichePrenom hors de ma fonction closure, ca ne marchera pas car affiche prenom n'est définie que dans le bloc de la fonction closure
closure();

//définir des parametres par défaut dans une fonction

function paramDefault(a, b, c = 10, d = 5){
    return a + b +c +d;
}
console.log(paramDefault(5, 5));
// on peut aussi dans la paranthèse du paramDefault ci dessous redonner une valeur à c et d. Pour c = undefined il reprendra la valeur par défaut:
console.log(paramDefault(5, 5, undefined, 65.5));

