'use strict'

let listaCoders = ['Abraham','Alejandra','Ángel','Antonio','Arturo','Carla','Clara','Cristian Martín','Cristian Martinez',
'Eduardo','Ezequiel','Francisco','Hector','Iñigo','Isidro','Jaime','Jairo','Javier','Juan Carlos','Julián','Karen',
'Luis','Miguel','Paula','Pablo','Silvia'];

let mensajes = ["Pentakill!!!",
                "Mortal....... si sigues así te quedarás sin amigos",
                "PARA PARA PARA!!!",
                "Al final me tocará trabajar.......",
                "DEJA A UNO POR LO MENOS!!!",
                "Sabía que me tocaría arreglar este desastre..."];

let cuentaClick = 0;







cargaPagina();
popUp();
botonMatar();
botonRevivir();








function mostrarLista(){

    document.querySelector('#lista').innerHTML = listaCoders.join('<br>');

    console.log("Lista mostrada");

}

function generaNumeroAleatorio(array){

    let maximo = array.length + 1;
    let minimo = 1;
    let numAleatorio = parseInt(Math.random() * (maximo - minimo) + minimo); 

    console.log("El número aleatorio es: "+numAleatorio);

    return numAleatorio;
    
} 

function matar(){
    
    let muerto = generaNumeroAleatorio(listaCoders);

    if(muerto == listaCoders.length){

        muerto = 0;

        cuentaClick++;

        amenaza();

        
        console.log("Al no poder borrar la ultima posicion borramos la primera");

    }

    switch (listaCoders.length) {

        case 1:

            listaCoders = [];

            mostrarLista();

            cuentaClick++;

            amenaza();

            console.log("Al ser el último de la lista vaciamos el array");
            
            
            break;

        default:

            let elegido=listaCoders.splice(muerto,1);

            mostrarLista();

            document.querySelector("#elegido").innerHTML = elegido;
            document.querySelector("#elegido").style = "visibility:visible";
            
            cuentaClick++;

            amenaza();

            console.log("Matamos al numero "+muerto);

            break;
    
                
    }

    if(listaCoders.length == 0){

        
        todosMuertos();
        

    }

    

    console.log("ACTUALIZADO: "+listaCoders);

}

function revivir(){

    if(listaCoders.length == 0){

        location.reload();

    }

}


function cargaPagina(){

    window.addEventListener("load",mostrarLista);

    console.log("Mostramos lista al cargar la pagina");

}

function botonPulsadoMatar(){

    document.querySelector("#matar").style.cssText = "background: url(img/boton02.png);"
                                                    +"background-size: 100%;"
                                                    +"height: 60px;"
                                                    +"width: 300px;"
                                                    +"border: 0;"
                                                    +"background-color: transparent;"
                                                    +"background-repeat:no-repeat;"
                                                    +"background-position:center;"
                                                    +"cursor: pointer;"
                                                    +"outline: 0;";

    console.log("Botón de matar pulsado");

}

function botonSinPulsarMatar(){

    document.querySelector("#matar").style.cssText = "background: url(img/boton01.png);"
                                                    +"background-size: 100%;"
                                                    +"height: 60px;"
                                                    +"width: 300px;"
                                                    +"border: 0;"
                                                    +"background-color: transparent;"
                                                    +"background-repeat:no-repeat;"
                                                    +"background-position:center;"
                                                    +"cursor: pointer;"
                                                    +"outline: 0;";
    console.log("Botón de matar sin pulsar");

}

function botonPulsadoRevivir(){

    document.querySelector("#revivir").style.cssText = "background: url(img/boton04.png);"
                                                    +"background-size: 100%;"
                                                    +"height: 60px;"
                                                    +"width: 300px;"
                                                    +"border: 0;"
                                                    +"background-color: transparent;"
                                                    +"background-repeat:no-repeat;"
                                                    +"background-position:center;"
                                                    +"cursor: pointer;"
                                                    +"outline: 0;";
    console.log("Botón de revivir pulsado");

}

function botonSinPulsarRevivir(){

    document.querySelector("#revivir").style.cssText = "background: url(img/boton03.png);"
                                                    +"background-size: 100%;"
                                                    +"height: 60px;"
                                                    +"width: 300px;"
                                                    +"border: 0;"
                                                    +"background-color: transparent;"
                                                    +"background-repeat:no-repeat;"
                                                    +"background-position:center;"
                                                    +"cursor: pointer;"
                                                    +"outline: 0;";
    console.log("Botón de revivir sin pulsar");

}

function botonMatar(){

    
    document.querySelector("#matar").addEventListener("mousedown",botonPulsadoMatar);
    document.querySelector("#matar").addEventListener("mouseup",botonSinPulsarMatar);
    document.querySelector("#matar").addEventListener("click",matar);


    

}


function botonRevivir(){

    document.querySelector("#revivir").addEventListener("click",revivir);
    document.querySelector("#revivir").addEventListener("mousedown",botonPulsadoRevivir);
    document.querySelector("#revivir").addEventListener("mouseup",botonSinPulsarRevivir);


}

function popUp(){

    window.addEventListener("load",function(){

    
        setTimeout(function(){
        
            document.querySelector("#mensaje").style = "visibility:visible;";
        
        },700);
        
    
    });

    console.log("Se muestra mensaje de bienvenida");

}

function amenaza(){

    switch (cuentaClick) {
        case 5:
            document.querySelector("#mensaje").innerHTML = mensajes[0];
            console.log("Cambia el mensaje del nigromante");

            break;
        case 10:
            document.querySelector("#mensaje").innerHTML = mensajes[1];
            console.log("Cambia el mensaje del nigromante");

            break;
        case 15:
            document.querySelector("#mensaje").innerHTML = mensajes[2];
            console.log("Cambia el mensaje del nigromante");

            break;
        case 20:
            document.querySelector("#mensaje").innerHTML = mensajes[3];
            console.log("Cambia el mensaje del nigromante");

            break;
        case 25:
            document.querySelector("#mensaje").innerHTML = mensajes[4];
            console.log("Cambia el mensaje del nigromante");
    
             break;
      
    }

}

function todosMuertos(){

    document.querySelector("#nigromante").style = "display:inline";
    document.querySelector("#elegido").style = "display:none";
    document.querySelector("#mensaje").innerHTML = mensajes[5];

    console.log("Con la lista vacia aparece el nigromante");

}





