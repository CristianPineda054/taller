

function guardar(){
    const nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre", nombre);
    window.location.href = "index2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);