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
  //cuando el valor es valido se agrega al arreglo con push 
amigos.push(nombreAmigo);
console.log(nombreAmigo);
  //aqui se llama a la funcion nombre para que despues de mandar el nombre al arreglo de vacie 
limpiarNombre();
  //se llama a la funcion para que se agrege un nuevo elemento y se observe en la pantalla
recogerNombres();
}

function recogerNombres(){
  //obtner el elemento de la lista 
    let listaAmigos = document.getElementById('listaAmigos');
  //limpiar la lista que ya existe 
    listaAmigos.innerHTML="";
  //aqui se crean los elementos del arreglo y los muestra en forma de lista 
    for (let i=0; i<amigos.length; i++){
       let li= document.createElement("li");
       li.textContent= amigos[i];
      //se crean nuevos elementos a la lista
       listaAmigos.appendChild(li);
    }
}
//se crea un funcion para sortear amigos 
function sortearAmigo(){
  //validar que el arreglo no este vacio 
    if (amigos.length===0){
        alert("no hay amigos para sortear,ingresa los nombres");
    }
  //crear el indice aleatorio 
    let nombreGenerado = Math.floor(Math.random()*amigos.length);
   //obtener el nombre que se sorteo
    let amigoSorteado =amigos[nombreGenerado];
    let resultado=document.getElementById('resultado');
  //visualizar el resultado 
    resultado.innerHTML="tu amigo secreto es:"+ amigoSorteado;
}

function limpiarNombre(){
    document.querySelector('#amigo').value='';
}
agregarAmigo();
sortearAmigo();
