'use strict'

// on recupere la valeur mise dans le inputfirstname par son id dans le html
let inputFirstName = document.querySelector("#firstName");
// affiche le prenom renseigné (il faut rafraichir la page et ne pas cliquer sur le button ou la touche enter du clavier)

let inputButton = document.querySelector('input[type=button]');
console.log(inputButton);

function checkInput(input){

    isNaN(input.value) ? input.style.background = "green" : input.style.background = "red";  
}  

inputButton.addEventListener("click", function() {
    let input = document.querySelector("#firstName");
    checkInput(input);
});

inputFirstName.addEventListener("keydown", function(event) {
    let input = document.querySelector("#firstName");
    console.log(event.key);
    if (event.key === "Enter") {

// la fonction preventDefault permet d'annuler le comportement par defaut du navigateur
event.preventDefault();
console.log(event.target.value);
checkInput(input);

    }
});