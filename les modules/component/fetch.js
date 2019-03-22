// etude des promesses
fetch('tux.json')
.then(response => response.json())
.then(data => {
return new Promise (function(resolve, reject) {
    if (typeof data === Array) {
        reject('data must be an array');
    }
    else{
    resolve(data);
    }
});
})
.then(data => console.log(data))
.catch(error => console.log(error));