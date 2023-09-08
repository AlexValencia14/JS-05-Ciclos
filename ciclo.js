/*

Condiciones: alterar el orden natural del codigo 
estructuras de control: controlar la ejecución del codigo




Ciclo o bucles (loops)

Tambien conocidos como bucles son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condición especifica.

Es importante usar el ciclos para automatizar tareas repetitivas

En JS existen los siguientes ciclos:
    - while
    - do while
    - for


Iterar: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial, para crear algoritmos o programas mas dinamicos y flexibles.
*/

/*while: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion es verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada interaccion.

while (condicion){
    //codigo que se ejecuta
}

*/

// while (miCrushMeQuiere){
//     console.log("Sere feliz");
// }

/**
Analogia: Seguir una receta para preparar sopa

Lista de ingredientes:
    - Zanahoria
    - papa
    - chayote
    - limon
    - Agua
    - Espinacas

Vamos a agregar los ingredientes a la olla mientras tengamos ingredientes disponibles.

Paramos cuando ya no tengamos ingredientes.

 */

//Ejemplo de un consultorio dental

let capacidadPacientes=50;
let pacientesEnConsultorio=15

//mientras 15 sea menor que 50...
while (capacidadPacientes>pacientesEnConsultorio){
    //seguimos dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}

//mientras sea verdadero, se ejecuta la instrucción (pide permiso para ir a una fiesta)



/*
Do while (hacer mientras)

//Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)


El bucle do while se difencia del while ya que aqui se ejecuta la instrucción al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.



do {
    //codigo a ejecutar
} while (condicion);


Analogia: Cuando preparamos un pastel, se mete una cuchara al menos una vez para saber si esta listo

*/


//ejemplo de un consultorio dental

var contadorPacientes=0;

do{
    var nombre = prompt("ingresa el nombre del paciente");
    if (nombre){
        contadorPacientes++;
    }
    confirm("Desea registrar otro paciente?")
}while (contadorPacientes<15);

console.log("Numero total de pacientes: ", contadorPacientes);

/*

For (para)

Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
Consiste de 3 partes fundamentales:

    - inicialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    - condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    - expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.
    
    for (inicializacion; condicion; expresion de iteracion){
        //bloque de codigo a ejecutar
    }

*/

//crea un codigo que imprima los numeros del 0 al 4 
for (var valorInicial=0; valorInicial<5;valorInicial++){
    console.log(valorInicial);
}

//Version mas "comercial"
for (i=0;i<5;i++){
    console.log(i);
}

//Consultorio dental registro de citas con un for

let cantidadDeCitasDiarias=5;
for (let i=1; i<=cantidadDeCitasDiarias;i++){
    var nombre=prompt("Ingrese el nombre del paciente: "+i);

    console.log("Paciente con cita "+i);
}