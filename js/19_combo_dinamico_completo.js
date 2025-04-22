let ciudades = [
    { ciudad: "Cáceres", poblacion: 120000 },
    { ciudad: "Ávila", poblacion: 57000 },
    { ciudad: "Córdoba", poblacion: 720000 },
    { ciudad: "Zaragoza", poblacion: 450000 },
    { ciudad: "Madrid", poblacion: 680000 },
    { ciudad: "Valencia", poblacion: 560000 }];
function ver() {
    let valor = document.getElementById("ciudades").ariaValueMax;
    console.log(valor)
}

//Se encarga de generar dinámicamente el contenido del select 
// a partir del array de cidudades

function cargarCiudades() {
    let html = "";
    for (let c of ciudades) {
        html = html + `<option value="${c.poblacion}">${c.ciudad}</option>`;
        console.log(html)
    }
    document.getElementById("ciudades").innerHTML = html;
}