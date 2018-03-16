var imgAnt = "";
var escala = 0;
var orlaWidth = 780;
var orlaHeight = 595;
var orlaImagenWidth = 284;
var orlaImagenHeight = 595;
var orlaFotosWidth = 470;
var orlaFotosHeight = 595;
var orlaFotoWidth = 47;
var orlaFotoHeight = 61;
var carruselImgCarrusel = 700;
function ini() {
    calcularEscala();
//    alert("ventana ancho: " + window.innerWidth + "\n" +
//        "ventana alto: " + window.innerHeight + "\n" +
//        "escala: " + escala);
    asignarDimensiones();
    document.getElementById("creditos").innerHTML = creditosTexto;
}
function calcularEscala() { 
    if (window.innerWidth / orlaWidth > window.innerHeight / orlaHeight) { escala = window.innerHeight / orlaHeight; }
    else { escala = window.innerWidth / orlaWidth; }
    if (escala <= 1) { escala = 1; }
}
function asignarDimensiones(){
    changecss('.Orla', 'width', escala * orlaWidth+'px');
    changecss('.Orla', 'height', escala * orlaHeight+'px');
    changecss('.orlaImagen', 'width', escala * orlaImagenWidth+'px');
    changecss('.orlaImagen', 'height', escala * orlaImagenHeight+'px');
    changecss('.fotos', 'width', escala * orlaFotosWidth+'px');
    changecss('.fotos', 'height', escala * orlaFotosHeight+'px');
    changecss('.foto', 'width', escala * orlaFotoWidth+'px');
    changecss('.foto', 'height', escala * orlaFotoHeight + 'px');
    changecss('.foto', 'background-size', escala * orlaFotoWidth + 'px'+' Auto');
}
function ponerFoto2018(o) {
 //   alert("Hola " + o.id);
    imgAnt = o.style.backgroundImage;

    if (o.children['0'].innerText) {
//        alert(o.children['0'].innerText)
        o.style.backgroundImage = o.children['0'].innerText;
 //      o.style.backgroundImage = "url(o.children['0'].innerText)";
    }
//        o.style.backgroundImage = '"'+o.children['0'].innerText+'"';
    return;
}
function ponerFoto2018R(o) {
 //   alert("Hola " + o.id);
    if(o.children[0].style.display == "none"){
     	o.children[0].style.display = "inline";
    }
    else{
 	o.children[0].style.display = "none";
    }
    return;
}

function ponerFoto1968(o) {
    o.style.backgroundImage = imgAnt;

    return;
}

function ponerFoto1968R(o) {
    if(o.children[0].style.display == "none"){
     	o.children[0].style.display = "inline";
    }
    else{
 	o.children[0].style.display = "none";
    }
    return;
}
function mostrarDos(o) {
    if (o.children[0].style.display = "none") {
        o.children[0].style.display = "inline"
    }
    else {
        o.children[0].style.display = "none"
    }
    if (event.clientY < window.innerHeight * .2) {
        o.children[0].style.top = "0px"
    }
}
function ocultarDos(o) {
    o.style.display = "none";

}

function mostrarCarrusel() {
     //mostrar
   document.getElementById('miMarco').style.display = 'inline';
    document.getElementById('btCerrar').style.display = 'inline';
    var alto;
    //var unidades
    alto = window.nombreIframeCarrusel.document.getElementById("carruselDiv").offsetHeight
    //aplicar escala
 //   alert(alto +"\n"+escala+"\n" +alto * escala);
    window.nombreIframeCarrusel.document.getElementById("carruselDiv").style.height = (alto * escala) + "px"
}

function ocultarCarrusel(o) {
    document.getElementById('miMarco').style.display = 'none';
    document.getElementById(o.id).style.display = 'none';
}