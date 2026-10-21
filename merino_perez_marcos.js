const TEXTO = "en un lugar de la mancha"
/* console.log(f4(TEXTO)); */
console.log(f5(TEXTO));
/* console.log(f6(TEXTO)); */




/* function f4(texto) {
    texto = texto.split(" ");
    texto = texto
    return texto.reduce((acc, e) => acc + e, '').map(e => e.replace(e.charAt(0), e.charAt(0).toUpperCase()));
} */

function f5(texto) {
    return texto.split(" ")
        .reduce((ac, n) => {
            console.log(ac); //0 2 4 9 11 13
            console.log(n.length); //2 2 5 2 2 6
            
            return ac + n.length; // 2 4 9 11 13 19
        }, 0) / texto.split(" ").length; // 24
}

/* function f6(texto) {
    return texto.split(" ").filter(e => e.includes("a")).map(e => e.length);
} */