// JavaScript source code
// incluye los datos de un evento

var nombreEvt;
var directorioEvt;
var tituloEvt;
var fechaEvt;
var poblacionEvt;
var localEvt;
var asistentesEvt;
var fotosEvt;
var menuEvt;

var dirCompletoFotos;


// variables del carrusel

var arrayFotosEvt = [];
var i = 0;


function iniPage() {
    //alert("alto: " + window.innerHeight + "\n" +
    //    "ancho: " + window.innerWidth);
    calcularEscala();
    windowIsTop();
    crearScriptEvento(directorioEvt);
}
function iniCarrusel() {
    arrayFotosEvt = fotosEvt.split(",");
    document.getElementById("imgCarrusel").src = dirCompletoFotos + arrayFotosEvt[indCarrusel];
}

//rellenar los datos en la hoja
function iniEvt() {

    // rellenar los elementos con los valores del evento.
    document.getElementById("tituloEvt").innerHTML = tituloEvt;
    document.getElementById("fechaEvt").innerHTML = fechaEvt.toLocaleDateString();
    document.getElementById("poblacionEvt").innerHTML = poblacionEvt;
    document.getElementById("localEvt").innerHTML = localEvt.replace(/,/g, "<br/>");
    document.getElementById("asistentesEvt").innerHTML = asistentesEvt.replace(/,/g, "<br/>");
    document.getElementById("menuEvt").innerHTML = menuEvt;

    //llamar a la inicialización del carrusel
    iniCarrusel();
    //redimensionar y recolocar "reunionEvt"
    document.getElementById("reunionEvt").style.height = document.getElementById("carruselDiv").clientHeight + "px";
    document.getElementById("reunionEvt").style.width = document.getElementById("imgCarrusel").clientWidth + "px";
//    document.getElementById("reunionEvt").style.left = document.getElementById("imgCarrusel").offsetLeft + "px";
}

function siguiente() {
    if (indCarrusel < arrayFotosEvt.length - 1) {
        indCarrusel++;
    }
    else {
        indCarrusel = 0;
    }
            conmutarPrograma();
            document.getElementById("imgCarrusel").src = dirCompletoFotos + arrayFotosEvt[indCarrusel];

}
function anterior() {

        if (indCarrusel > 0) {
            indCarrusel--;
        }
        else {
            indCarrusel = arrayFotosEvt.length - 1;
    }
    conmutarPrograma();

        document.getElementById("imgCarrusel").src = dirCompletoFotos + arrayFotosEvt[indCarrusel];

}
function conmutarPrograma() {
    if (indCarrusel === 1 || indCarrusel === arrayFotosEvt.length - 1) {
        if (document.getElementById("reunionEvt").style.display !== "none") {
            document.getElementById("reunionEvt").style.display = "none";
            indCarrusel = 0;
        }
    }
    else {
        if (indCarrusel === 0) {
            if (document.getElementById("reunionEvt").style.display !== "none") {
                document.getElementById("reunionEvt").style.display = "none";
                indCarrusel = 0;
            }
            else {
                document.getElementById("reunionEvt").style.display = "block";
            }
        }
    }

}


function windowIsTop() {
    if (window.top !== window.self) {
        //alert("This window is NOT the topmost window!");
        leerDirEvtFrame();
    } else {
        //alert("This window is the topmost window!");
        leerDirEvtQuery();
        document.getElementById("btCerrar").style.display = "none";
    }
}
function leerDirEvtFrame() {
    directorioEvt = parent.directorioEvt;
}
function leerDirEvtQuery() {
    directorioEvt = getQueryString("direvt");
}
/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
//var getQueryString = function (field, url) {
//    var href = url ? url : window.location.href;
//    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
//    var string = reg.exec(href);
//    return string ? string[1] : null;
//};

function getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var string = href.split("?")[1];
    string = string.split("&");
    for (var i = 0; string.length; i++) {
        if (string[i].split("=")[0] == field) string = string[i].split("=")[1]; break;
    }
    return string ? string : null;
};


function crearScriptEvento(dir) {
    var fileJS = dir + "/js/datosEvt.js";
    var evtScript = document.createElement("script");
    evtScript.type = "text/javascript";
    evtScript.src = fileJS;
    evtScript.onload = function () { iniEvt(); };
    document.head.appendChild(evtScript);

    dirCompletoFotos = dir + "/img/";
}

function calcularEscala() {
    var altoOtros = 20;
    var altoCarrusel = document.getElementById("carruselDiv").clientHeight;
    var altoVisual = window.innerHeight;
    var escala = (altoVisual - altoOtros) / altoCarrusel;
    document.getElementById("carruselDiv").style.height = (altoCarrusel * escala) + "px"
}