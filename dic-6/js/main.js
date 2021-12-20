

let arregloNumeros = [1, 2 , 3];
let ObjetoUsuario = {
    nombre: "Osiris",
    edad: 24,
}

let arregloJSON = JSON.stringify(arregloNumeros);

console.log (arregloNumeros);
console.log (arregloJSON);

console.log (ObjetoUsuario);
console.log (JSON.stringify(ObjetoUsuario));

/*
let cadenaArreglo = " [1, 2, 3, 4, 5] ";

console.log ( cadenaArreglo );
console.log ( JSON.parse (cadenaArreglo) );
*/

let cadenaArreglo = ' [ "Osiris", "Elizabeth", "Aurora", "Belen" ] ';

console.log ( cadenaArreglo );
console.log ( JSON.parse (cadenaArreglo) );

console.log (JSON.parse("100"))

