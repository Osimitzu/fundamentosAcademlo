
"use strict";

/*
Declaración de una función: 
function nombreDeLaFuncion (params) {
    //instrucciones
    return
};
nombreDeLaFuncion ( argumentos );
*/



/*
//Expresiones anonimas || Expresion de Funciones
const nombreDeLaVariable = function(parametros){
    //instrucciones
    return;
};

const funcionFlechaConParametros = (parametro1, parametro2) => {
    //instrucciones
    return; 
};

const funcionFlechaConUnSoloParametro = parametro => {
    //instrucciones
    return;
};

const funcionFlechaConReturnImplicito = parametro => algunValor; //Valor de retorno

const funcionFlechaConReturnImplicito = (parametro1, parametro2) => algunValor; //Valor de retorno
*/



/*
//const sumarDosNumeros = (num1, num2) => num1 + num2;
const sumarDosNumeros = (num1, num2) => {
    return num1 + num2;
}
let resultado = sumarDosNumeros(10, 15);
console.log (resultado);

if (true) {
    console.log ("asies");
};
if (true) console.log ("asies");


//OPERADOR TERNARIO
//condicion ? instrucciones en caso de que sea true : instrucciones en caso de que sea false;
if (2<5) {
    console.log ("es menor");
}else{
    console.log ("es mayor");
};
2 < 5 ? console.log ("es menor") : console.log ("es mayor");

// Las funciones declaradas como la anterior se cargan antes que todo el codigo, por eso la puedo invocar
// en cualquier momento sin importar en que parte del codigo se encuentre. 
saludar("Annie");
function saludar (nombre){
    console.log(`¡Hola ${nombre}! cara de bola:D`);
};

//darInformacion ("Osiris", 24); En este caso las funciones anonimas no pueden invocarse antes de haber sido declaradas 
// en nuestro código ya que nos marcaría un error.   
const darInformacion = (nombre, edad) => console.log (`Hola me llamo ${nombre} y tengo ${edad} años :D`); 
darInformacion ("Osiris", 24); 
*/




            //FUNCIÓN CALLBACK 
/*
function mostrarInformación  (nombre, edad) {
    console.log (`Hola me llamo ${nombre} y tengo ${edad} años :D`);
};

function obtenerInformación (callback) {
    let nombre = prompt ("Ingresa Tu nombre");
    let edad = prompt ("Ingresa tu edad");

    callback (nombre, edad);
};
////////////////////////////////////////////////
function obtenerInformación (callback) {
    let nombre = prompt ("Ingresa Tu nombre");
    let edad = prompt ("Ingresa tu edad");

    callback (nombre, edad);
};

obtenerInformación ( (nombre, edad) => console.log (`Hola me llamo ${nombre} y tengo ${edad} años :D`) );
*/



            //FUNCIÓN AUTOINVOCADA
//Es invocada automaticamente sin ser llamada
//Antes de tener una de estas funciones forsozamente la linea previa debe de tener un punto y coma; (aplica lo mismo para instrucciones que comienzan con parentesis, corchetes o llaves)
/* 
;( function (params) {
    //Instrucciones
    return
} )(); 
*/
/*
let variable = "algo";
;(function(){
    alert ("¡Hola Mundo!")
})();
*/



/*
            //CLOSURES
function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}
var suma5 = creaSumador(5);
console.log (suma5);
console.log(suma5(2));  // muestra 7
*/




                //FUNCIÓNES DE ORDEN SUPERIOR 
//Funciones que aceptan otras funciones como parametros o retornan funciones
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//forEach
/*let resultado = numbers.forEach( ( elemento, indice, array ) => {
    console.log (`El elemento ${elemento} se encuentra en el indice ${indice} del arreglo ${array}`);
    return elemento*2; //Aunque se ponga un return forEach NO retorna NADA es undefined
});
console.log (resultado); // Devuelve undefined*/

//map
/*let resultadoMap = numbers.map ( ( elemento, indice, array ) => {
    console.log (`El elemento ${elemento} se encuentra en el indice ${indice} del arreglo ${array}`);
    return elemento*2;
} );
console.log (resultadoMap); // Devuelve el return (elemento*2)*/
let pares = [];
let resultado = numbers.forEach( ( elemento, indice, array ) => {
    if (elemento % 2 === 0) pares.push (elemento);
} )
console.log (resultado);
console.log (pares);


let resultadoMap = numbers.map ( ( elemento, indice, array ) => {
    if (elemento % 2 === 0) return elemento;
} );
console.log (resultadoMap);

//filter
/*let resultadoFilter = numbers.filter ( ( elemento, indice, array) => {
    return (elemento % 2) === 0
} );*/
// Lo mismo que arriba pero simplificado con return Implicito:
let resultadoFilter = numbers.filter ( ( elemento, indice, array) => (elemento % 2) === 0 ); 
console.log (resultadoFilter);


//reduce
let resultadoReduce = numbers.reduce ( (acumulador, valorActual, indice, array) => {
    console.log (acumulador, valorActual);
    return acumulador + valorActual;
}, 0 );
// Lo mismo que arriba pero simplificado con return Implicito:
//let resultadoReduce = numbers.reduce ( (acumulador, valorActual, indice, array) => acumulador + valorActual, 0 );
console.log (resultadoReduce);







