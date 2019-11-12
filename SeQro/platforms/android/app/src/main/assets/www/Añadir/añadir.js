var ubicacion = {lat:20.704118 , lng:-100.444068};

function mostrarMapa(){

    mapaAñadir = new google.maps.Map(document.getElementById('mapaAñadir'), {
        center: ubicacion,
        zoom: 15, /*https://developers.google.com/maps/documentation/javascript/tutorial#zoom-levels*/
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'negrito :)']
        },
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
    });

}

function hideBox(){

    let box = document.getElementsByClassName("añadir")[0];
    box.style.display = "none";
    
    let boxSmall = document.getElementsByClassName("añadir")[1];
    boxSmall.style.display = "flex";

}

function showBox(){

    let box = document.getElementsByClassName("añadir")[0];
    box.style.display = "flex";
    
    let boxSmall = document.getElementsByClassName("añadir")[1];
    boxSmall.style.display = "none";

}

