import {tiposPokemon, insertarTipos, orderListTypeA, orderListTypeZ} from './typePokemon.js';
import {filtrarPorLetra} from './filterLetter.js';
import {crearPokemon} from './pokedex.js';


// Se llama la función para insertar los pokemones en la interfaz dos de manera predeterminada
for (let i=0; i< tiposPokemon.length; i++){
  document.getElementById("carrouselType").appendChild(insertarTipos(tiposPokemon[i][0],tiposPokemon[i][1],tiposPokemon[i][2],tiposPokemon[i][3]));
  }

// seleccionar el orden alfabetico para el tipo de pokemon (interfaz dos)

const orderAz=document.getElementById("orderA");
orderAz.addEventListener("click", orderListTypeA);
const orderZa=document.getElementById("orderZ");
orderZa.addEventListener("click",orderListTypeZ); 
  

//filtrado con letra
filtrarPorLetra();
const botonFiltrado = document.getElementById("filtro");
botonFiltrado.addEventListener('click', filtrarPorLetra);


//pokedex
const idPokedex = document.getElementById("idPokedex")
const botonPokedex = document.getElementById("buttonPokedex")
botonPokedex.addEventListener("click", consultarPokemon)

function consultarPokemon (){
  const id= idPokedex.value
  let api ='https://pokeapi.co/api/v2/pokemon/' + id;
  fetch (api)
      .then (function (response){
        response.json()
      .then (function (pokemon) {
          crearPokemon(pokemon); 
      })
      })
      .catch (err => console.log (err))
}



