'strict use'

//Faire une fonction qui retourne bonjour suivi de votre prénom
function prenom() {
    return "Bonjour suivi de votre prénom";
}
console.log(prenom());

function YO(name) {
    return "Bonjour " + name;
}
console.log(YO("Momo"));


//Créer un tableau contenant, des strings et des numbers
array = ["Roger", 5, "Novak", 1, "Rafa", 2];
console.log(array);


// Créer une fonction qui rangera les nombres dans un tableau de nombres et les strings dans un tableau de strings
function tablesort(zz) {
    let array1 = [];
    let array2 = [];
    let array3 = [];

 //foreach car il faut lire le tableau (cf methode dans les tableaux)
    zz.forEach(element => {
        if (typeof(element) == "string") {
            array1.push(element);
        } else {
            array2.push(element);
        }
    });
    array3.push(array1, array2)
    return array3
}
console.log(tablesort(array));