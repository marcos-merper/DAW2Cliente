/* const propiedad1 = 'edad';
const valor = 20;
const propiedad2 = 'trabajador';
const persona = {
    nombre: "pepe",
    [propiedad1]: valor,
    [propiedad2]: true
}; */

const { log } = require("node:console");

/* const propiedades = ["nombre", "edad", "trabajador"];
const valores = ["Luis", 43, true];
const persona = {}; */

/* const cliente = {
    nombre: "pepe", 
    saldo: 1000,
    credito: true
};

for (const key in cliente){
    console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
}

console.log("nombre" in cliente);
console.log("apellido" in cliente);
const copiaCliente = {...cliente};
console.log(copiaCliente);
const copiaCliente2 = {apellido: "García", ...cliente};
console.log(copiaCliente2); */

/* const person = {
    name: "Paco",
    age: 30
}

const student = {
    course: "A"
}

console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student));
console.log(student.name);
Object.setPrototypeOf(student, person);
console.log(student.name);

student.name = "Pepe";
console.log(student.name);
console.log(person.name); */

const person = {
    name: "pepe",
    age: 23
};

/* const student = Object.create(person);
student.course = "A";
const customer = Object.create(person);
customer.sales = 1230;
console.log(person);
console.log(student);
console.log(customer);
for (const key in student){
    console.log(`${key}: ${student[key]}`);
}
for (const key in customer){
    console.log(`${key}: ${customer[key]}`);
} */

/* const data = {height: 160};
const student = Object.assign({}, person, data); //Assign crea un objeto nuevo, no cambia el que se le pasa
console.log(person);
console.log(student);

student.nota = 10;
console.log(student);
console.log(person);
console.log(data); */

const persona = {
    visualizar: function() {
        console.log(this);
    }
};
const estudiante = Object.create(persona);
estudiante.nombre = "Pedro";
estudiante.visualizar();