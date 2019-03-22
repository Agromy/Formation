const xhr = new XMLHttpRequest();

// ouverture de la requete avec indication verbe et source
xhr.open('GET', 'tux.json');

xhr.addEventListener('load', function(){
    console.log('response loaded', this.status);
    // this vaut l'objet MHMLHttpRequest
    if(this.statusCode >= 200 && this.statusCode < 300) {
        console.log(this.responseText);
        callback(JSON.parse(this.responseText));
    }
});

//definition des informations de la head de la requete
xhr.setRequestHeader('Accept', 'text/html');

//définition des informations du body
xhr.send();