//cometarios -> documentar el código
/*Comentar el código*/


//Variable = espacio en memoria ram para almacenar algo
//Declarar = crearla
let departamento = '',
  edad = 0,
  ciudad = '',
  dinero = true,
  permiso = '';
//Asignación = guardar algo dentro de la variable
departamento = 'Antioquia';
//Tipos de variables primarios
//Texto (string)
ciudad = 'Medellín';
//Números (number)
edad = 18;
//Booleanos (true or false)
dinero = false;

//Imprimir mensajes = mostrar
//consola
//console.log('Hola Mundo')
//documento
//document.write('Hola Mundo')

//typeof = muestra el tipo de variable
//console.log(typeof permiso);

//Reasignar -> Cambiar el valor de una variable
edad = 46;

//const -> variables constantes, no se les puede cambiar el valor
const pais = 'Colombia';
//console.log(pais);

//sumar-> suma si es una operación aritmetica
//console.log(2+3);
//sumar-> concatena (juntar) si se trata de una operación de texto
//console.log('Hola '+'mundo');

//sumar y asignar
edad += 10;
//console.log(edad);

//orden de preferencias
let operacionSuma = (5 + 5) * 10;

//Recibir datos del usuario
//let n1 = 0, n2 = 0;

//n1 = Number(prompt('Ingrese un dato'));
//n2 = Number(prompt('Ingrese un dato'));

//operacionSuma = n1+n2;

//console.log(operacionSuma);


/* let x = 0, y = 0, mensajeXY = '';

x = Number(prompt('Ingrese el valor de a'));
y = Number(prompt('Ingrese el valor de b'));

mensajeXY = `El valor a = ${x} y el valor b = ${y}`;
console.log(mensajeXY);

let operacionCompuesta = (x+y)*10;

console.log(operacionCompuesta); */

//Operadores de comparación
//Operadores lógicos
//&& -> solo es verdad cuando todas son verdaderas
/* 
  v-v=v
  v-f=f
  f-v=f
  f-f=f
*/
//|| -> solo falso cuando ambas son falsas
/* 
  v-v=v
  v-f=v
  f-v=v
  f-f=f
*/
/* if (edad==='56' || 4<3) {
  console.log('verdad');
} else {
  console.log('falso');
} */

//let resultadoNumeros = edad === 56 && 4 > 3 ? 'Verdad' : 'Falso';

/* console.log(resultadoNumeros)
console.log(resultadoNumeros)
console.log(resultadoNumeros)
console.log(resultadoNumeros)
console.log(resultadoNumeros)
console.log(resultadoNumeros) */

//negar una condición//
if (!true) {
  //console.log(true)
} else {
  //console.log(false)
}

//Tipos de variables compuestas
//Arreglos -> variables que me permite almacenar varios datos (recomendado: que sean los mismos tipos de datos)
/* let dEntreSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
console.log(dEntreSemana[0]) */
//Objetos -> variables que me permite almacenar varios datos (recomendado: que sean los mismos tipos de datos)
/* let mesesAnio = {
  m1: 'Enero',
  m2: 'Febrero',
  m3: 'Marzo',
  m4: 'Abril'
}
mesesAnio.m5 = 'Mayo'
console.log(mesesAnio.m1) */
//Funciones -> variables que ejecutan fragmentos de cógido, funciones flecha
//Funciones reciben argumentos o parametros y que estos son variables locales a la función
//La cantidad de parametros que se crean en la función deben ser asignados
/* let saludo = (palabra1, palabra2) => {
  return console.log(`${palabra1} ${palabra2}`)
}
saludo('Hola', 'Multimedia') */

//Metodos para los arreglos
//Metodo -> Fragmento de códigos guardados en core de js
//length -> cantidad de elementos en el arreglo
//console.log(dEntreSemana.length)

//join -> me devuelve el arreglo con el caracter pasado como parametro
/* let newdEntreSemana = dEntreSemana.join(' ')
console.log(newdEntreSemana) */

//Metodo pop y push
//pop -> eliminar el último elemento del arreglo
//push -> agregar un elemento al final del arreglo
/* dEntreSemana.pop()
dEntreSemana.push('viernes')
console.log(dEntreSemana)
 */
//Metodo shift y unshift
//shift -> eliminar el primer elemento de un arreglo
//unshift -> agregar un elemento al inicio del arreglo

//dEntreSemana.shift()
/* let nDia = 'domingo'
dEntreSemana.unshift(nDia)
console.log(dEntreSemana) */

//concat -> concatenar arreglos
/* let dFinesSemana = ['sábado', 'domingo']
let tDias = dEntreSemana.concat(dFinesSemana); */

//sort -> ordena alfabeticamente un arreglo
//reverse -> nos permite cambiar el orden de los elementos, no sirve para number

//estructuras de control
//casos -> sirve para comparar con una igualdad la condición, no sirven para rangos

/* let nDia = prompt('Ingrese el día de la semana')
let mensaje

switch (nDia) {
  case 'lunes':
    mensaje = 'El primer día de la semana'
    break;
  case 'martes':
    mensaje = 'El segundo día de la semana'
    break;
  case 'miercoles':
    mensaje = 'El tercer día de la semana'
    break;
  default:
    mensaje = 'No se encuentra el resultado'
    break;
}
console.log(mensaje) */
