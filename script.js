//alert("Hola este es mi Javascript");
let nombre1 = "Victor"
console.log(nombre1);

//SELECIONAR ELEMENTOS

let contenidoTitulo = "Mi pagína web";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerHTML = "Otro"
} else {
    console.log("No se cumple");
}

//FUNCIONES

let nombre = "Victor";
let ciudad = "Jujuy";
let gusto = "chocolate";

let parrafo = document.querySelector("p");

console.log(parrafo);

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo
    en jujuy. Mes gusta el ${gusto} y salir a pasear los dias de 
    sol. Me encanta aprender a programar para poder ayudar a
    las personas a mostrar lo que hacen`;
    
    return contenido;
    
}