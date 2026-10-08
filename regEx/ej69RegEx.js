const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur a sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let uno = texto.match(/\s[A-Za-z]{1}\s/g);
let dos = texto.match(/\s[A-Za-z]{2}\s/g);
let tres = texto.match(/\s[A-Za-z]{3}\s/g);
let cuatro = texto.match(/\s[A-Za-z]{4}\s/g);
let cinco = texto.match(/\s[A-Za-z]{5}\s/g);
let supCinco = texto.match(/\s[A-Za-z]{6,}\s/g);

console.log("Palabras de una letra: " + uno.length);
console.log("Palabras de dos letras: " + dos.length);
console.log("Palabras de tres letras: " + tres.length);
console.log("Palabras de cuatro letras: " + cuatro.length);
console.log("Palabras de cinco letras: " + cinco.length);
console.log("Palabras de más de cinco letras: " + supCinco.length);
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);
console.log(supCinco);
