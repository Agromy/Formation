console.log('-- __filename --');

console.log('__filename = %s', __filename);

console.log('-- __dirname --');

console.log('__dirname = %s', __dirname)

let timer = 1000;

setTimeout ( () => {
    console.log('je suis exécuté après %d ms', timer);
}, timer);

timer = 0


setTimeout ( () => {
    console.log('je suis exécuté voila %d ms', timer);
}, timer);