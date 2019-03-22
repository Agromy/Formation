import {Component} from "./component/component.js";
import {Viewer} from "./component/viewer.js";
import {Thumbnails} from "./component/thumbnails.js";
import {Login} from "./component/login.js";

//nom de la classe derriere le mot clef class

export class Gallery extends Component {


    init() {
        this.root.innerHTML = `
        <h1>ma super galerie</h1>
        <div class="component thumbnails-component">Miniatures</div>
        <div class="component viewer-component">Visionneuse</div>
        <div class="component login-component">Log in bro</div>
        `;
        /* les deux lignes en comm ici sont equivalentes à la seul ligne se trouvant en dessous d'elles. 
        const viewerElt = this.root.querySelector(".viewer-component")
        const viewer = new Viewer(viewerElt); */

        const viewer = new Viewer(this.root.querySelector(".viewer-component"));
        viewer.init();
        const thumbnails = new Thumbnails(this.root.querySelector('.thumbnails-component'));
        thumbnails.init();
        const login = new Login(this.root.querySelector('.login-component'));
        login.init();
    }
}