'strict use'

//Document Object Model
//l'élément document ci dessus est l'ensemble de la page web, on doit donc partir de cet élément pour récupérer des élément de la page web
//console.log(document);

//querySelector() ne récupère qu'un seul élément (le premier qu'il rencontre), si on voulait récupérer tout les hé2 de la page il faudrait faire un querrySelectorAll
let titreH2 = document.querySelector("h2");
let allTitreH2 = document.querySelectorAll("h2");

console.log(titreH2);
console.log(allTitreH2);

allTitreH2.forEach(element => {
    console.log(element);
});

let idTitreH2 = document.querySelector("#cool");
console.log(idTitreH2);

//permet de changer le text choisi par la variable ou avec blabla.innerHTML ça marche aussi
idTitreH2.textContent = "Rewrighted Title";
console.log(idTitreH2);

//Récupération d'une UL
let ulListe = document.querySelector("#maliste");
//La propriété children retourne les enfants de la liste dans une collection (tableau)
console.log(ulListe.children);
//La propriété parentElement va récupérer le parent de l'élément ciblé donc ici le "main"
console.log(ulListe.parentElement);

//Création d'élément
let li = document.createElement("li");
//Ajout d'un contenu au li
li.textContent = "Item 4"
// ajout d'une classe au li
li.className = "liListe"
//On place notre li dans le ul précedement créer
ulListe.appendChild(li)

//Selection du deuxieme li de la liste
// utilisation du selecteur CSS
console.log("selection du 2eme item de ma liste ul")
let liListe = document.querySelector("li:nth-child(2)");
console.log(liListe);

//Ajout de texte du JS au HTML
//selection de l'id de la section
let section = document.querySelector("#content")
console.log(section)
let content = `
<h4>Titre de ${idTitreH2.textContent}</h4>
<p>bidule est heureux</p>
`;

//Ajout dans le HTML
section.innerHTML = content;