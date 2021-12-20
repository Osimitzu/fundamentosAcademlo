// OPERADORES DE COMPARACIÓN

    console.log ( "10" == "10" );

    console.log ( "Osiris" == "Osiris" );
    console.log ( "ANGEL" == "angel" );

    console.log ( "10" == 10 );
    console.log ( "10" === 10 );

    console.log ( typeof ("10" === 10) );

    // BUENA PRACTICA: Utilizar SIEMPRE la igualdad estricta "==="

    //***En la igualdad simple existe coerción de tipo o converción explicita y en la extricta no***
    console.log ( NaN == NaN );
    console.log ( Infinity == Infinity );

    console.log ( null == undefined );
    console.log ( null === undefined );

    console.log ( undefined == "" );
    console.log ( undefined === "" );

    console.log ( null == "" );
    console.log ( null === "" );

    console.log ( "" == " " ); // Los espacios son caracteres***



    // Diferente a

    console.log ( 10 != 50 );
    console.log ( 10 != 10 );
    
    console.log ( 10 != "10" );
    console.log ( 10 !== "10" );

    console.log ( "osiris" != "OSIRIS" );



    //Menor que / menor o igual que 

    console.log ( 10 < 50 );
    console.log ( 15 < 5 );
    console.log ( 15 < 15 );
    console.log ( 10 < 10.5 );
    console.log ( 100 < Infinity );
    console.log ( 15 <= 15 );
    console.log ( Infinity <= Infinity );
    console.log ( -Infinity < Infinity );

    console.log ( "Osiris" <= "osiris" ); //***compara los valores de Unicode de cada caracter***


    // Mayor que / mayor o igual que

    console.log ( 10 > 50 );
    console.log ( 15 > 5 );
    console.log ( 15 > 15 );
    console.log ( 10 > 10.5 );
    console.log ( 100 > Infinity );
    console.log ( 15 >= 15 );
    console.log ( Infinity >= Infinity );
    console.log ( -Infinity > Infinity );



//OPERADORES LÓGICOS
    
    //NOT ! negación -----> Invierte en valor de verdad del dato al cual es aplicado. 

    let verdadero = true
    let falso = false

    console.log ( !verdadero );
    console.log ( !falso );
   
    //AND && -----> Se obtiene un valor verdadero unicamente cuando ambos valores son verdaderos

    console.log ( verdadero && verdadero ); // true
    console.log ( verdadero && falso ); // false
    console.log ( falso && verdadero ); // false
    console.log ( falso && falso ); // false

    //OR || ------> Basta con que uno de los dos operandos sea verdadero para obtener un resultado verdadero 

    console.log ( verdadero || verdadero ); // true
    console.log ( verdadero || falso ); // true
    console.log ( falso || verdadero ); // true
    console.log ( falso || falso ); // false

    console.log ( ( 10 < 5 ) && ( 8 > 5 ) );
    console.log ( ( 10 < 5 ) || ( 8 > 5 ) );
    

//CONDICIONALES 

    /*

        Condición 
            LA CONDICIÓN SE CUMPLE
                Instrucciones que se llevan a cabo si la condición se cumple 
            LA CONDICÓN NO SE CUMPLE
                Instrucciones alternas
                Se pasa a la siguiente instrucción 

        if (CONDICIÓN){
            lleva a cabo ciertas instrucciones.
        } else{
                instrucciones alternas
            };

    */

    if ( true ) {
        //instrucciones a ejecutar si la condición se cumple
        console.log ( "La condición es verdadera" );
    } else{
        //instrucciones alternas 
        console.log ( "La condición no se cumplio" );
    };


    if ( false ) {
        //instrucciones a ejecutar si la condición se cumple
        console.log ( "La condición es verdadera" );
    } else{
        //instrucciones alternas 
        console.log ( "La condición no se cumplio" );
    };
    


    // Truthys y Falsies // ****valores vacios "null, undefined, 0, NaN, etc" son FALSIES, todo los demas son TRUTHYS*****
    let contraseña = "contraseña";
    let correo = "correo";

    if ( contraseña && correo ){
        //instrucciones a ejecutar si la condición se cumple
        console.log ( "La condición es verdadera" );
    } else{
        //instrucciones alternas 
        console.log ( "La condición no se cumplio" );
    };
    if ( null ){
        //instrucciones a ejecutar si la condición se cumple
        console.log ( "La condición es verdadera" );
    } else{
        //instrucciones alternas 
        console.log ( "La condición no se cumplio" );
    };
    





