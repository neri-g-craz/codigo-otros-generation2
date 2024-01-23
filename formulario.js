var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}



function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados");
if (lista){



var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var span = document.createElement("span");
var input = document.createElement("input");
var espacio = document.createElement("br");
span.textContent = descripcion + ": ";
input.value = valor;
elementoLista.appendChild(span);
elementoLista.appendChild(input);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);
 
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// // this.parentNode.style.display = 'none';
elementoLista.remove();
  }
}

  else {
    console.error("El elemento lista-de-invitados no se encuentra en el documento.")
  }
  
}
// Después de cargar el documento
document.addEventListener("DOMContentLoaded", function() {
  var botonEliminarInicial = document.getElementById("boton-eliminar-inicial");
  botonEliminarInicial.style.display = "none";
});