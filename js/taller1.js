/* 
1- Una familia con tres hijos estudiando en la Universidad, decide cómo pagar el valor de las matrículas de sus hijos de la siguiente manera: si el costo total de las tres matrículas excede los 7 millones de pesos, la familia podrá pagar un 40% del costo, pedirá prestado al Icetex 40% y al banco un 20%. Si el total de la compra no excede los 7 millones de pesos,  la familia estará en capacidad de invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al Icetex. 

Sabiendo que el valor de un crédito académico es de 180.000 pesos, diseñar un programa que determine la forma de pago de las matriculas, dado el número de créditos académicos que tomará cada hijo en el semestre. 

*/

/* //Datos entrada
let cH1 = Number(prompt('Ingrese la cantidad de créditos')),
    cH2 = Number(prompt('Ingrese la cantidad de créditos')),
    cH3 = Number(prompt('Ingrese la cantidad de créditos')),
    cantidadCre = cH1 + cH2 + cH3,
    creditoAca = 180000,
    familia = 0, icetex = 0, banco = 0, mensaje = ''

//Operaciones
let precioTotal = creditoAca * cantidadCre
console.log(precioTotal)
//si supera el tope
if (precioTotal >= 7000000) {
  familia = precioTotal * 0.4
  icetex = precioTotal * 0.4
  banco = precioTotal * 0.2
  mensaje = `El crédito será distribuido de la siguiente forma:
            Familia deberá pagar: ${familia}
            Icetex deberá pagar: ${icetex}
            Banco deberá pagar: ${banco}
            El valor de la matrícula es: ${precioTotal}          
  `
} else {
  familia = precioTotal * 0.7
  icetex = precioTotal * 0.3
  banco = 0
  mensaje = `El crédito será distribuido de la siguiente forma:
            Familia deberá pagar: ${familia}
            Icetex deberá pagar: ${icetex}
            Banco deberá pagar: ${banco}
            El valor de la matrícula es: ${precioTotal}   
  `
}
//Datos de salida
console.log(mensaje) */

/* 
- El día de la mujer un almacén ha lanzado una promoción, se realizará un descuento del 8% sobre el valor total de las compras para toda mujer que realice una compra superior a 100.000 pesos. Diseñar un programa que permita calcular el pago que debe realizar un cliente en este día tan especial.
*/

/* //Datos de entrada
let valorCompra = Number(prompt('Ingrese el valor de la compra')),
    valorFinal = 0,
    mensaje = '',
    descuento = 0

//Operaciones
//Preguntar si supera el valor para el descuento
if (valorCompra >= 100000) {
  descuento = (valorCompra * 0.08)
  valorFinal = valorCompra - descuento
  mensaje = `El valor a pagar es $ ${valorFinal}, el descuento fue de: $ ${descuento}`
} else {
  descuento = 0
  valorFinal = valorCompra
  mensaje = `El valor a pagar es $ ${valorFinal}, el descuento fue de: $ ${descuento}`
}

//Datos de salida
console.log(mensaje) */

/* 
Diseñar un programa que permita determinar si un estudiante aprobó o no una asignatura con tres notas, teniendo en cuenta que la primera nota tiene un valor del 20%, la segunda del 30%, la tercera del 50% y la nota mínima aprobatoria es de 3.  Verificar que en cada caso la nota ingresada sea válida, es decir que se encuentre en el intervalo 0 y 5.
*/


/* //Datos de entrada
let nota1 = 0, nota2 = 0, nota3 = 0, mensaje = ''

nota1 = Number(prompt('Ingrese el valor de la nota 1'))



//Operaciones
//Validar que la nota sea correcta
if (nota1 >= 0 && nota1 <= 5) {
  nota2 = Number(prompt('Ingrese el valor de la nota 2'))

  if (nota2 >= 0 && nota2 <= 5) {
    nota3 = Number(prompt('Ingrese el valor de la nota 3'))

    if (nota3 >= 0 && nota3 <= 5) {
      //Asignar el porcentaje de cada nota
      nota1 = nota1 * 0.2
      nota2 = nota2 * 0.3
      nota3 = nota3 * 0.5
      let notaFinal = nota1 + nota2 + nota3

      //Si aprobó o no
      if (notaFinal >= 3) {
        mensaje = 'Aprobó con: '+ notaFinal
      } else {
        mensaje = 'No Aprobó con: '+ notaFinal
      }

    } else {
      mensaje = 'Nota 3 Incorrecta'
    }
  } else {
    mensaje = 'Nota 2 Incorrecta'
  }
} else {
  mensaje = 'Nota 1 Incorrecta'
}

//Datos de salida
console.log(mensaje) */

