let a1=1;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
{
    let a2=2;
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
} //EN UN BLOQUE SOLO SE PUEDE ACCEDER A VARIABLES DECLARADAS EN EL BLOQUE O EN UN AMBITO SUPERIOR
//SI QUEREMOS ACCEDER A UNA VARIABLE DECLARADA EN UN BLOQUE, DEBE ESTAR DECLARADA CON VAR
function f() {
    let a3=3;
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);
    if (true) {
        let a4=4;
        console.log(a4);
    }
}

f();

(function (n) {
    var saludo = "Hola";
    console.log(saludo + n);
}("Juan"));