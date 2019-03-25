export class FormFetch {
    static getData() {
        return fetch('').then(response => response.json())