
//METODOS IMPORTANTES DE ARREGLOS

let animales = [];
//push ---> Sirve para añadir uno o mas elementos al final del arreglo.
//devuelve la nueva longitud del arreglo
animales.push ("gorila", "lobo");
console.log (animales);

//pop ---> Elimina el ultimo elemento de un arreglo
//devuelve el elemento eliminado 

let elementoEliminado = animales.pop();
console.log (`El elemento eliminado fue ${elementoEliminado}`);
console.log (animales);

//unshift ---> agrega elementos al inicio del arreglo; 
//devuelve la nueva longitud del arreglo

let nuevaLongitud = animales.unshift ("cebra", "tigre");
console.log (`La nueva longitud del arreglo ${nuevaLongitud}`);
console.log (animales);

//shift ---> Elimina el primer elemento de un arreglo y devuelve el valor eliminado 
let primerElementoElimindao = animales.shift();
console.log (`El elemento eliminado fue ${primerElementoElimindao}`);
console.log (animales);

//splice ---> Me permite eliminar y agregar elementos a partir de un indice

//eliminar 

let meses = ["enero", "febrero", "marzo", "abril", "domingo", "lunes", "noviembre", "diciembre"];
let indexStart = meses.indexOf ("domingo");
meses.splice (indexStart, 2);
console.log (meses);

let indexAbril = meses.indexOf ("abril");
console.log (indexAbril);
meses.splice (indexAbril + 1, 0, "mayo", "junio", "julio", "agosto", "septiembre", "octubre");
console.log (meses);


//slice ---> Extrae una copia de una parte de un arreglo
//devuelve una copia de los elementos extraidos

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let rango = numeros.slice (1, 6);
//console.log (numeros);
//console.log (rango);

let rango = numeros.slice ();
rango.push (11);
console.log (numeros);
console.log (rango);

//split ---> Separa una cadena de texto en pequeños pedazos y los añade como elementos de un arreglo.

let frase = "Mi nombre es Osiris y tengo 24 años"
let palabrasArray = frase.split(" ");

console.log (palabrasArray);
console.log (palabrasArray[3]);

//join ---> une todos los elementos de un arreglo para formar una cadena de texto. 
let nuevaCadena = palabrasArray.join (",");
console.log (nuevaCadena);



//OBJETOS
/* 
    Son abstracciones de objeto reales.
    Poseen propiedades (caracteristicas).
    Tienen metodos (acciones).
    object{
        propiedad: valor, 
        propiedad: valor2,
        key: value,
        clave: valor,
        metodo: funtion(parametros){
            //accion a realizar
        },
        function nombreMetodo(parametros){
            //accion a realizar
        },
    }
*/
let objetoChitto = {
    especie: "Gato",
    nombre: "Chitto",
    edad: 4,
    color:"calico",
    hobbies: ["dormir", "acurrucarse", "saltar por las noches"],
    statusSalud: {
        vacunción: true,
        desparacitación: true,
    },
    ronronear: function(){
        console.log ("prrrrrr")
    },
    //nombre: "otro nombre",
}

let nombreMascota = objetoChitto.nombre;
console.log (nombreMascota);

console.log (objetoChitto.hobbies);
console.log (objetoChitto.comidaFavorita);

//accesar a un metodo
objetoChitto.ronronear();

console.log (objetoChitto.hobbies[1]);
console.log (objetoChitto.statusSalud.vacunción);

//Otra manera de accesar a los valores de las propiedades:
console.log (objetoChitto["especie"]);


//Maneras de modificar un objeto:

console.log(objetoChitto.color);
objetoChitto.color = "Rosa"
console.log(objetoChitto.color);


objetoChitto.comidaFavorita = "Croquetas";
console.log (objetoChitto.comidaFavorita);
console.log (objetoChitto);


