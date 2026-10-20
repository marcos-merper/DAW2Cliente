
/* 
hola(adios, "laura");

function adios(){
    console.log("Adiós ");   
}


function hola(foo,parametro){
    console.log("Hola");
    foo();
    console.log(parametro);
}

function hola(param1, param2){
    console.log("soy el nuevo hola");
    
} */

const { isNumberObject } = require("util/types");



let noNombrada = function(){
    console.log("Esto es una funcion no nombrada");
}

noNombrada();

function f1(nombre, edad){
    console.log(`${nombre} - ${edad}`);
}

f1("Pepe");
f1("pepe",30,"Otro dato");

function f2(nombre,edad){
    console.log(`${arguments[0]} - ${arguments[1]}`);
}

f2("Hola", "Buenas");
f2();

function f3(...args){
    result = 0;
    for(let arg of args){
        if(!isNaN(arg)){
            result = result + arg;
        }
    }
    return result;
}

console.log(f3(2,4,5,7,1,2,4, "asd"));

function nombreApellidos(nombre, ...apellidos){
    console.log(`La funcion tiene ${arguments.length} argumentos`);
    console.log(nombre);
    for(apellido of apellidos){
        console.log(apellido);
    }
}

nombreApellidos("Marcos", "Merino", "Perez");

let values = [1, 2, 3];
console.log(values);
let copy = [...values];
console.log(copy);
let morevalues = [4, 5];
values.push(...morevalues); //Creo que unwindeará los valores del array a pushear y los pusheará por separado
console.log(values);
