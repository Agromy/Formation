'use strict';

/*const incrementFactory = function {
    const inc =2;

    return function(myNumber){
        return myNumber + inc
    }
}
pareil qu'en dessous
*/
const incrementFactory = function(inc =2) {
    return function(myNumber){
        return myNumber + inc
    }
}

const ajout2 = incrementFactory();
console.log(ajout2(3)) // retour : 5

const ajout42 = incrementFactory(42);

console.log(ajout42(3)) // retour : 45