//nom de la classe derriere le mot clef class

export class Gallery {
    constructor(domElt) {
        this.root = domElt;
    }

    init() {
        this.root.innerHTML = "<h1>ma super galerie</h1>";
    }
}