// console.log(process.env);

// console.log(process.argv);

// dans l'écran de commande, la commande : npm install permet d'installer une dependance qu'on var chercher par son nom

console.log(process.env);

const argv = process.argv.slice(2);

console.log(argv);

if(argv.includes('--version')){
    console.log("process.js Version 1.0.0")
};

if(argv[0]){
    console.log(argv[0]);
}

//node introduction/process.js coucou -uc
// écrire un programme pour que node affiche coucou sans uppercase

/*
 *if(argv[1] == '-uc') {
  *   console.log(argv[0].toUpperCase());
 *}
 *else {
  *       console.log(argv[0]);
 *}
*/


const chaine = argv[0];
if (argv.includes('-uc')) {
   console.log(chaine.toUpperCase());
} else {
   console.log(chaine);
}

