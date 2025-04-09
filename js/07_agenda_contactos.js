let nombres = []
function guardar() {
    if (document.getElementById("nombre").value == "") {
        alert("Debes escribir un nombre")
    } else {
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
            alert("No añadido, el contacto ya existe")
        }
        document.getElementById("nombre").value = "";
    }
}

function mostrar() {
    let html = "";
    for (let i = 0; i < nombres.length; i++) {
        html += `
            <b>${nombres[i]}</b>
            <a onclick="borrar(${i})">
                <img height="10px" src="img/delete.png" style="cursor: pointer;" />
            </a>
            <br />
        `;
    }
    document.getElementById("listaNombres").innerHTML = html;
}


// function mostrar() {
//     let html = "";
//     for (let n of nombres) {
//         html += "<b>" + n + "</b><img onclick=borrar(" + n + ") height='10px' src='img/delete.png'/><br />"
//     }
//     document.getElementById("listaNombres").innerHTML = html;
// }
function borrar(index) {
    nombres.splice(index, 1);
    mostrar()
}