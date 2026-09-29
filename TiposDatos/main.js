let numero1 = 1;
let numero2 = 1.02;
let booleano = true;
let cadena = "Hola";
let nulo = null;
let indefinido;
let objeto = {a:1};

console.log(numero1, "->" , typeof numero1);
console.log(numero2, "->" , typeof numero2);
console.log(booleano, "->" , typeof booleano);
console.log(cadena, "->" , typeof cadena);
console.log(nulo, "->" , typeof nulo);
console.log(indefinido, "->" , typeof indefinido);
console.log(objeto, "->" , typeof objeto);

console.log("");
console.log("Tipos avanzados -------------------------");

console.log(cadena.constructor.name); //String
console.log(numero1.constructor.name); //Number
console.log(booleano.constructor.name); //Boolean
console.log(indefinido.constructor.name); //Undefined no tiene constructor