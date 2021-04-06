// función para desplegar las secciones según la interfaz solicitada por el usuario

function views(start, tipe, name, pokedex,footer){

  document.getElementById("wellcome").style.display='none';
  document.getElementById("header").style.display='flex';
  document.getElementById("start").style.display= start;
  document.getElementById("tipe").style.display= tipe ;
  document.getElementById("name").style.display= name ;
  document.getElementById("pokedex").style.display= pokedex ;
  document.getElementById("footer").style.display= footer;
  }
 
  //función para cambiar el color del footer según la interfaz en la que se encuentre el usuario

  function colorFooter(color){
    document.getElementById("footer").style.backgroundColor = color;
  }
  
  //función para guardar el nombre del usuario que ingresa
   
  function nameUser () {
    let nicknameMaestro = document.getElementById('nickname').value;
    document.getElementById('nameUser').innerHTML= nicknameMaestro;
  }
  
  
 
if (typeof views == 'function' && typeof colorFooter == 'function'){
  document.getElementById('nickname').addEventListener ('keyup',nameUser);
}