"use strict" //SIEMPRE SE TIENE QUE AGREGAR AL INICIO DE NUESTRO main.js

/*
let body = document.querySelector ("body");

// .createElement (); Permite crear un elemento. 
let title = document.createElement ("h1");

//Agregar atributos
title.id = "title";
title.className = "title-class";

title.textContent = "Este es un titulo dinamico";
let span = document.createElement ("span");
span.textContent = "spanMamalon";
title.appendChild (span);

body.appendChild (title); //Inserta un elemento como ultimo hijo de otro elemento.


let img = document.createElement ("img"); 
img.src = "https://picsum.photos/200/300";

body.prepend (img); //Inserta un elemento antes de los hijos que ya existen en otro elemento


let paragraph = document.getElementsByTagName ("p")[0];
//console.log (paragraph);
paragraph.remove (); //Elimina elementos del DOM

//alert("holaMundo");//Alerts feos (no usar)
*/

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'daniela@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
      {
        name: 'Brenda',
        age: 26,
        email: 'brenda.unam.mx',
        social: [
            { name: 'facebook', url: 'facebook/brenda' },
            { name: 'twitter', url: 'twitter/brenda' }
        ],
        gender: 'Female'
    },
]

let contenedor = document.getElementById ("user-container");
/*
contenedor.innerHTML = `
    <div class="user-card">
        <h3>Nombre de usuario</h3>
        <h4>EDAD: 00</h4>
        <h4>EMAIL: email@email.com</h4>
        <a href="facebook.com">Facebook</a>
        <a href="twitter.com">Twitter</a>
    </div>
`;*/

/*
let card = document.createElement("div");
card.className = "user-card";

let name = document.createElement ("h3");
name.textContent = `Nombre usuario`;
let age = document.createElement ("h4");
age.textContent = `EDAD: 00`;
let email = document.createElement ("h4");
email.textContent = `EMAIL: email@email.com`;
let fb = document.createElement ("a");
fb.href = "https://www.facebok.com";
fb.textContent = "Facebook"
let twiter = document.createElement ("a");
twiter.href = "https://www.twitter.com"; 
twiter.textContent = "Twitter"

card.appendChild (name);
card.appendChild (age);
card.appendChild (email);
card.appendChild (fb);
card.appendChild (twiter);

contenedor.appendChild (card);
*/



/*
let fragment = new DocumentFragment();

for (let i = 0; i < users.length; i++ ){
    let card = document.createElement("div");
    card.className = "user-card";
    
    let name = document.createElement ("h3");
    name.textContent = `${users[i].name}`;
    let age = document.createElement ("h4");
    age.textContent = `EDAD: ${users[i].age}`;
    let email = document.createElement ("h4");
    email.textContent = `EMAIL: ${users[i].email}`;
    let fb = document.createElement ("a");
    fb.href = `${users[i].social[0].url}`;
    fb.textContent = `${users[i].social[0].name}`;
    let twiter = document.createElement ("a");
    twiter.href = `${users[i].social[1].url}`; 
    twiter.textContent = `${users[i].social[1].name}`;
    
    card.appendChild (name);
    card.appendChild (age);
    card.appendChild (email);
    card.appendChild (fb);
    card.appendChild (twiter);
    
    //contenedor.appendChild (card);

    fragment.appendChild (card); // optimiza el proceso ya que cada que ocurre un cambio en el contenedor se tiene que renderizar nuevamente (en este caso 5 veces) el DOM

};


contenedor.appendChild (fragment);//una vez que ya se añadieron todos los cambios a fragment ahora si los agrego al contenedor en una sola renderización:)
*/



/*
let fragmentFake = ``

for ( let i=0; i < users.length; i++ ){
    fragmentFake += `
    <div class="user-card">
        <h3>${users[i].name}</h3>
        <h4>EDAD: ${users[i].age}</h4>
        <h4>EMAIL: ${users[i].email}</h4>
        <a href="${users[i].social[0].url}">${users[i].social[0].name}</a>
        <a href="${users[i].social[1].url}">${users[i].social[1].name}</a>    
    </div>
`
    //console.log (fragmentFake);
};

contenedor.innerHTML = fragmentFake;    
*/




//for of
/*  
    for (let elementos of iterable){
        //Instrucciones que se va repetir con cada variable
    };
*/
/*
let fragmentFake = ``
for (let elemento of users) {
    //console.log (elemento.name);
    fragmentFake += `
    <div class="user-card">
    <h3>${elemento.name}</h3>
    <h4>EDAD: ${elemento.age}</h4>
    <h4>EMAIL: ${elemento.email}</h4>
    <a href="${elemento.social[0].url}">${elemento.social[0].name}</a>
    <a href="${elemento.social[1].url}">${elemento.social[1].name}</a>    
    </div>
`
};
contenedor.innerHTML = fragmentFake;
*/


let fragmentFake = ``
users.forEach( function listar (elemento){
    console.log (elemento.name);
    fragmentFake += `
    <div class="user-card">
    <h3>${elemento.name}</h3>
    <h4>EDAD: ${elemento.age}</h4>
    <h4>EMAIL: ${elemento.email}</h4>
    <a href="${elemento.social[0].url}">${elemento.social[0].name}</a>
    <a href="${elemento.social[1].url}">${elemento.social[1].name}</a>    
    </div>
`
});
contenedor.innerHTML = fragmentFake;