import data from './data/pokemon/pokemon.js';

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

    
    for (let i = 0; i < data.pokemon.length; i++) {                                      //for para recorrer la data y encontrar la información solicitada
      if (data.pokemon[i].type[0] == type || data.pokemon[i].type[1] == type ) {
        const newPokemonType = document.createElement("li");
        newPokemonType.style.color = colorLetra;
        const newNamePokemon = document.createTextNode(data.pokemon[i].num + "  " + data.pokemon[i].name);
        const imagen = new Image();
        imagen.src = data.pokemon[i].img;
        imagen.style.borderColor= colorBorde;
        //añade texto al div creado.
        newPokemonType.appendChild(imagen);
        newPokemonType.appendChild(newNamePokemon);
        // añade el elemento creado y su contenido al DOM
        newDivImag.appendChild(newPokemonType); 
      } 
    }
     return newDivTipo;
  }
  
export {insertarTipos};
