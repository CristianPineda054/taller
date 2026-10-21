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