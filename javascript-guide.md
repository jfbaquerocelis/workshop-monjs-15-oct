# Guía del Taller Javascript.

###Javascript: Front vs Back
**Javascript** es el lenguaje de la web. Un lenguaje inevitable para cualquier desarrollador. Inicialmente _javascript_ era considerado por muchos como un lenguaje de programación para manejar el **DOM** en una sitio web; muy pocas personas usaban a _javascript_ como un lenguaje para manejar la lógica de negocio de la aplicación que estaban construyendo.

Pero, con el paso del tiempo _javascript_ tomo fuerza para ser una de las mejores opciones para los desarrolladores back-end gracias a **NodeJS**.

###Pre-conceptos

####Variables
>Las variables en _javascript_ son creadas a partir de la palabra clave **var** y son inicializadas asignandoles un valor.

_Javascript_ al ser un lenguaje que no es fuertemente tipado no es necesario declarar el tipo de datos al cual hace referencia la variable.

```javascript
    var numero = 10; // Tipo entero numérico
    var flotante = 15.5; // Tipo decimal numérico
    var cadena = "Hello Javascripter!" // Tipo cadena de texto
    var arreglos = [1, 2, "data", 'simple_data']; // Tipo arreglo de datos
    var bool = false; // Tipo Booleano
```
####Operadores
>Los operadores nos permiten relacionar de formas diferentes una o mas variables por medio de los valores de cada una. 

######Tipos De Operadores:
1. Aritmeticos:
    - Suma ( + )
    - Resta ( - )
    - Multiplicación ( * )
    - División ( / )
    - Mod ( % )
    
    ```javascript
    // Suma
    var suma_enteros = 10 + 5; // Suma de enteros
    var suma_flotantes = 10.5 + 15.4 // Suma de flotantes

    // Resta
    var resta_enteros = 10 - 5; // Resta de enteros
    var resta_flotantes = 10.5 - 15.4; // Resta flotantes

    // Multiplicación
    var multiplicacion_enteros = 10 - 5; // Multiplicación de enteros
    var multiplicacion_flotantes = 10.5 - 15.4; // Multiplicación flotantes    

    // División
    var multiplicacion_enteros = 10 / 5; // División de enteros
    var multiplicacion_flotantes = 10.5 / 15.4; // División flotantes

    // Mod
    var mod_enteros = 10 % 5; // Mod de enteros
    var mod_flotantes = 10.5 % 15.4; // Mod flotantes        
    ```
2. Lógicos:
    - AND ( && )
    - OR ( || )
    - NOT ( ! )

    ```javascript
    // Declaramos dos variables booleanas
    var a = true;
    var b = false;

    // AND
    var and = a && b; // false

    // OR
    var or = a || b; // true

    // NOT
    var not = !b; // true
    ```
3. Relacionales:
    - Menor que ( < )
    - Mayor que ( > )
    - Igual que ( === )
    - Diferente de ( !== )
    - Mayor o Igual que ( >= )
    - Menor o Igual que ( <= )

    ```javascript
    // Declaramos dos variables
    var a = 5;
    var b = 3;

    // Menor que
    var menor_que = a < b; // false

    // Mayor que
    var mayor_que = a > b; // true

    // Igual que
    var igual_que = a === b; // false

    // Diferente que
    var diferente_que = a !== b; // false

    // Menor igual que
    var menor_igual_que = a <= b; // false

    // Mayor igual que
    var mayor_igual_que = a >= b; // true
    ```

####Estructuras de control de flujo

>Las estructuras de control de flujo nos permiten controlar las instrucciones que escribimos en nuestros programas.

-  **if**   _Simple_
-  **if**   _Anidado_ 
-  **if else** _si sino_ 

```javascript
    if (condicion) // if simple
    {
        //instrucciones
    }

    if (condicion) // if anidado
    {
             //instrucciones

             if (condicion) // if simple
             {
                   //instrucciones
             }
    }
```

 ```javascript
     if (condicion) // if anidado
    {
                 //instrucciones
                 
                 if (condicion) // if simple
                 {
                       //instrucciones
                 }
    }
``` 
como en cualquier lenguaje de programacion **JavaScript** nos permite implementar los operadores relacionales y lógicos dentro de los paréntesis del condicional como se muestra a continuación.


```javascript
    // Declaramos dos variables
    var a = 5;
    var b = 3;

    if ( a > b ) // true
    {
         // SI se ejecutan las instrucciones dentro de los {}
    } 

    if ( a < b ) // false
    {
         // NO se ejecutan las instrucciones dentro de los {}
    } 

     if ( a < b ) // false
    {
         // NO se ejecutan estas instrucciones
    }  else {
         // SI se ejecutan estas instrucciones
    }

     if ( a < b ) // false
    {
         // NO se ejecutan estas instrucciones
    }  else if ( a === b ) { // false
         //  NO se ejecutan estas instrucciones
    }

     if ( a > b ) // true
    {
         // SI se ejecutan estas instrucciones
          if ( a === b )  // false
             { 
                    //  NO se ejecutan estas instrucciones
             }
    } 
```

####Ciclos

>Los ciclos repetitivos o bucles nos permiten iterar **instrucciones** a partir de ciertas condiciones, los ciclos más usados en JavaScript son:  

-  **for** 
-  **while**   
-  **for in** 

######sintaxis JavaScript


```javascript
    
    for ( var i = 0; i < num ; i++ ) 
    {                                      
        //instrucciones a iterar
    }
   

    while ( condición ) 
    {                       
          //instrucciones a iterar;
    }


    for ( key in array || object ) 
    {
           //instrucciones a iterar;
    }
```


```javascript
    
    // Ejemplo for en JavasCript
    for ( var i = 0; i < 4 ; i++ ) // ciclo for que itera 4 
    {                                      //veces el código dentro de los {}
        console.log(i);
    }
    /* Output
    >
    0
    1
    2
    3
    */

    // Ejemplo while en JavaScript 
    var count = 0;  // declaración de variable count
    while ( count < 5 ) // Mientras esta condición devuelva true se repetirá 
      {                       //el código dentro de las {}
          console.log('hola #' + count); 
          ++count;
    }
    /* Output
    >
    hola #0
    hola #1
    hola #2
    hola #3
    hola #4
    5
    */

    //Ejemplo for in en Javascript
    var peoples = ['Susan', 'Maria', 'Jose', 'Juan']; // declaracion de un arreglo
    for ( i in peoples ) // para i que recorre en el arreglo peoples
    {
       console.log( 'Nombre: ' + peoples[ i ] );
    }
    /* Output
    >
    Nombre: Susan
    Nombre: Maria
    Nombre: Jose
    Nombre: Juan
    undefinied
    */

```

####Funciones:
>Las funciones en _Javascript_ son un conjunto de instrucciones que se agrupan para realizan una tarea concreta y los mas importante es que se pueden reutilizar facilmente. Las funciones se reconocen porque llevan la palabra __function__ antes del nombre de la función.

```javascript
    
    //Funcion Simple
    var a = 2;
    var b = 3;
    function Resta(){
        var resta = 0;
        resta = a - b;
        return resta;
    }
    //ejecutamos la función
    Resta(); // -1

    //Funcion Con Parámetros
    function Suma(a,b){
        var suma = 0;
        suma = a + b;
        return suma;
    }
    // Ejecutamos la función
    Suma(2,2); // 4
```
######Funciones Anónimas
>En _Javascript_ existen otro tipo de funciones llamadas __Funciones Anónimas__. Estas funciones se reconocen debido a que no llevan un nombre un especifico.

```javascript

    function () {
        console.log('Esta función no tiene un nombre');
    }
  
```


