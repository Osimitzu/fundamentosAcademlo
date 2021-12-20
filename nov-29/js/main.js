////console.log ("Hola MUNDO");

/*
            USO ESTRICTO DE JAVASCRIPT

    -Elimina algunos errores de js.
    Cosas que mostraban advertencias, ahora lanzan errores 
    -Corrige errores para permitir optimizaciones 
    -Prohibe ciertas sintaxis que probablemente se usaran en versiones futuras de ECMAScript 

*/

"use strict";

/*
                        DOM
                "Document Object Model"
    Una representación estructurada del documento HTML 
    Puede ser modificado con un lenguaje de programación 
*/

//Muestra la colección de elementos que corresponde a la etiqueta indicada
let paragraph = document.getElementsByTagName ("p");
//console.log (paragraph);

//console.log (paragraph[0].innerText);
//console.log (paragraph[1].innerText);

//Colección de elementos que posee la clase indicada
let elementsByClass = document.getElementsByClassName ( "product-card" );
//console.log (elementsByClass);
//console.log (elementsByClass[0].innerHTML);

//elemento que posee el ID indicado
let elementByID = document.getElementById ("carrito-compras");
//console.log (elementByID);

//Realiza una busqueda a partir de cierto selector y devuelve el primer elemento que coincida 
let firstElementP = document.querySelector ("div");
//console.log (firstElementP);

let firstElementByClass = document.querySelector (".product-card");
//console.log (firstElementByClass);

let firstElementByID = document.querySelector ("#carrito-compras"); //No tiene sentido hacer esta busqueda 
//console.log (firstElementByID); //con querySelector ya que tenemos el metodo getElementById

let collectionElements = document.querySelectorAll ("div");
//console.log (collectionElements);

let title = document.querySelector ("h1");
console.log (title);
console.log (title.innerText);
title.innerText = "ESTE ES UN NUEVO TITULO";
console.log (title.innerText);

let card = document.querySelector (".product-card");
console.log (card.innerHTML);
card.innerHTML += `
    <h2> SOY UN NUEVO HTML </h2>
    <img src="https://picsum.photos/150/150" alt="">
    `;
console.log (card.innerHTML);


console.log (card.classList);

//Agrega una o mas clases
card.classList.add ("nueva-clase", "otra");
console.log (card.classList);

//Elimina la clase indicada
card.classList.remove ("otra");
console.log (card.classList); 

let input = document.getElementsByTagName ("input")[0];
console.log (input);

input.setAttribute ("type", "text");  //Cambiar atributo del input de tipo password a tipo text


