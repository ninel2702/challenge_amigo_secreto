//declarar la variable de los amigos primer commit del git 
let amigos=[];
//esta es la funcion de agregar amigo 
function agregarAmigo(){
  //Capturar el valor del campo de entrada
let nombreAmigo=(document.getElementById('amigo').value);
  //esta es para validar cuando el campo este vacio
  if (nombreAmigo === ""){
    alert("por favor ingresa un nombre valido");
    return;
}
  amigos.push(nombreAmigo);
console.log(nombreAmigo);
  //aqui se llama a la funcion nombre para que despues de mandar el nombre al arreglo de vacie 
limpiarNombre();
}
function limpiarNombre(){
    document.querySelector('#amigo').value='';
}
agregarAmigo();
