import {Component} from "./component.js";

export class Login extends Component {

    init() {
        this.root.innerHTML = `
        <form>
        <div>
        <label for="username"> Your magnificent name</label>
        <input type="text" id="username" name="username">
        </div>
        <div>
        <label for="password"> Your incredible password</label>
       <input type="password" id="password" name="password">
        </div>
        <div>
        <button>Connexion to the realm</button>
        </div>
        </form>
        `
        this.root.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            //pour empecher de recharger la page qui est le comportement par defaut du navigateur
            const data = {
                username: this[0].value,
                password: this[1].value
            };
            console.log(data);


            fetch('login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    contentType: 'application/json'
                }
            })
        })
    }
    }