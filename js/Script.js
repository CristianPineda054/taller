let contador = 0;
const spanContador = document.getElementById("contador");

function incrementarContador() {
    contador++;
    spanContador.textContent = contador;
}