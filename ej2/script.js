//Declaración de variables
let nacimientoString;
let recogidaDatos = true;
let arrayDatos;
let fechaCorr = true;

//Recogida y limpieza de datos
while(recogidaDatos){
    let datos = prompt("Introduce tu nombre, apellidos y fecha de nacimiento (dd/mm/aa) separados por comas").trim();
    arrayDatos = datos.split(",");
    if(arrayDatos.length == 4){
        recogidaDatos = false;
    }
    else{
        alert("Formato no válido, vuelva a intentarlo");
    }
}
//Apertura del documento
document.write("<table border='1'>");
document.write("<tr><td>Nombre</td>" + "<td>" + arrayDatos[0] + "</td></tr>");
document.write("<tr><td>Primer apellido</td>" + "<td>" + arrayDatos[1] + "</td></tr>");
document.write("<tr><td>Segundo apellido</td>" + "<td>" + arrayDatos[2] + "</td></tr>");

//Creacion y escritura de fecha
let arrayFecha = arrayDatos[3].split("/")
if(validarFecha(arrayFecha)){
    document.write("<tr><td>Primer apellido</td>" + "<td>" + new Date("20" + arrayFecha[2] + "-" + arrayFecha[1] + arrayFecha[0]) + "</td></tr>");
}
else{
    document.write("<tr><td>Primer apellido</td>" + "<td>La fecha introducida no es válida</td></tr>");
}

//Cierre del documento
document.write("</table>");

//Funcion que valida que la fecha introducida es correcta
function validarFecha(arrayFecha){
    if(isNaN(arrayFecha[0]) || isNaN(arrayFecha[1]) || isNaN(arrayFecha[2])){
        return false;
    }
    if(arrayFecha[0].length != 2 || arrayFecha[1].length != 2 || arrayFecha[2].length != 2){
        return false;
    }
    if(arrayFecha[0] < 1 || arrayFecha[0] > 31 || arrayFecha[1] < 1 || arrayFecha[1] > 12 || arrayFecha[2] < 1 || arrayFecha[0] > 26){
        return false;
    }
    return true;
}