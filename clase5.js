
/*
    Estructuras de control

    CICLOS
    Estructuras que me permiten llevar a cabo un proceso determinado numero de veces.

    //FOR

    for( let contador = valor inicial; condición; contador++ ){
        //instrucciones que se van a repetir en cada iteracion del ciclo.

    };

    incremento ---> contador ++
    decremeto ---> contador -- 

*/

for ( let i = 0; i <= 10; i++){
    console.log (i);
};

console.log ( "Acabo el for" );


/*
    ARREGLOS / ARRAYS
    Estructuras que me permiten agrupar otros datos y asignarles una posición

                    indice0     indice1   indice2   
    let arreglo = [ elemento1, elemeto2, elemento3, ... ]

    indiceUltimoElemento = longitudArreglo - 1  
*/

let arregloDatos = [ "cadena de texto", 10, true ];

console.log (arregloDatos);

console.log (arregloDatos[0]);
console.log (arregloDatos[1]);
console.log (arregloDatos[2]);

console.log (typeof arregloDatos[0]);
console.log (typeof arregloDatos[1]);
console.log (typeof arregloDatos[2]);


const arregloFrutas = ["fresa", "manzana", "platano", "limon"];
console.log (arregloFrutas);

//Puedo llevar acabo modificaciones en un arreglo guardado en una CONSTANTE porque no implica reasignaciones.
arregloFrutas.push ("aguacate");
console.log (arregloFrutas);

//Esto no es posible, porque es una reasignación
//arregloFrutas = ["frsa", "manzana", "platano", "limon", "pepino"];

let arregloNombres = ["Osiris", "Elizabeth", "Aurora"];
let arregloNombres2 = arregloNombres;

console.log (arregloNombres);
console.log (arregloNombres2);

arregloNombres.push ("Belen");

console.log (arregloNombres);
console.log (arregloNombres2);

//SPREAD OPERATOR

//let arregloCopia = ["Osiris", "Elizabeth", "Aurora"];

let arregloCopia = [ ...arregloNombres ];
console.log (arregloCopia);

arregloCopia.push ("Carlos");

console.log (arregloNombres);
console.log (arregloNombres2);
console.log (arregloCopia);


//PROPIEDAD LENGTH
//Devuelve la cantidad de elementos que conforman al arreglo 
//indiceUltimoElemento = arreglo.length  - 1

console.log (arregloCopia.length);
console.log ([].length);


let arregloAnimales = [ "Gorila", "Perro", "Gato", "Lobo" ];
//push ---> agrega uno o mas elementos al final de un arreglo
let valorDevuelto = arregloAnimales.push ("Jirafa", "Elefante");

console.log (arregloAnimales);
console.log (valorDevuelto);

//pop ---> elimina el ultimo elemeto de un arreglo










