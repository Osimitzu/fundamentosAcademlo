
//CARACTERISTICAS

/*
    -Alto nivel
    -Interpretado
    -Tipado dinamico
    -Multiparadigma
    -Case sensitive 
    -No Necesita forzosamente punto y coma, excepto
    cuando la siguiente instrucción empieza con [], (), {}
*/

//VARIABLES
/*
    -camelCase (escribir la primer palabra con minusculas y la segunda con la primer letra mayuscula)
    -Nombres significativos 
    -Pueden iniciar con $ o _ (signo de pesos o guion bajo)
    -"var" es una variable global
    -"let" es una variable local
*/

var userName = "Osiris";
let otherUserName = "Aurora";

console.log (userName);

userName = "Otro nombre";

console.log (userName);

for ( let i = 0; i<3; i++){
    var variableUno = 10;
    let variableDos = 15;

    console.log (variableUno);
    console.log (variableDos);

};

console.log (variableUno);
//console.log (variableDos); (NO es global, por lo tanto no se puede utilizar fuera del "for")


//CONSTANTES     

/*  
    Constantes -----> Valores fijos a los cuales no podemos reasignarles un valor
    Cuando declaramos una constante es necesario asignarle un valor.
    const CONSTANT_VALUE
    
    CONSTANT_VALUE = "Un valor constante"
    console.log( CONSTANT_VALUE )

*/

const PI = 3.1416;
const E = 2.7

console.log (PI);

let age;
console.log (age);
age = 24;
console.log (age);

/*
//Cuando declaramos una constante SIEMPRE tenemos que inicializarla con un valor a diferencia de una variable que se puede dejar
declarada sin ningun valor

const HOLA;
HOLA = 24;
console.log (HOLA);
SyntaxError: Missing initializer in const declaration
    at wrapSafe (internal/modules/cjs/loader.js:1001:16)
    at Module._compile (internal/modules/cjs/loader.js:1049:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
    at internal/main/run_main_module.js:17:47
*/


//TIPOS DE DATOS


    //    -STRING/Cadena de texto
            let cadenaDeTexto = "Esto es una cadena de texto";
            let otraCadenaDeTexto = 'También soy una cadena de texto';
            let cadenaDeTextoNumero = "10";

            console.log (cadenaDeTexto);
            console.log (otraCadenaDeTexto);
            console.log (cadenaDeTextoNumero);

    //    -NUMBER/Numeros

            let numeroEntero = 10;
            let numeroDecimal = 3.1416;

            console.log (numeroEntero, numeroDecimal);

    //Numeros especiales: Son considerados numeros, pero NO se comportan como numeros. 

        //Infinity, -Infinity 
        //NaN ------> Not A Number --------> Se obtiene al realizar operaciones que NO producen resultados significativos
        //NaN es de tipo numerico

            console.log (Infinity - Infinity);

    //Booleanos 

        let verdadero = true;
        let falso = false;

        console.log (verdadero, falso);
    
    //Truthy y Falsie -----> Valores booleanos intrinsecos a cada valor 
    
    /*
        Falsy:
            0
            ""
            null
            undefined
            NaN

        Truthy:
            '0'
            'false'
            []
            {}
     */

    //Valores vacios 
    
        //undefined -------> No hay valor porque no esta definido todavía
        //null ------> No existe o no hay valor porque así se indico

        let variableSinInicializar;
        console.log (variableSinInicializar);

        variableSinInicializar = null;
        console.log (variableSinInicializar);
        /*
            -Sirven para denotar la ausencia de un valor significativo.
            -Son tipos de datos primitivos, PERO NO TRAEN INFORMACIÓN.
            -Cuando una operación no produce un valor significativo produce "undefined" 
            simplemente porque TIENE que producir algun valor.
        */


//OPERADORES 
    
    //Operadores de asignación 
        // =
        let numeroPar = 20;
        // +=
        numeroPar += 10;

        console.log (numeroPar);
        // -=
        // *=

    //Operadores aritmeticos
        //Nos permiten realizar operaciones matematicas con datos de tipo numero

        console.log ( 10 + 5 );
        console.log ( 30 - 2 );
        console.log ( 4 * 5 );
        console.log ( 100 / 4 );
        console.log ( 5 % 2 );

        console.log ( "10" + 15 ); //CONCATENA
        console.log ( typeof ("10" + 15) ); // Muestra el tipo de dato, en este caso "string"

        console.log ( 10 - "15" );
        console.log ( "15" - 10);

        //Conversion explicita -------> Convierte un dato a tipo numero.
        let randomNumber = "15";
        console.log ( 10 + randomNumber );

        randomNumber = parseInt ( randomNumber );
        console.log ( typeof (randomNumber) );
        console.log ( 10 + randomNumber );

        let number = 10;
        console.log ( number.toString() );
        
        




    

