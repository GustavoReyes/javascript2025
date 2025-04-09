let n = 0;
let ascendente = true;

function contar() {
    let limiteInferior = 0;
    let limiteSuperior = document.getElementById("limite").value
    if (ascendente == true) {
        if (n < limiteSuperior) {
            n++
        } else {
            n--;
            ascendente = false;
        }
    } else {
        if (n > limiteInferior) {
            n--;
        } else {
            n++;
            ascendente = true
        }
    }
    document.getElementById("numero").innerHTML = `<h2>${n}</21>`;
}
