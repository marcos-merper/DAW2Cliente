const csv = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";

function processCSV(csv){
    let elements = csv.split(",");
    let result = [];
    let subArray = [];

    for(let i = 0; i < elements.length; i++){
        //Limpiar subarray
        if(subArray.length = 4){
            elements.push(subArray);
            let subArray = [];
        }
        //Nombre
        if(elements[i].match(/^[A-Z].*[a-z]$/g)){
            subArray[0] = elements[i];
        }
        //DNI
        if(elements[i].match(/[0-9]{8}[A-Z]$/g)){
            subArray[1] = elements[i];
        }
        //Tfno
        if(elements[i].match(/^[0-9]{9}/g)){
            subArray[2] = elements[i];
        }
        //Cod. postal
        if(elements[i].match(/^[0-9]{5}/g)){
            subArray[3] = elements[i];
        }
        //Matricula
        if(elements[i].match(/[0-9]{4}[A-Z]{3}/g)){
            subArray[4] = elements[i];
        }
    }
}
