let parrafo1 = document.getElementById("parradoEditable");
let parrafo2 = document.getElementById("parrafoConId");
let titulo = document.querySelector("h1");
let calc1 = document.getElementById("calculo1");
let calc2 = document.getElementById("calculo2");
let calc = document.getElementById("calcular");
let result = document.getElementById("resultado");
let form = document.getElementById("formulario");

parrafo2.innerHTML = "hola";
titulo.innerText = "estoy cambiando el titulo";

titulo.classList.add("añado_clases");
titulo.classList.remove("añado_clases"); /* se fué */
titulo.classList.toggle("pongo_y_quito_clases");
titulo.classList.contains("verifico_clases"); /* true o false */

const img = document.createElement("img");
img.setAttribute("src", "https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387__480.png");
img.setAttribute("class", "editorDeImagen")

parrafo1.innerHTML = "";
parrafo1.append(img)


function clickBoton(){
    let resultado = calc1.value + calc2.value;
    result.innerText = "Resultado: " + resultado;
}

function resetValues(data){
    data.value = null;
}

calc.addEventListener("click", clickBoton);
calc1.addEventListener("click", () => resetValues(calc1));
calc2.addEventListener("click", () => resetValues(calc2));