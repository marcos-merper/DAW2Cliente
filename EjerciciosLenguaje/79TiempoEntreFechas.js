let tiempo = tiempoTranscurrido("2006-07-17", "2026-08-10");
console.log("Han pasado " + tiempo + " días");

function tiempoTranscurrido(fechaInicio, fechaFin){
    let dateInicio = new Date(fechaInicio);
    let dateFin = new Date(fechaFin);

    let diasTranscurridos = (dateFin.getTime() - dateInicio.getTime())/86400000;

    return diasTranscurridos;
}