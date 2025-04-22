let datos = [
    { "tematica": "deportes", "direccion": "http://www.marca.es" },
    { "tematica": "libros", "direccion": "http://www.puntolibro.es" },
    { "tematica": "deportes", "direccion": "http://www.todofutbol.com" },
    { "tematica": "libros", "direccion": "http://www.fnac.es" },
    { "tematica": "cocina", "direccion": "http://www.fogones.es" },
    { "tematica": "juegos", "direccion": "http://www.game.es" }
];
function buscar() {

    let resultado = [];
    let tematica = document.getElementById("tematica").value;
    tematica = tematica.toLowerCase();
    //recorremos el array de datos y buscamos los JSON que 
    //pertenezcan a la temática introducida. Los que coincidan
    //los guardamos en la variable resultados.

    for (let r of datos) {
        if (r.tematica == tematica) {
            resultado.push(r)
        }
    }

    /*Recorre el array de elementos
    //y los separa en sus partes
    //guarda en el array direcciones, aquellas que pertenecezcan
    //a la temática indicada en la caja de texto
    for(let item of datos){
        let trozos=item.split("|");
        if(tematica==trozos[0]){
            direcciones.push(trozos[1])
        }
    } */
    //volcar el contenido de array direcciones en el div
    let html = "";
    for (let d of resultado) {
        //html=html+d+"<br>";
        html += d.tematica + "," + d.direccion + "<br>";
    }
    document.getElementById("resultados").innerHTML = html;
}