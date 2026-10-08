let arrayDesordenado = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
let arrayLimpio = [];

for(let i = 0; i < arrayDesordenado.length; i++){
    if(arrayLimpio.indexOf(arrayDesordenado[i]) == -1){
        arrayLimpio.push(arrayDesordenado[i]);
    }
}
arrayLimpio.sort();
document.write("<span>" + arrayLimpio.toString() + "</span>");