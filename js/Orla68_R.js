var imgAnt = "";
var escala = 0;
var orlaWidth = 780;
//var orlaWidth = 890;
var orlaHeight = 595;
var orlaImagenWidth = 284;
var orlaImagenHeight = 595;
var orlaFotosWidth = 470;
var orlaFotosHeight = 595;
var orlaFotoWidth = 47;
var orlaFotoHeight = 61;
var carruselImgCarrusel = 700;
var XOrlaWidth = 110;


function ini() {
    calcularEscala();
    //    alert("ventana ancho: " + window.innerWidth + "\n" +
    //        "ventana alto: " + window.innerHeight + "\n" +
    //        "escala: " + escala);
    asignarDimensiones();
    document.getElementById("creditos").innerHTML = creditosTexto;
    document.getElementById("orlaFotos").style.visibility = "visible";

    rellenarMenuEventos(); //Se encuentra en 'eventos/js/'
}
function calcularEscala() {
    if (window.innerWidth / orlaWidth > window.innerHeight / orlaHeight) { escala = window.innerHeight / orlaHeight; }
    else { escala = window.innerWidth / orlaWidth; }
    if (escala <= 1) { escala = 1; }
}
function asignarDimensiones() {

    changecss('.Orla', 'width', escala * orlaWidth + 'px');
    changecss('.Orla', 'height', escala * orlaHeight + 'px');
    changecss('.orlaImagen', 'width', escala * orlaImagenWidth + 'px');
    changecss('.orlaImagen', 'height', escala * orlaImagenHeight + 'px');
    changecss('.fotos', 'width', escala * orlaFotosWidth + 'px');
    changecss('.fotos', 'height', escala * orlaFotosHeight + 'px');
    changecss('.marcoA', 'width', escala * orlaFotoWidth + 'px');
    changecss('.marcoA', 'height', escala * orlaFotoHeight + 'px');
    changecss('.marcoA', 'background-size', escala * orlaFotoWidth + 'px' + ' Auto');
    //    changecss('#X_Orla', 'width', escala * XOrlaWidth+ 'px');

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
    if (o.children[0].style.display == "none") {
        o.children[0].style.display = "inline";
    }
    else {
        o.children[0].style.display = "none";
    }
    return;
}

function ponerFoto1968(o) {
    o.style.backgroundImage = imgAnt;

    return;
}

