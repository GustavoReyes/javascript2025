let datos = [
    "deportes|http://www.marca.es",
    "libros|http://www.puntolibro.es",
    "deportes|http://www.todofutbol.com",
    "libros|http://www.fnac.es",
    "cocina|http://www.fogones.es",
    "juegos|http://www.game.es"
];
function buscar() {
    let direcciones = [];
    let tematica = document.getElementById("tematica").value;
    tematica = tematica.toLowerCase();
    //recorre el array de elementos
    //y los separa en sus partes
    //guarda en el array direcciones, aquellas que pertenecezcan
    //a la temática indicada en la caja de texto
    for (let item of datos) {
        let trozos = item.split("|");
        if (tematica == trozos[0]) {
            direcciones.push(trozos[1])
        }
    }
    //volcar el contenido de array direcciones en el div
    let html = "";
    for (let d of direcciones) {
        //html=html+d+"<br>";
        html += d + "<br>";
    }
    document.getElementById("resultados").innerHTML = html;
}