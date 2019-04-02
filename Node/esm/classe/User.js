export class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

//get et set sont en fait getName et serName. ceux sont respectivement un accesseur et un mutateur. L'accesseur permet de controler les sorties et les entrées sur une variable.
// la propriété a laquelle on accede doit avoir un underscore devant elle
