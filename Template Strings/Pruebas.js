//LOS TEMPLATE STRINGS FUNCIONAN COMO LOS fStrings DE PYTHON
//VAN ENTRE ` Y LOS VALORES INTERPOLADOS SE METEN EN ${}

let e1 = 3, e2 = "gaturros", a = 1, b = 2;

//Interpolacion 
console.log(`En mi casa tengo ${e1} gordos ${e2}`);

//String en varias lineas
let fechaNowDate = new Date(Date.now())
console.log(`Estos dos metodos se pueden usar para obtener el argumento para crear un objeto fecha. 
Por ejemplo: let fechaNowDate = new Date(Date.now()); daría: ${fechaNowDate}`);

//Funcion para el uso de plantillas etiquetadas
function foo(texto, p1, p2, p3){
    console.log(texto, p1, p2, p3);
    return `La suma es: ${p1 + p2}`
}

let res = foo`La suma de ${a} y ${b} es ${a+b}`;
console.log(res);