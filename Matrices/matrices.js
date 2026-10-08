let matriz = [];
matriz[0] = [1,2,3];
matriz[2] = [4,5,6];

let matriz2 = [1,2,3, ["a","b"], "c", true, [4,5]]
for(let i = 0; i < matriz2.length; i++){
    console.log("Fila", i)
    if(typeof matriz2[i] == "object"){
        for(let j = 0; j < matriz2[i].length; j++){
            console.log(matriz2[i][j])
        }
    }
    else{
        console.log(matriz2[i])
    }
}

/* for(let i = 0; i < matriz.length; i++){
    console.log("Fila", i)
    if(matriz[i] != undefined){
        for(let e = 0; e < matriz[i].length; e++){
            console.log(matriz[i][e]);
        }
    }
} */

