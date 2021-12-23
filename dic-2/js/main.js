
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










