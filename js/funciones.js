(function(){
//Funciones -> Bloques de código que son programados para ser utilizados varias veces
//Son fragmetos de código que voy a reutilzar
//Tambien son llamadas metodos

//Estructura de una función
//Crear la función
//Podemos crear una x cantidad de argumentos en una función
//Los argumentos solo existen dentro de la función
function nombreUsuario (nombre, apellido){
  c(`El usuario registrado es ${nombre} ${apellido}`)
}

//Invocar la función
//Al invocar la función debo pasarle la misma cantidad de argumentos que fueron creados
//Paso los valores de los argumentos
nombreUsuario('Danny','Celis')
nombreUsuario('Jorge','Hernandez')
nombreUsuario('Daniela','Lopez')

//Segunda forma de llamar una función
//Puedo sostener el valor de una función en una variable
let suma = function(n1,n2){
  c(n1+n2)
}
suma(1,3)

//Funciones flecha
//Se utilizan en funciones de tipo variable
let mayorEdad = (edad)=>{
  let mensaje = ''
  if (edad >= 18) {
    mensaje = 'Es mayor de edad'
  } else {
    mensaje = 'Es menor de edad'
  }
  //Solo puedo retornar un solo valor
  //Retornar no es devolver la variable, es devolver su valor
  return mensaje
}

dw(mayorEdad(20))
c(mayorEdad(20))


//SCOPE
//Variables locales y globales
let texto = 'Multimedia'
function saludo(){
  let texto = 'Hola Mundo'
  function mensaje(){
    c(texto)
  }  
  mensaje()
}
c(texto)
saludo()


//Funciones constructoras -> metodos


//Funciones autoinvocadas
//Se ejecutan al momento de creadas
//Nos ayudan a proteger nuestro código
//(function(){}())
//Metodos de la función
}(
    c = function(e){
      console.log(e)
    },
    dw = function(e){
      document.write(e)
    }
  )
)