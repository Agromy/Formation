const fs = require ('fs');
const path = require ('path');

const filename = path.join(__dirname, 'assets', 'content', 'hello.txt');


fs.readFile (filename, (err, content) =>
{ if( err ){
    throw new Error(err.message);
}
    console.log(String(content));
//ou console.log(content.toString());
});

const copy = path.join(path.dirname(filename), 'copy.txt');
const rename = path.join(path.dirname(copy), 'terre.txt');

    fs.copyFile (filename, copy, (err) => {
      console.log('copie terminée');

        fs.rename(copy, rename, (err) => {
            console.log('renamed indeed');
        });

});



    //Créer un fichier et écrire dedans
const newFile = path.join(__dirname, 'assets', 'content', 'deleteme.txt');
const contentOfFile = 'Apprendre node c\'est cool';

fs.writeFile(newFile, contentOfFile, function(err){
    console.log('Le fichier a bien été créé');
});

fs.unlink(newFile, (err) => {
    if(err){
        throw new  Error(err.message);
    }
    console.log('Fichier sup');
});

const img = path.join(__dirname, 'assets', 'img');

fs.mkdir(img, (err) => {
    if(err){}
    console.log('Le dossier %s a bien été créé', path.basename(img))
});

fs.rmdir(img, (err) => {
    console.log('Le dossier %s a bien été deleted', path.basename(img))
});

