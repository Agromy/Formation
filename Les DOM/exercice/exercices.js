/**
 * Créer une fonction qui génerera le nombre de lien défini en paramètre
 * 
 * Les liens devront être placés dans la balise nav
 * 
 * Ils doivent avoir le href de rempli
 * 
 *Et une classe

 *Le nom du lien
 */

 'use strict'


 function afficheLien (nombre){
    let nav = document.querySelector("nav");

    for (let i=0; i <= nombre; i++){
    let itemA = document.createElement("a");
    console.log(itemA)

    itemA.textContent = `Lien ${i}`;
    itemA.className = ("lien nav");
    itemA.setAttribute = ("href", `www.liens${i}.com`);
    nav.appendChild(itemA);
        }
 }
afficheLien (5);
    