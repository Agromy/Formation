"use strict";

var _User = require("./classe/User");

var mod = require('./module.js');

var dawan = require('@tonno/dawan');

console.log(mod.bonjour());
console.log(mod.aurevoir());
dawan.Saluer();
dawan.Bye();
console.log(dawan.allUser());
var user = new _User.User('john');
console.log("hello %s", user.name);