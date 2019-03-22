// les " lignes du dessous = les lignes du fichier image_list-xhr.js"

fetch('tux.json')
.then(response => response.json())
.then(data => console.log(data))