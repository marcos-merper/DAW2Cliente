//Comprobar que la cadena empieza con hello
console.log(/^hello/.test('hola mundo')); //Falso
//Comprobar que la cadena termina por world
console.log(/world&/.test('hola mundo')); //Falso
//Comprobar que la cadena empieza por h y acaba por o con cualquier cosa en medio (0 o mas caracteres)
console.log(/^h.*o$./.test('hola mundo')); //True
//Comprobar que la cadena comienza por un numero del 0 al 9
console.log(/^[0-9]/.test('hola mundo')); //Falso
//Comprobar que la cadena contiene un caracter dentro del rango u-V
console.log(/[u-v]/.test('hola mundo')); //True

console.log(/[^0-9]/.test('hola mundo')); //True
console.log(/^[^0-9].*[^a-n]$/.test('hola mundo')); //True
