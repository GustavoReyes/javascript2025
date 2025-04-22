let ciudades = ["", "Cáceres", "Ávila", "Córdova", "Zaragoza", "Madrid", "Valencia", "Cáceres", "Madrid", "Ávila"];
function ver() {
    let valor = document.getElementById("ciudades").ariaValueMax;
    console.log(valor)
}

//Se encarga de generar dinámicamente el contenido del select 
// a partir del array de cidudades

function cargarCiudades() {
    let conjunto = new Set(ciudades)
    let html = "";
    for (let c of conjunto) {
        html = html + `<option>${c}</option>`;
    }
    document.getElementById("ciudades").innerHTML = html;
}