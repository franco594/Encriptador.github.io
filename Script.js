
var boton1 = (document.querySelector(".boton1"));
var boton2 = (document.querySelector(".boton2"));
var boton3 = (document.querySelector(".boton3"));
var lista = ["e","i","a","o","u"];
var codigo = ["enter","imes","ai","ober","ufat"];
var imagen = document.querySelector(".lupa");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var pantalla = document.querySelector(".pantalla");
pantalla.style.display = "none";
boton3.style.display = "none";


function encriptar() {

var texto = document.querySelector(".input-padron").value;
texto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

mostrar(texto);
}

function desencriptar() {

var texto = document.querySelector(".input-padron").value;
texto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

mostrar(texto);
}

function mostrar(resultado) { 

imagen.style.display = "none";
p1.style.display = "none";
p2.style.display = "none";
pantalla.style.display = "initial";
boton3.style.display = "initial";
pantalla.textContent = resultado;

}

function copiar() {
var copiar = document.querySelector(".pantalla");
var seleccion = document.createRange();
seleccion.selectNodeContents(copiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);

}
