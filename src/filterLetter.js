import {filterWithLetter} from './data.js';


function filtrarPorLetra () {                                         
  const pintarPokemon = document.getElementById("pokemonesFiltrados");                 // div en la interfaz para mostrar el resultado del filtro
  const letraBusqueda =  document.getElementById("letra").value;                      //parametro Letra para filtrar, obtenido del input en la interfaz 
  fetch ('./data/pokemon/pokemon.json')
  .then (response  => response.json())                                                 //la data se llama desde el archivo .json
  .then (function (data){
    
    const pokemonesFiltrados = filterWithLetter(data,letraBusqueda);
    const cuadroPokemon= document.createElement("div");
    if (pintarPokemon.hasChildNodes()) {
        pintarPokemon.removeChild(pintarPokemon.childNodes[0]);                            //remueve los div de otras busquedas para mostrar solo la ultima busqueda hecha por el ususario
    }
    
    pokemonesFiltrados.forEach(pokemon => {                                               //for para recorrer la data y encontrar la información solicitada
        const insertarPokemon = document.createElement("div");
        const namePokemon = document.createTextNode(pokemon[0]);
        const numPokemon = document.createTextNode(pokemon[1]+ "  ");
        const imagenPokemon = new Image();
        imagenPokemon.src = pokemon[2];
        //añade texto al div creado.
        insertarPokemon.appendChild(imagenPokemon);
        insertarPokemon.appendChild(numPokemon);
        insertarPokemon.appendChild(namePokemon);
        // añade el elemento creado y su contenido al DOM
        cuadroPokemon.appendChild(insertarPokemon); 
        pintarPokemon.appendChild(cuadroPokemon);    
    });                 
  })
}
  

export {filtrarPorLetra};
