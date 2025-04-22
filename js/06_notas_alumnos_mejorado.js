let notas = [7, 5, 2, 4, 9, 6, 1, 3, 4, 8, 7, 6];
function totalAprobados() {
    let aprobados = 0;
    for (let n of notas) {
        if (n >= 5) {
            aprobados++;
        }
    }
    document.getElementById("result").innerHTML = "El total de aprobados es: " + aprobados;
}
function notaMedia() {
    let media = 0
    for (let n of notas) {
        media = media + n;
    }
    media = media / notas.length;
    document.getElementById("result").innerHTML = "La nota media es: " + media.toFixed(2);
}
function notaAlta() {
    let alta = notas[0];
    for (let n of notas) {
        if (n > alta) {
            alta = n;
        }
    }
    document.getElementById("result").innerHTML = "La nota más Alta es: " + alta;
}
function notaBaja() {
    let baja = notas[0];
    for (let n of notas) {
        if (n < baja) {
            baja = n;
        }
    }
    document.getElementById("result").innerHTML = "La nota más Baja es: " + baja;
}
function nuevaNota() {
    let nota = parseInt(document.getElementById("nota").value);
    if (nota > 0 && nota < 11) {
        notas.push(nota);
        console.log(notas);
        document.getElementById("result").innerHTML = "La nueva nota es: " + nota;
    } else {
        alert("Introduce una nota válida entre 0 y 10");
    }
}