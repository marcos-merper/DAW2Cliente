let array = [1,2,3,4,5,6,7,8,9];
let array2 = ["patata","zanahoria"]

//Devuelve la suma de posiciones del array
console.log(".length ------------");
console.log(array.length);

//Concatena arrays
console.log(".concat() ------------");
let arrayComp = array.concat(array2)
for(let i = 0; i < arrayComp.length; i++){
    console.log(arrayComp[i]);
}

//Guarda todos los elementos de un array en un solo string
console.log(".join() ------------");
console.log(arrayComp.join());

//Extrae el ultimo elemento de un array
console.log(".pop() ------------");
console.log(array2.pop()); //Dejberia devolver zanahoria

//Añade un elemento al final del array
console.log(".push() ------------");
array2.push("Rábano");
for(i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

//Extrae el primer elemento de un array
console.log(".shift() ------------");
console.log(array2.shift()); //Deberia devolver patata
for(i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

//Añade un elemento al principio del array
console.log(".unshift() ------------");
array2.unshift("Cebolla");
for(i = 0; i < array2.length; i++){
    console.log(array2[i]);
}

//Invierte el orden de los elementos del array
console.log(".reverse() ------------");
array.reverse();
for(i = 0; i < array.length; i++){
    console.log(array[i]);
}

//Ordena los elementos del array
console.log(".sort() ------------");
arrayComp.sort();
for(i = 0; i < arrayComp.length; i++){
    console.log(arrayComp[i]);
}

//Devuelve la pposición de un elemento en el array
console.log(".indexOf() ------------");
console.log(arrayComp.indexOf("patata")); //Deberia devolver 9


//Devuelve la posicion final de un elemento en el array
console.log(".lastIndexOf() ------------");
console.log(arrayComp.lastIndexOf("patata")); //Deberia devolver 9

//Devuelve un nuevo array con parte de los elementos del array
console.log(".slice() ------------");
arraySlice = arrayComp.slice(0,5);
for(i = 0; i < arraySlice.length; i++){
    console.log(arraySlice[i]);
}

//Splice permite añadir o eliminar elementos de un array
console.log(".splice() ------------");
arrayComp.splice(0,2,"Tomate","Lechuga");
for(i = 0; i < arrayComp.length; i++){
    console.log(arrayComp[i]);
}
