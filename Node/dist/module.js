"use strict";

// new Object()
// Class es6
// objet litteral
var objet = {};

objet.bonjour = function () {
  return "Salut, Dawan c'est bien";
};

objet.aurevoir = function () {
  return "bye bye";
}; // commande pour exporter nos modules


module.exports = objet;