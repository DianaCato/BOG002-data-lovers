import {insertarTipos} from './typePokemon.js';

/*import data from './data/pokemon/pokemon.js';*/



const tiposPokemon = [insertarTipos("ACERO", "steel","#698085","#2C3638"),insertarTipos("AGUA", "water","#1A1FA3","#101363"),insertarTipos("BICHO", "bug","#92BB38","#2E3B12"),insertarTipos("DRAGÓN", "dragon","#6636BD","#241342"),insertarTipos("ELÉCTRICO", "electric","#FFFF00","#828207"),insertarTipos("FANTASMA", "ghost","#6111D1","#200645"),insertarTipos("FUEGO", "fire","#FA610A","#3B1702"),insertarTipos("HADA", "fairy","#FAC8C0","#3B2F2D"), insertarTipos("HIELO", "ice","#C6FFF5","#242E4F"),insertarTipos("LUCHA", "fighting","#CC0003","#4E0002"),insertarTipos("NORMAL", "normal","#B7C48B", "#3E422F"),insertarTipos("PLANTA", "grass","#53AE33","#285418"),insertarTipos("PSÍQUICO", "psychic","#ED556A","#732933"),insertarTipos("ROCA", "rock","#9E8B6E","#302B22"), insertarTipos("SINIESTRO", "dark","#4D394B","#332632"), insertarTipos("TIERRA", "ground","#99721B","#2B2008"), insertarTipos("VENENO", "poison","#7A7C99","#23232B"),insertarTipos("VOLADOR", "flying","#007C99","#00232B")];

for (let i=0; i< tiposPokemon.length; i++){
  document.getElementById("carrouselType").appendChild(tiposPokemon[i]);
}
