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




