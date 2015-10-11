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
>Las funciones en _Javascript_ son un conjunto de instrucciones que se agrupan para realizan una tarea concreta y los más importante es que se pueden reutilizar facilmente. Las funciones se reconocen porque llevan la palabra __function__ antes del nombre de la función.
Cabe resaltar la importancia de las funciones en _javascript_, es por ese motivo que se dice que _javascript_ es un **lenguaje funcional**.

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
    (function () {
        console.log('Esta función no tiene un nombre');
    })()
    // Esta función no tiene nombre
```

######Funciones Asignadas a Variable
>Estas funciones en realidad son funciones anónimas asignadas a una variable. De aquí se resalta la importancia de javascript y las variables, de esta forma una función tiene la habilidad de poder ser anónima y recibir el nombre de la variable a la cual se asigna.

```javascript
    var hello_word = function (){
        console.log('Hola mundo!, soy una función llamada hello_word!')
    }

    hello_word() // Hola mundo!, soy una función llamada hello_word!
```

####Objetos
>He aquí el dilema de muchos programadores _javascript_. Los objetos en este lenguaje son mirados desde muchos puntos de vista, pero en un concepto más adaptado un objeto es una colección cualquiera de pares llave-valor.
Comencemos con saber que existen 3 formas de crear objetos en javascript:

1. Literalmente
2. Usando **new**
3. Usando la función **Object.create()**

######Literalmente
>Cuando hablamos de crear una variable literal nos referimos a crear un objeto de forma normal o natural.

```javascript
    var objeto = {llave : 'valor'};
```

######Usando new
>**new** es una palabra reservada o clave usada en _javascript_ para crear un objeto a partir de una "clase". **new** crea una instancia de una "clase" o modelo.

_¿Por qué clase entre comillas?_
>El concepto de clase en javascript no es manejado hasta **ES6** _(ECMAScript 6)_.
Por tal motivo en **ES5** _(ECMAScript 5)_ no se maneja el concepto, solo se hablan de instancias y funciones que pueden actuar como clases.
La forma en que se instancia una "clase" en _javascript_ creando así un objeto es de la siguiente manera:

```javascript
    // Creamos la clase o el modelo
    function Animal(nom){
        this.nombre = nom;
    }

    // Ahora creamos la instancia del modelo Animal
    var Perro = new Animal('Kiro')

    // Si accedemos a sus propiedades podremos ver el nombre del Perro
    Perro.nombre; // Kiro
```

######Usando Object.create()
>Muchos desarrolladores consideran a esta función como la forma correcta de crear un objeto. Esta función recibe 2 parametros y es una **Función asignada a variable**.
Los parametros son:

1. **Proto:** Este es el prototipo a partir del cual se creará el objeto.
2. **Propiedades:** Es un objeto el cual contiene cada llave como el nombre de la propiedad y cada valor como un objeto que contiene el valor de la llave y otras características.

```javascript
    var objeto = Object.create(Object.prototype, {
        prop_uno : { value : "Valor de la propiedad 1" },
        prop_dos : { value : "Valor de la propiedad 2" }
    })

    objeto.prop_uno; // Valor de la propiedad 1
    objeto.prop_dos; // Valor de la propiedad 2
```

Antes de cerrar este capítulo vamos a tratar de explicar el concepto de POO y prototipado en _javascript_.

######Javascript orientado a objetos
>Este concepto ha nacido a partir de algunos desarrolladores que usan el paradigma de **Programación Orientada a Objetos** en su diario vivir. Y se sustenta con el uso de prototipos y contructores en javascript.
En realidad decir que _javascript_ es un lenguaje _Orientado a objetos_ o no es un concepto más personal del desarrollador que de javascript, pero no deja de ser un tema de gran discución.

######Prototipo
>Un _prototipo_ es un objeto del cual otros objetos pueden heredar propiedades y métodos.

###Introducción a Javascript
>¿Introducción a Javascript? Y lo anterior que?.
Lo anterior eran conceptos sobre _javascript_ que son buenos tener claros antes de aventurarnos en este lenguaje.

####¿Qué es Javascript?
>Javascript es el lenguaje de la web. Es un lenguaje interpretado orientado a eventos que nos permite crear aplicaciones web versátiles y sobre todo muy interactivas.

####Características del lenguaje
>_Javascript_ posee diferentes características que lo transforman en un lenguaje único.

1. **Javascript** es un lenguaje interpretado.
2. **Javascript** no es un lenguaje fuertemente tipado.
3. En **Javascript** todo es un objeto.
4. **Javascript** posee una sintaxis simple, facil de aprender.

####Los 6 mandamientos de Javascript

1. **Javascript** es un lenguaje funcional.
2. **Javascript** es un lenguaje orientado a eventos.
3. **Javascript** es un lenguaje asíncrono.
4. **Javascript** NO ES JAVA.
5. **Javascript** es el lenguaje de la web.
6. **Javascript** es el único lenguaje que un navegador puede interpretar (Por ahora...).

<!-- Listo, después vienen los ejercicios, ejemplos o algún taller -->
