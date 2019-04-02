import { User } from './classe/User';
import path from "path";

let user= new User ('john');

console.log("hello %s", user.name);

console.log(path.join( __dirname, 'classe', 'User.js'));

