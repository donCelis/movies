(function () {
  //DOM -> document object model
  //Sirve para controlar la vista del cliente (navegador)
  //Paso 1 -> Capturar los elementos del DOM
  //todos los elementos del dom capturados son objetos({}) o arreglos([])
  //por etiqueta
  let p = document.getElementsByTagName('p') //me duelve un arreglo
  c(p)
  //por clase
  let classTag = document.getElementsByClassName('fas') //me duelve un arreglo
  c(classTag)
  //por id
  let idTag = document.getElementById('movie') //me duelve una estructura html
  c(idTag)
  //por query -> necesito decirle que tipo de atributo estoy capturando
  //let queryTag = document.querySelector('.mainMenu p')
  let queryTags = document.querySelectorAll('.fas')
  //c(queryTag)

  //Paso 2 ->interactuamos con los elementos caputarados
  //textContent -> escribe texto en elemento capturado
  //queryTag.textContent = 'multimedia'
  //innerHTML -> escribir html en el documento
  /* let menu = document.querySelector('.mainMenu')
  menu.innerHTML = `
  <a href="#">
    <i class="fas fa-star"></i>
    <p>feature</p>
  </a>
  <a href="#">
    <i class="fab fa-youtube-square"></i>
    <p>tv series</p>
  </a>
  <a href="#">
    <i class="fas fa-film"></i>
    <p>movie</p>
  </a>
  <a href="#">
    <i class="fas fa-grin"></i>
    <p>variety</p>
  </a>
  <a href="#">
    <i class="fas fa-comment-dots"></i>
    <p>community</p>
  </a>
  ` */
  
  //Como creamos nodos en la vista
  //createElement -> permite crear etiquetas en js
  let cajaJs = document.createElement('section')
  //createTextNode -> crear texto para un nodo
  let texto = document.createTextNode('Hola Mundo desde Js')
  //appendChild -> anidar elementos creados desde js
  cajaJs.appendChild(texto)


  let prueba = document.querySelector('.prueba')
  //Modificar atributos
  prueba.id = 'cajaJs'
  prueba.className = 'cajaJs'

  //setAttribute('atributo', 'valor') -> modifica o crea atributos
  prueba.setAttribute('id','nuevoId')
  prueba.setAttribute('data-texto','Hola Mundo')

  //getAttribute('atributo') -> me devuelve el valor del atributo
  c(prueba.getAttribute('class'))
  c(prueba.getAttribute('data-texto'))

  //Escoger un diseño - http://collectui.com/challenges/user-profile
  //Hacer el html y el css
  //para el jueves
  //el viernes programamos

}(c = (e) => { console.log(e) }))