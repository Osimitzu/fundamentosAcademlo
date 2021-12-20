/*
function arraySumValues(array) {
    let valor1 = array[0];
    let valor2 = array[1];
    let valor3 = array[2];

    let suma = valor1 + valor2 + valor3;

    return suma;

}

let numeros = [1, 2, 3];
console.log (arraySumValues(numeros));
*/



//asdfhdjghsjfahfgafgakhhfgkhasdghfkhagfkasdgfasdfkasdf



/*
function populateArray(number, limit) {
    let array = [];
    var result = 0;
    for ( let i = 1; result < limit; i++ ){
        if (result < limit){
            number * i
            var result = number * i;
            array.push (result); 
        }
    };
    array.shift();
    array.pop ();
    return array;
};

console.log ( populateArray(5, 50));
*/



/*asdgjakfgajkhfjkasdhjgasjkhlasdljfhjklasjklgadhklaskdhflglakhdfhljkladshflajlsdlhfjkldh*/



//PRUEBA 

//EJERCICIO 1
/*
let users = [ 
    { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null }, 
    { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } }, 
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, 
];

function getStudentsApplications(users) {

    let usersApp = [];

    for( let i = 0; i < users.length; i++ ){
        if( users[i].application != null   ){
            usersApp.push( users[i] )
        }
    }

    return usersApp;
};

console.log (getStudentsApplications(users));
*/

//EJERCICIO 2
/*
let users = [ 
    { name: 'Daniela', email: 'daniela@academlo.com', }, 
    { name: 'Juan', email: 'juan@academlo.com', }, 
    { name: 'Luis', email: 'luis@academlo.com', }, 
    { name: 'Pedro', email: 'pedro@academlo.com', } 
];
function paginateUsers(users, page) {
    usersPage = []
    if( users[ (page * 2) - 2 ] ){
        usersPage.push( users[ (page * 2) - 2 ] )
    }

    if( users[ (page * 2) - 1 ] ){
        usersPage.push( users[ (page * 2) - 1 ] )
    }

    return usersPage;
};

console.log( paginateUsers( users, 1 ) );
console.log( paginateUsers( users, 2 ) );
*/

//EJERCICIO 3
/*
let users = [ 
    { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null }, 
    { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }, 
    { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } }, 
    { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }, 
];

function countApplicationsByChannel(users) {
    let usersApp = [];
    
    for( let i = 0; i < users.length; i++ ){
        if( users[i].application != null   ){
            usersApp.push( users[i] )
        }
    }
    
    let procedencia = {};
    for (let i = 0; i < usersApp.length; i++ ){
        let canal = usersApp[i].channel 
        if (procedencia[canal]){
            procedencia[canal] += 1
        }else{
            procedencia[canal] = 1
        }
    };
    
    //console.log (procedencia);
    return procedencia;
    
};

console.log (countApplicationsByChannel(users))
*/


/*
let user = { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }

function getEmail(user) {
    
    return user.email;

};

console.log (getEmail(user));
*/


let users = [ 
    { name: 'Erik', email: 'erik@academlo.com', gender: 'Male' }, 
    { name: 'Georg', email: 'georg@academlo.com', gender: 'Male' } 
];

function getEmails(users) {
    
    let emails = [];
    for (let i = 0; i < users.length; i++){
        if (users[i].email != null){
            emails.push(users[i].email);
        }
    }
    return emails;
};

console.log (getEmails(users));
