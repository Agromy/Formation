/**
 * assests
 *  |_ content
 *     |_hello.txt
 *  |_images
 *     |_image.png
 */


// require permet d'aller le module path

const path = require ('path');

let path_file="./assets/content/hello.txt";

console.log('dirname(): %s', path.dirname(path_file));
console.log('dirname(): %s', path.basename(path_file));
console.log('dirname(): %s', path.extname(path_file));

console.log('Separateur system : %s', path.sep);

path.join('assets', 'img', 'image.png');

console.log('Construction d\'un chemin: %s', path.join('assets', 'img', 'image.png'));

const content_path = path.join('assets', 'content', 'path.sep');
const img_path = path.join('assets', 'img', 'path.sep');

console.log('Pour passer du dossier \x1b[32m%s\x1b[0m au dossier' + '\x1b[32m%s\x1b[0m, je dois faire \x1b[32m%s\x1b[0m',
    content_path, img_path, path.relative(content_path, img_path));

console.log(path.resolve(__dirname, content_path, path.relative(content_path, img_path)));

c