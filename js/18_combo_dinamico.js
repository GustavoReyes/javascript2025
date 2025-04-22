let ciudades = ["Cáceres", "Ávila", "Córdova", "Zaragoza"];
function ver() {
    let valor = document.getElementById("ciudades").ariaValueMax;
    console.log(valor)
}

//Se encarga de generar dinámicamente el contenido del select 
// a partir del array de cidudades

function cargarCiudades() {
    let html = "";
    for (let c of ciudades) {
        html = html + `<option>${c}</option>`;
    }
}