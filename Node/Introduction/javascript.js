let users = ['user1', 'user2'] // tableau indexé

console.log(users[0]);

let map = new Map();
map.set ('name', 'Momo');
map.set ('lastanme', 'COOL');
map.set ('age', 25);

console.log(map);
console.log("bonjour %s %s", map.get('name'), map.get('lastname'));
console.log('Map Size : %d', map.Size);

// les differnetes boulces :
//while / for utilisent un index
//forof recupere les valeurs du tableau
//forin recupere l'index
//forEach (value, index, tab) =>{} method  utilisable que sur les tableaux

for (let [key, value] of map.entries()){
    console.log("Key = %s; Value = %s", key, value);
}

for (value of map){
    console.log(value);
}
console.log("----------------------------")

let set = new Set();
set.add('Bonjour').add('La Terre').add('Bonjour').add('Goodbye');

console.log('set size: %d', set.size);

if( set.has('Goodbye')){
    set.delete('Goodbye');
}

for (let value of set.values()){
    console.log(`Value = ${value}`);
}

console.log("----------------------------");
console.log("association par destructuration");

let data = [1, 2, 3];
let [a,b,c]= data;

console.log("a= %d; b = %d; c = %d", ...data);

console.log("inversion Des valeur de x et y")
let x = 1;
let y = 3;

[x, y] = [y, x];

console.log(x, y);