function ponerFoto1968R(o) {
    if (o.children[0].style.display == "none") {
        o.children[0].style.display = "inline";
    }
    else {
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

function mostrarDosX(o) {
    if (o.style.display !== "none") {
        //o.parentNode.opacity = 1;
        //o.parentNode.style.zIndex = 30;
        //o.zIndex = 20;
        o.style.display = "inline";
        o.style.opacity = "1";

        //o.style.width= "297%";
        //o.style.height= "150%";
        o.style.width = "594%";
        o.style.height = "300%";
        o.style.border = "medium solid red";
    }
    else {
        o.style.display = "none";
    }
    if (event.clientY < window.innerHeight * .3) {
        o.style.top = "0px";
    }
}

function ocultarDos(o) {
    o.style.display = "none";

}

function ocultarDosX(o) {
    o.style.display = "inline";
    o.style.opacity = "0";
    o.style.width = "100%";
    o.style.height = "100%";
    o.style.border = "medium solid red";
}

function mostrarCarrusel(p) {
    //mostrar Carrusel

    document.getElementById('carruselExt').style.display = 'inline';
    //document.getElementById('btCerrar').style.display = 'inline';
    var alto;
    //var unidades
    //    alto = window.nombreIframeCarrusel.document.getElementById("carruselDiv").offsetHeight;
    alto = document.getElementById("carruselDiv").offsetHeight
    //aplicar escala
    //   alert(alto +"\n"+escala+"\n" +alto * escala);
    //   window.nombreIframeCarrusel.document.getElementById("carruselDiv").style.height = (alto * escala) + "px"
    ///*    document.getElementById("carruselDiv").style.height = (alto * escala) + "px";
}

function ocultarCarrusel(o) {
    document.getElementById('carruselExt').style.display = 'none';
    //document.getElementById(o.id).style.display = 'none';
}

function mostrarXOrla() {
    var estadoVisibleXOrla = document.getElementById('X_Orla').style.display
    if (estadoVisibleXOrla != "inline") {
        document.getElementById('X_Orla').style.display = "inline";

        document.getElementById('X_Orla').style.width = escala * XOrlaWidth + 'px';
        document.getElementById('orla').style.width = document.getElementById('orla').offsetWidth + escala * XOrlaWidth + 8 + "px";

    }
    else {
        document.getElementById('X_Orla').style.display = "none";
        document.getElementById('orla').style.width = escala * orlaWidth + 'px';

    }
}



// Variables para manejar el carrusel
var directorioEvt;



//Array de los eventos anteriores
var eventos = []; // definir el array vacio

function iniArrayEventos() {
    //rellena el Array con el string que se encuentra en 'eventosString.js'
    eventos = eventosString.split(";");
    for (e in eventos) {
        eventos[e] = eventos[e].split(",");
    }
}


function rellenarMenuEventos() {
    // rellena el menú de los eventos. Se le llama desde iniciar la página principal
    //rellenar la lista de eventos
    iniArrayEventos();

    var t = "";

    uList = document.createElement("UL");
    iList = document.createElement("LI");

    for (e in eventos) {
        t = (parseInt(e) + 1) + " -  " +
            eventos[e][0] +
            "<span style='display:none'>" + eventos[e][1] + "</span>";
        iList.innerHTML = t;
        uList.appendChild(iList.cloneNode(true));
        uList.lastChild.onclick = function () { cual(this); };
    }

    document.getElementById("botonMostrarCarrusel").appendChild(uList);

}

function cual(o) {
    // lee el directorio del evento seleccionado;
    for (var i = 0; i < o.childNodes.length; i++) {
        if (o.childNodes[i].tagName === "SPAN") {
            directorioEvt = o.childNodes[i].innerText;
            break;
        }
    }

    document.getElementById("idIframeCarrusel").src = "eventos/index.html";
    document.getElementById("carruselExt").style.display = "block";
}




//////////////////////

function mostrarDosY(oO) {
    //oO.parentNode.style.zIndex = 35;
    //oO.style.opacity = 0;
    o = oO.nextElementSibling;
    if (event.clientY < window.innerHeight * .3) {
        o.style.top = "0px";
    }
    //o.style.zIndex = 30;


    o.style.display = "inline-block";
    //o.style.opacity = "1";

    //o.style.width= "297%";
    //o.style.height= "150%";
    //o.style.width = "594%";
    //o.style.width = "594%";

    //o.style.height = "300%";
    //o.style.width = "580%";
    //o.style.border = "medium solid red";
    o.children[0].style.height = (oO.offsetHeight * 3) + "px";
    o.style.height = (oO.offsetHeight * 3) + "px";
    o.children[0].style.height = "100%";
    if (o.children.length > 1) {
        o.children[1].style.height = "100%";
        o.style.width = (o.children[0].offsetWidth + o.children[1].offsetWidth + 5) + "px";
        //o.style.width = "auto";
    }
    else {
        o.style.width = (o.children[0].offsetWidth) + "px";

    }


}
function ocultarDosY(oO) {
    //oO.style.opacity = 1;
    //oO.parentNode.zIndex = 5;
    //oO.zIndex = 5;
    o = oO.nextElementSibling;
    o.style.display = "none";
    //o.style.opacity = "0";
    //o.style.width = "100%";
    //o.style.height = "100%";
    //o.style.border = "medium solid red";
    //o.childNodes[0].height = "100%";
    //o.childNodes[1].height = "100%";

}
