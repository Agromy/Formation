'use strict'

let description = "Je m'appelle Roger";

//concténation classique avec le symbole +
let concatenation ="Bonjour " + description;
console.log(concatenation);

// Concatenation avec les littéreaux de templates
// S'utilise avec le symbole ` (accentgrave)
// cf littéreaux de gabarit sur dev mozilla

let littereaux = `Bonjour ${description}`;
console.log(littereaux);

// Affectation par decomposition

let a, b, rest; 
[a, b] = [2, 10];
console.log(a);
console.log(b);
//ici les ... signifient 
[a, b, ...rest] = [2 ,10, `test`, 35, true];
console.log(rest);
