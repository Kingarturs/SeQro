var ubicacion = {
    
    lat: 0,
    lng: 0,
    
};

var ubicacionActual = {
    
    lat: 0,
    lng: 0,
    
};

var marcador;

navigator.geolocation.getCurrentPosition(function(position){
    
    ubicacion.lat = position.coords.latitude;
    ubicacionActual.lat = position.coords.latitude;
    
    ubicacion.lng = position.coords.longitude;
    ubicacionActual.lng = position.coords.longitude;
    mostrarMapa();
    añadirMarcador();
    
});


function añadirMarcador(){
    
    var marcador = new google.maps.Marker({position: ubicacionActual, map: mapaAñadir});
    
    google.maps.event.addListener(mapaAñadir, "click", function(event) {
        
        ubicacionActual.lat = event.latLng.lat();
        ubicacionActual.lng = event.latLng.lng();
        marcador.setPosition(ubicacionActual);
        console.log(ubicacionActual.lat +'  '+ ubicacionActual.lng);
        
    });
    
    
}

function mostrarMapa(){
    
    mapaAñadir = new google.maps.Map(document.getElementById('mapaAñadir'), {
        center: ubicacionActual,
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
    
    google.maps.event.addListener(mapaAñadir, "dragend", function(event) {
        
        $(".alert").alert('close');
        
    });
    
    setTimeout(function(){
        
        $(".alert").alert('close');
        
    }, 10000);
    
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

function obtenerUbicacionActual(){
    
    navigator.geolocation.getCurrentPosition(function(position){
        
        ubicacionActual.lat = position.coords.latitude;    
        ubicacionActual.lng = position.coords.longitude;
        mostrarMapa();
        añadirMarcador();
        
    });
    
}

function mostrarBusqueda(){
    
    $(".contenedor")[0].style.display = "none";
    $(".busqueda")[0].style.display = "flex";
    busqueda();
    
}

function mostrarAñadir(){
    
    $(".busqueda")[0].style.display = "none";
    $(".contenedor")[0].style.display = "flex";
    
}

function setUbicacion(ubicacion){
    
    if(ubicacion == 'ubicacionActual'){
        
        obtenerUbicacionActual();
        $(".select")[0].innerHTML = "Ubicación marcada en el mapa";
        mostrarAñadir();
        
    } 
    
}

function busqueda(){
    
    $("#busqueda").on("change", function() { 
        busqueda = document.getElementById("busqueda").value;
        $.ajax({
        
            url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+busqueda+'&key=AIzaSyCaUsFIg2fvx0Y_uSpMq1opvveg6tt5SZ0',
            type: 'get',
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            },
            success: function(data){
        
                console.log(data);
        
            },
            failure: function(data){
        
                alert("failure");
        
            }
        
        });
        // var http_request;
        // http_request = new XMLHttpRequest();
        // http_request.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {

        //         console.log(http_request.responseText);
                
        //     }
        // };
        // http_request.open("GET", 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+busqueda+'&key=AIzaSyCaUsFIg2fvx0Y_uSpMq1opvveg6tt5SZ0');
        // http_request.setRequestHeader("Content-Type", "application/json");
        // http_request.send();
    }); 
    
}

