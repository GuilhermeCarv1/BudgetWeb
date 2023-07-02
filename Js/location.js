var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    
    if (map === undefined) {
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);

    } else {
        map.remove();
        map = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 15);

    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)  // onde for carregado o codigo 
        .bindPopup('Estou aqui!')
        
        .openPopup();

    L.marker([41.381170177078886 , -8.762916359387342]).addTo(map)     // onde fica o escritorio
    .bindPopup('Escritorio')
    .openPopup();


    var latlngs = [
        [41.381170177078886 , -8.762916359387342],
        [pos.coords.latitude,pos.coords.longitude]
    ];
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);

    //Calcula distancia
    function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
        const R = 6371000; // raio da Terra em metros
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // distância em metros
        const k = d / 1000 // distância em km
        return d;
    } 

    function deg2rad(deg) {
    return deg * (Math.PI / 180);
    }

    const distance = getDistanceFromLatLonInMeters(41.39560596361315,-8.773997373124802,pos.coords.latitude, pos.coords.longitude);
    console.log(distance);
    document.getElementById("Distancia").textContent = distance.toFixed(2);
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
});

  // Validador dos campos de txt


function validadorEmail(id){
    var re = /\S+@\S+\.\S+/
    if((re.test(email.value) != true) && (email.value.length == '')){
        respo("email", "red")
    }else{
        respo("email", "green")
    }
}
function validadorName(id){
    if ((nome.value.length < 3 ) || (nome.value.length > 13)  && (nome.value.length == '')){
        respo("nome", "red")
    } else {
        respo("nome", "green")
    }
}
function validadorApelido(id){
    if ((apelido.value.length < 2 ) || (apelido.value.length > 13)  && (apelido.value.length == '')){
        respo("apelido", "red")
    } else {
        respo("apelido", "green")
    }
}
function validadorNunber(id){
    var numeros = /([0-9])/;
    var alfabeto = /([a-zA-Z])/;
    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if((numeros.test(number.value) == true) && (alfabeto.test(number.value) != true) && (chEspeciais.test(number.value) != true)){            
        respo("number", "green")

     } else {
         respo("number", "red")
     }
}
function validadorDate(id){
    var numeros = /([0-9])/;
    var alfabeto = /([a-zA-Z])/;
    var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    if((numeros.test(date.value) == true) && (alfabeto.test(date.value) != true) && (chEspeciais.test(date.value) != true)){            
        respo("date", "green")

     } else {
         respo("date", "red")
     }
}
function validadorMotivo(id){
    if ((motivo.value.length < 2 ) || (motivo.value.length > 250) || (motivo.value.length == '')){
        respo("motivo", "red")
    } else {
        respo("motivo", "green")
    }
}
function enviar(){
    validadorName()
    validadorApelido()
    validadorNunber()
    validadorDate()
    validadorEmail()
    validadorMotivo()
}
function respo(a , c){              // Muda a cor do campo
    if(c == "red"){
        document.getElementById(a).style.border = "2px solid red";
    }else{
        document.getElementById(a).style.border = "3px solid green";
    }
}