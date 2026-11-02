let contador = 0;
const spanContador = document.getElementById("contador");
let reset = document.querySelector("button[onclick='resetContador()']");


function incrementarContador() {
    contador++;
    spanContador.textContent = contador;

}

function resetContador() {
    contador = 0;
    spanContador.textContent = contador;
}




function mostrarNombre() {
    const nombre = localStorage.getItem("nombre");
    const cuidad = localStorage.getItem("cuidad");
    if (nombre === null) {
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + cuidad;
    }
}

function borrar() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("cuidad");
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
