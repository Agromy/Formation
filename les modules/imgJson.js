export class ImageListXhr {
    getList(callback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'tux.json');
        xhr.addEventListener('load', function () {
            console.log('response loaded', this.status)
            if (this.statusCode >= 200 && this.statusCode < 300) {
                console.log(this.responseText);
                throw 'Raté!! problème detected';
            }
            callback(JSON.parse(this.responseText));
        });
        xhr.send();
    }
}