// ===== Funciones de repetición que iteran en arrays =====
// Reciben una función como parámetro (típicamente una función flecha)
// y se pueden encadenar (Fluent API / Chaining).

// --- forEach(): itera por cada elemento (no devuelve nada) ---
let letras = ['a', 'b', 'c'];
letras.forEach(function (e) {
  console.log(e); // a, b, c
});
letras.forEach(e => console.log(e.toUpperCase())); // A, B, C (versión flecha)

// --- map(): devuelve un NUEVO array con cada elemento transformado ---
let nums = [1, 2, 3];
console.log(nums.map(e => e + 1)); // [2, 3, 4]
console.log(nums.map(e => e * 10)); // [10, 20, 30]

// --- reduce(): reduce el array a UN solo valor (de izquierda a derecha) ---
// (acumulador, elemento) => nuevoAcumulador; 0 es el valor inicial
console.log(nums.reduce((acc, e) => acc + e, 0)); // 6 (suma)
console.log(['a', 'b', 'c'].reduce((acc, e) => acc + e, '')); // "abc"

// --- reduceRight(): igual que reduce() pero de derecha a izquierda ---
console.log(['a', 'b', 'c'].reduceRight((acc, e) => acc + e, '')); // "cba"

// --- filter(): nuevo array solo con los elementos que cumplen la condición ---
let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.filter(e => e % 2 === 0)); // [2, 4, 6] (pares)
console.log(numeros.filter(e => e > 4)); // [5, 6]

// --- every(): true si TODOS los elementos cumplen la condición ---
console.log(numeros.every(e => e > 0)); // true
console.log(numeros.every(e => e > 3)); // false

// --- some(): true si ALGUNO cumple la condición ---
console.log(numeros.some(e => e > 5)); // true
console.log(numeros.some(e => e > 10)); // false

// --- find(): devuelve el PRIMER elemento que cumple, o undefined ---
console.log(numeros.find(e => e > 3)); // 4
console.log(numeros.find(e => e > 10)); // undefined

// --- findIndex(): devuelve el ÍNDICE del primero que cumple, o -1 ---
console.log(numeros.findIndex(e => e > 3)); // 3 (el 4 está en la posición 3)
console.log(numeros.findIndex(e => e > 10)); // -1

// --- Encadenamiento (Fluent API): varias funciones seguidas ---
// Pares -> multiplicados por 2 -> sumados
let resultado = numeros
  .filter(e => e % 2 === 0) // [2, 4, 6]
  .map(e => e * 2) // [4, 8, 12]
  .reduce((acc, e) => acc + e, 0); // 24
console.log(resultado); // 24