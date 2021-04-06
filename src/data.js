import data from './data/pokemon/pokemon.js';

// función para crear array por el tipo de pokemon solicitado 
export function types (tipo) {
  let pokemonesPorTipo = [];
  let encontrarPokemonPorTipo = data.pokemon.filter(buscarPorTipo);

  function buscarPorTipo (element){
    return element.type[0] == tipo || element.type[1] == tipo;
  }
   
  pokemonesPorTipo = encontrarPokemonPorTipo.map(function (current){
    return [current.num, current.name]
  })
  return pokemonesPorTipo;
}

export function sortData(data, orden){
  if (orden == "A")
    data.sort();
  else if (orden == "Z")
  data.sort((unPokemon, otroPokemon) => otroPokemon[0].localeCompare(unPokemon[0]));
  else
  data = data;
  return data;
}

export function filterWithLetter (data, letra){
  let filtrado=[];
  let arrayFiltrado = data.pokemon.filter(buscarPorLetra);
    filtrado = arrayFiltrado.map(function (current){
      return [current.name, current.num, current.img];
    });

    function buscarPorLetra (element){
      return element.name.indexOf(letra) == 0;
    }  
  return filtrado;  
}
    
