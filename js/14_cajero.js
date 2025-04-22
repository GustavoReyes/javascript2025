let saldo = 0;
let movimientos = [];

// esta funcion recoge el saldo inicial introducido en la caja y lo guarda en la variable saldo
function grabarDinero() {
    saldo = document.getElementById("saldoInicial").value
    saldo = parseFloat(saldo)
    //Si el saldo es negatico lo ponemos en 0
    if (saldo < 0) {
        saldo = 0;
        alert("El saldo incial no puede ser negativo, se queda en 0");
    }
    let fechaActual = obtenerFechaActual();
    let horaActual = obtenerHoraActual();
    let concepto = "Saldo Inicial"
    let movimiento = {
        "cantidad": saldo,
        "tipo": "Ingreso",
        "fecha": fechaActual,
        "hora": horaActual,
        "concepto": concepto
    };
    movimientos.push(movimiento);

}
// recogemos la cantidad, que está en la caja operaciones, y el concepto
//sumamos la cantidad al saldo, y registramos un nuevo movimiento en el array
function ingresarDinero() {
    if (document.getElementById("operaciones").valuer == "" && document.getElementById("concepto").value == "") {
        alert("Los campos no pueden estar vacios")
    } else {
        let cantidad = parseFloat(document.getElementById("operaciones").value);
        saldo = saldo + cantidad
        let fechaActual = obtenerFechaActual();
        let horaActual = obtenerHoraActual();
        let concepto = document.getElementById("concepto").value
        let movimiento = {
            "cantidad": cantidad,
            "tipo": "ingreso",
            "fecha": fechaActual,
            "hora": horaActual,
            "concepto": concepto
        };
        movimientos.push(movimiento);
        limpiar();
    }
}
// recogemos la cantidad, que está en la caja operaciones, y el concepto
//restamos la cantidad al saldo, y registramos un nuevo movimiento en el array
function retirarDinero() {
    let cantidad = parseFloat(document.getElementById("operaciones").value);
    saldo = saldo - cantidad
    let fechaActual = obtenerFechaActual();
    let horaActual = obtenerHoraActual();
    let concepto = document.getElementById("concepto").value
    let movimiento = {
        "cantidad": cantidad,
        "tipo": "Retiro",
        "fecha": fechaActual,
        "hora": horaActual,
        "concepto": concepto
    }
    movimientos.push(movimiento);
    limpiar();
}
// Muestra los movimientos 
function mostrarDinero() {
    let html = "<tr><th>Tipo</th><th>Cantidad</th><th>Concepto</th><th>Fecha</th><th>Hora</th></tr>";
    for (let m of movimientos)
        html = html + `<tr><td>${m.tipo}</td><td>${m.cantidad}</td><td>${m.concepto}</td><td>${m.fecha}</td><td>${m.hora}</td></tr>`
    document.getElementById("tabla").innerHTML = html;
}

function limpiar() {
    document.getElementById("operaciones").value = "";
    document.getElementById("concepto").value = "";
    document.getElementById("operaciones").focus();
}
//Para obtener la fecha en formato dd/mm/aaaa
function obtenerFechaActual() {
    let fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let mes = String(fecha.getMonth() + 1).padStart(2, '0');
    let anno = fecha.getFullYear();
    return `${dia}/${mes}/${anno}`;
}
//Obtener la hora
function obtenerHoraActual() {
    let fecha = new Date();
    let horas = String(fecha.getHours()).padStart(2, '0');
    let minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${horas}:${minutos}`;
}