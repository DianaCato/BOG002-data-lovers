 export function crearPokemon (pokemon) {
    //Div general con toda la data (incluye dos tablas)
    const filtradosId = document.getElementById("filtradoConId");

    //remueve tablas de otras busquedas para mostrar nueva data
    while (filtradosId.hasChildNodes()) {
        filtradosId.removeChild(filtradosId.childNodes[0]);       
      }
    
    // Tabla con el nombre y la imagen
    const fichaPokedex = document.createElement("table");
    
    //Set de imagenes
    const imagenes = [];
    imagenes[0] = new Image();
    imagenes[0].src = pokemon.sprites.front_default;
    imagenes[1] = new Image();
    imagenes[1].src = pokemon.sprites.back_default;
    imagenes[2] = new Image();
    imagenes[2].src = pokemon.sprites.front_shiny;
    imagenes[3] = new Image();
    imagenes[3].src = pokemon.sprites.back_shiny;
    
    //fila con nombre
    const name = document.createElement("tr");
    const nameTitulo = document.createElement("h1")
    const datosName= document.createTextNode(pokemon.name);
    nameTitulo.appendChild(datosName);
    name.appendChild(nameTitulo);
    fichaPokedex.appendChild(name);


    //fila con el set de imagenes
    const filaImagen =document.createElement("tr");
    const lista = document.createElement("ul");
    for (let i=0; i<4; i++){
      const elementoLista = document.createElement ("li");
      elementoLista.appendChild(imagenes[i]);
      lista.appendChild(elementoLista);
    }
    filaImagen.appendChild(lista);
    fichaPokedex.appendChild(filaImagen);

    //introducimos la fichaPokedex al div general
    filtradosId.appendChild(fichaPokedex);

    //Creamos una segunda tabla con la data adicional
    const fichaPokedexInfo=document.createElement("table");
    
    //filas con título e info del tipo de pokemon
    const filaTipoTitle = document.createElement("tr");
    const tipoTitle= document.createElement("h3");
    tipoTitle.appendChild(document.createTextNode("Tipo"));
    filaTipoTitle.appendChild(tipoTitle);
    fichaPokedexInfo.appendChild(filaTipoTitle);
    const datosTipo = document.createElement("tr");
        
    // condicional para validar si son dos o solo un unico tipo
    let datosType= document.createElement("p");
    if (pokemon.types.length == 2){
       //const type = document.createElement("td");
       datosType.appendChild(document.createTextNode( pokemon.types[0].type.name)); 
       //type.appendChild(datosType); 
       //const type2 = document.createElement("td");
       let datosType2= document.createElement("p");
       datosType2.appendChild(document.createTextNode(pokemon.types[1].type.name));
       datosTipo.appendChild(datosType);
       datosTipo.appendChild(datosType2);
    }
    else 
    {
       //const type = document.createElement("td");
       datosType.appendChild(document.createTextNode( pokemon.types[0].type.name));
       //type.appendChild(datosType);
       datosTipo.appendChild(datosType);
    }
    fichaPokedexInfo.appendChild(datosTipo);

    //filas con título "Movimientos"
    const filaMovimientosTitle = document.createElement("tr");
    const movimientosTitle = document.createElement("h3");
    movimientosTitle.appendChild(document.createTextNode("Movimientos"));
    filaMovimientosTitle.appendChild(movimientosTitle);
    fichaPokedexInfo.appendChild(filaMovimientosTitle);

    //celdas con los movimientos
    const movimientos = document.createElement("tr");
    //const movimientosLista = document.createElement("td");
    //const movimientosLista2 = document.createElement("td");
    
    for (let i=1; i<10; i++){
      const cadaMovimiento = document.createElement("p");
      cadaMovimiento.appendChild(document.createTextNode(  i+". " + pokemon.moves[i].move.name ));
      movimientos.appendChild(cadaMovimiento);
    }
    
    //movimientos.appendChild(movimientosLista);

    /*for (let i=6; i<10; i++){
        const cadaMovimiento = document.createElement("p");
        cadaMovimiento.appendChild(document.createTextNode( i+". " + pokemon.moves[i].move.name ));
        movimientosLista2.appendChild(cadaMovimiento);
      }

    movimientos.appendChild(movimientosLista2);*/

    fichaPokedexInfo.appendChild(movimientos);

    //filas "Habilidades"
    const habilidades = document.createElement("tr");
    const tituloHabilidades= document.createElement("h3");
    const tituloText= document.createTextNode("Habilidades");
    tituloHabilidades.appendChild(tituloText);
    habilidades.appendChild(tituloHabilidades);
    fichaPokedexInfo.appendChild(habilidades);

    // iteración para crear cada una de las habilidades
    const listaHabilidades= document.createElement("tr");
    for(let i=0; i<pokemon.abilities.length; i++){
     const habilidad =document.createElement("p");
     habilidad.appendChild(document.createTextNode(pokemon.abilities[i].ability.name));
     listaHabilidades.appendChild(habilidad);
    }
    fichaPokedexInfo.appendChild(listaHabilidades);
    
    //introducimos la fichaPokedexInnfo al div general
    filtradosId.appendChild(fichaPokedexInfo);  
    }

