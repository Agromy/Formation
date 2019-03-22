import {Component} from "./component.js";
import {ImageListXhr} from "./image-list-xhr.js";

export class Thumbnails extends Component {
     init() {
         const imageListXhr= new ImageListXhr ();
         imageListXhr.getList((responseData) => {
        this.root.innerHTML = Thumbnails.displayList(responseData);
    });
    this.root.innerHTML = '<p>Chargement de sminiatures</p>'
}

static displayList(list) {
    const htmlImgArray = list.map(img => `<li><img src="img/${img}"/></li>`);
    const htmlImgString = htmlImgArray.join(" ");
    console.log(htmlImgString);
    return `<ul>${htmlImgString}</ul>`;
}
}


/*
    displayList(list){
// la fonction map à comme argument une autre fonction
const htmlImgArray = list.map(img => `<li><img src="img/${img}"/></li>`)
// il y a un " " dans le join car sinon par défaut il affiche une virgule, ici c'est un transformation en chaine de caractères
const htmlImgString = htmlImgArray.join(" ");
console.log(htmlImgString);
return `<ul>${htmlImgString}</ul>`;
    }
    
}
*/