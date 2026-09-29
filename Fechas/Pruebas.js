//Constructores del objeto global date
//El objeto date tendra la hora del sistema
let fechaActual = new Date();
/* console.log("new Date(): " + fechaActual);
 */
//Este constructor precisa a los milisegundos
/* let fechaMs = new Date(12344576789)
console.log("new Date(12344576789): " + fechaMs);

//Este constructor crea el objeto con la fecha especificada en un string
let fechaStr = new Date("2024-06-19");
console.log("new Date(2024-06-19): " + fechaStr);

//Este constructor crea el objeto pasandole los numeros del año, mes, dia, etc. como argumentos individuales
//EL INDICE DE LOS MESES COMIENZA EN CERO, NO EN UNO
let fechaArgs = new Date(2024,5,19,16);
console.log("new Date(2024,5,19,16): " + fechaArgs); */

//Funciones del objeto Date
//Now
let fechaNow = Date.now();
console.log("El método now() nos da la hora actual en milisegundos: " + fechaNow);

//Parse
let fechaParsed = Date.parse("2024-06-19");
console.log("El método parse() nos da el valor en milisegundos de una fecha pasada como string, en este caso '2024-06-19': " + fechaParsed);

let fechaNowDate = new Date(Date.now());
console.log("Estos dos metodos se pueden usar para obtener el argumento para crear un objeto fecha. Por ejemplo: let fechaNowDate = new Date(Date.now()); daría: " + fechaNowDate);


//getFullYear
console.log("El método getFullYear() devuelve el año de una fecha, que en este caso sera el actual: " + fechaActual.getFullYear());

//getMonth
console.log("El método getMonth() devuelve el mes de una fecha, que en este caso sera el actual: " + fechaActual.getMonth());

//getDate
console.log("El método getDate() devuelve el dia del mes de una fecha, que en este caso sera el actual: " + fechaActual.getDate());

//getDay
console.log("El método getDay() devuelve el dia de ña semana de una fecha, que en este caso sera el actual: " + fechaActual.getDay());

//getHours, getMinutes, getSeconds, getMilliseconds
console.log("El método getHours() devuelve la hora de una fecha: " + fechaActual.getHours());
console.log("El método getMinutes() devuelve los minutos de una fecha: " + fechaActual.getMinutes());
console.log("El método getSeconds() devuelve los segundos de una fecha: " + fechaActual.getSeconds());
console.log("El método getMilliseconds() devuelve los milisegundos de una fecha: " + fechaActual.getMilliseconds());

//getTime
console.log("El método getTime() devuelve el valor numérico de una fecha en milisegundos, con la fecha actual se vería así: " + fechaActual.getTime());