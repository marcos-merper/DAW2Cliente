const array = [100, 23, 23, 23, 23, 67, 45];
let outputArray1 = [];
let outputArray2 = Array.from(new Set(array));

for(let i = 0; i < array.length; i++){
    if(!outputArray1.includes(array[i])){
        outputArray1.push(array[i]);
    }
}

console.log("Con metodo manual: " + outputArray1);

console.log("Con metodo set: " + outputArray2);
