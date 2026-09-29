const { log } = require("console");

//if-else
/* let altura = 1.8;
if(altura > 1.8){
    console.log("Eres muy alto");
}
else if(altura > 1.7){
    console.log("Estas en la media");
}
else{
    console.log("Eres un enano");
}

//Switch
let numElec = 3
switch(numElec){
    case 1:
        console.log("Has elegido el uno");
        break;
    case 2:
        console.log("Has elegido el dos");
        break;
    case 3:
        console.log("Has elegido el tres");
        break;
} */

//for con objeto
let pc1 = {
    cpu: "R7 5700X3D",
    gpu: "RX 6800 XT",
    mem: "16 GB DDR4"
}

for(let spec in pc1){
    console.log(pc1[spec]);
}

//Array de objetos
let pc2 = {
    cpu: "R7 5800H",
    gpu: "RTX 3060 Laptop 130W",
    mem: "24 GB DDR4"
}

let pc3 = {
    cpu: "R5 5600",
    gpu: "RTX 3050",
    mem: "16 GB DDR4"
}

let pcArray = [pc1, pc2, pc3];

for(let i = 0; i < pcArray.length; i++){
    console.log("PC",i+1, "SPECS:");
    for(let spec in pcArray[i]){
        console.log(spec,":");
        console.log(pcArray[i][spec]);
    }
}