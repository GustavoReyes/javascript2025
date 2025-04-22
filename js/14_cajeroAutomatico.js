let saldo = 0


function inicial() {
    saldo = document.getElementById("saldoInicial").value
}

function ingresar() {
    saldo = saldo + document.getElementById("ingreso").value

}

function retirar() {
    saldo = saldo - document.getElementById("retirar").value
}