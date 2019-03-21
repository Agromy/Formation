const example1 = function(){
    console.log("example1");
};
// appel de la fonction en tant que fonction
example1();

const kitty = {
    meow: function() {
        console.log(this.name);
    }
};
//appel en tant que méthode
kitty.meow();

// 2 façon de déclarer une fonction, la premiere avec définition dans une variable c'est mieux
const LittleCat = function(name) {
    this.name = name;
};

function littlecat2(){

};

LittleCat.prototype.meow= function(){
    console.log("example1")
};

//appel en tant que constructeur
const bill = new LittleCat("Bill");
console.log(bill);

//appel avec call ou apply
example1.apply(bill);