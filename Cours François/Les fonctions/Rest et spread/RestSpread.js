'strict use'

//(...) permet de passer un nombre indéfinit de parametres (vu qu'il y en a plusieur ça sera un tableau)

function UseRest(param1,...param2){
let result = 0;
console.log(param1);
console.log(param2)
param2.forEach(function(element){
    result += element;
    
});
console.log(result);
}
console.log("resulat operation 1")
UseRest(10, 20, 30, 40);

console.log("resulat operation 2")
UseRest (4, 1, 5, 18);


//function spread cf "mdn spread"
console.log("utilisation de spread")
function UseSpread(x, y,z){
    return x + y + z;
}

let pouet = [2, 2, 2, 2, 2, 2, 2, 3, 4]
let pouet2 = [2, 3, 4, 2, 2]


console.log(UseSpread (...pouet2));
console.log(UseSpread(...pouet));

var Truc = ["g", "h", "j"];
var machin = ["q", "s", [...Truc], "l", "m"];

console.log (machin);