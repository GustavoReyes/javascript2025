let nombres = []
function guardar() {
    /*  for (let n of nombres) {
         if (n == document.getElementById("nombre").value) {
             alert("Contacto existe");
             return
         }
     } */
    let n = document.getElementById("nombre").value;
    let repetido = false
    for (let nombre of nombres) {
        if (nombre == n) {
            repetido = true
        }
    }
    if (repetido == false) {
        nombres.push(n);
        alert("Contacto Guardado")
    }
    else {
        alert("No añadido, el contacto ya escite")
    }
}


function mostrar() {
    let html = "";
    for (let n of nombres) {
        html += "<b>" + n + "</b><br />"
    }
    document.getElementById("listaNombres").innerHTML = html;
}