


function guardar(){
    const nombre = document.getElementById("nombre").value;
    const cuidad = document.getElementById("Cuidad").value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("cuidad", cuidad);
    window.location.href = "index2.html";

if (cuidad === "") {
    alert("Por favor, completa todos los campos antes de guardar.");
    return;

}
}

document.getElementById("btn-guardar").addEventListener("click", guardar);