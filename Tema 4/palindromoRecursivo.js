let palindromo = (frase, n = 0) => {
    frase = frase.replaceAll(" ", "").toLowerCase();

    if(frase[n] != frase[(frase.length - n)]){
        return false;
    }
    else if(n == frase.length){
        return true;
    }
    
    else{
        return palindromo(frase, n + 1);
    }
}

console.log(palindromo("Buenas tardes"));
console.log(palindromo("Ojo rojo"));