
const divBoton = document.getElementById("botonAlerta");

function estiloDiv() {
    divBoton.style.padding = "5px";
    divBoton.style.backgroundColor = "green";
}

function mostrarAlertaDiv() {
    alert("Hola! Soy el div");
}

divBoton.addEventListener("click", mostrarAlertaDiv);

