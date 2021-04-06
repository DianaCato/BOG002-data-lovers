import {types, sortData} from './data.js';
import data from './data/pokemon/pokemon.js';


// Array con los argumentos para llamar la función de insertar tipos

const tiposPokemon = [["HADA", "fairy","#FAC8C0","#3B2F2D"],["LUCHA", "fighting","#CC0003","#4E0002"],["FANTASMA", "ghost","#6111D1","#200645"],["HIELO", "ice","#C6FFF5","#242E4F"],["NORMAL", "normal","#B7C48B", "#3E422F"],["ACERO", "steel","#698085","#2C3638"],["BICHO", "bug","#92BB38","#2E3B12"],["DRAGÓN", "dragon","#6636BD","#241342"],["ELÉCTRICO", "electric","#FFFF00","#828207"],["AGUA", "water","#1A1FA3","#101363"],["VOLADOR", "flying","#007C99","#00232B"],["PLANTA", "grass","#53AE33","#285418"],["PSÍQUICO", "psychic","#ED556A","#732933"],["ROCA", "rock","#9E8B6E","#302B22"],["FUEGO", "fire","#FA610A","#3B1702"],["SINIESTRO", "dark","#4D394B","#332632"],["TIERRA", "ground","#99721B","#2B2008"],["VENENO", "poison","#7A7C99","#23232B"]];

/*Función para pintar data en la segunda interfaz (tipo pokemon), envía imagen, nombre y número de los pokemones separados por tipo
    creando una lista en la que cada tipo tiene su propio color para identificarlo */

function insertarTipos(tipo,type, colorBorde,colorLetra) {  //parametros de entrada tipo(nombre de la cateforia); type(categoria de la data); colorBorde y colorLetra para estilos.       
    const newDivTipo = document.createElement("div");             // div exportado con toda la data extraida y organizada
    const newH2 =document.createElement ("h2");
    newH2.style.color = colorLetra;                                     //titulo de la categoria con su estilo correspondiente.
    const newTextTipo = document.createTextNode(tipo);
    const newHr = document.createElement("hr");
    newHr.style.backgroundColor = colorBorde;
    const newDivImag = document.createElement ("ul");                    //lista no ordenada en la cual se incluye cada pokemon de la categoria
    newH2.appendChild(newTextTipo);
    newDivTipo.appendChild(newH2);
    newDivTipo.appendChild(newHr);
    newDivTipo.appendChild(newDivImag);                                        //taejeta con con nombre, imagen y número del pokemon

    
    for (let i = 0; i < types(type).length; i++) {                                      //for para recorrer la data y encontrar la información solicitada
     
        const newPokemonType = document.createElement("li");
        newPokemonType.style.color = colorLetra;
        const newNamePokemon = document.createTextNode(types(type)[i][0] + "  " + types(type)[i][1]);        //se crean los elementos y nodos de texto para mostrar la data
        const imagen = new Image();
        imagen.src = data.pokemon[parseInt(types(type)[i][0]-1)].img;                                       //se muestra imagen, nombre y número  
        imagen.style.borderColor= colorBorde;                                                               //se emplean los argumentos enviados desde el array tiposPokemon
        newPokemonType.appendChild(imagen);
        newPokemonType.appendChild(newNamePokemon);
        newDivImag.appendChild(newPokemonType); 
       
    }
     return newDivTipo;                                                                          //retorna un div con  la data y estilos solicitados
  }

//funcion para enviar la data segun el orden solicitado (A-Z)  
function orderListTypeA (){
    const dataTipos = sortData(tiposPokemon, "A");
    const remover = document.querySelector("#carrouselType");
    while (remover.firstChild) {                                                            //Se elimina el div existente en el nodo predeterminado para anidar la nueva data
      remover.removeChild(remover.firstChild);
    }
    for (let i=0; i<dataTipos.length; i++){
      document.getElementById("carrouselType").appendChild(insertarTipos(dataTipos[i][0],dataTipos[i][1],dataTipos[i][2],dataTipos[i][3]));   //Pinta la nueva data
    }
    } 
    
//funcion para enviar la data segun el orden solicitado (Z-A)
function orderListTypeZ (){
    const parametrosCrearTipos = sortData(tiposPokemon, "Z");
    const remover = document.querySelector("#carrouselType");
    while (remover.firstChild) {
      remover.removeChild(remover.firstChild);
    }
    for (let i=0; i<parametrosCrearTipos.length; i++){
        document.getElementById("carrouselType").appendChild(insertarTipos(parametrosCrearTipos[i][0],parametrosCrearTipos[i][1],parametrosCrearTipos[i][2],parametrosCrearTipos[i][3]));
    }
}  
  
export {tiposPokemon, insertarTipos, orderListTypeA, orderListTypeZ };
