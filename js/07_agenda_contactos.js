let nombres = []
function guardar() {
    n = document.getElementById("nombre").value;
    nombres.push(n);
    alert("Contacto Guardado");

}

function mostrar() {
    let html = "";
    for (let n of nombres) {
        html += "<b>" + n + "</b><br />"
    }
    document.getElementById("listaNombres").innerHTML = html;
}