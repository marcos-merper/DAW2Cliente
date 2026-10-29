const LIBRO1 = {
	nombre: "Harry Potter y la Piedra Filosofal",
	color: "Verde",
	autor: "JK Rowling",
	numPaginas: 432,
	editorial: "Wizarding World",
	forrado: false,
	urlCover: "https://imagessl2.casadellibro.com/a/l/t5/52/9788478884452.jpg",
	comprar: function () {
		console.log(`Libro de aventuras del autor ${this.autor} comprado`);
	},
	toString: `${this.nombre}-${this.autor}(${this.numPaginas})**${this.forrado}`,
};

const LIBRO2 = {
	nombre: "Orgullo y Prejuicio",
	color: "Azul",
	autor: "Jane Austen",
	numPaginas: 234,
	editorial: "Alma Clásicos Ilustrados",
	forrado: true,
	urlCover:
		"https://m.media-amazon.com/images/I/71wnBzT9WqL._AC_UF1000,1000_QL80_.jpg",
	comprar: function () {
		console.log(`Libro de aventuras del autor ${this.autor} comprado`);
	},
	toString: `${this.nombre}-${this.autor}(${this.numPaginas})**${this.forrado}`,
};

const LIBRO3 = {
	nombre: "Hamlet",
	color: "Morado",
	autor: "William Shakespeare",
	numPaginas: 195,
	editorial: "Alma Clásicos Ilustrados",
	forrado: false,
	urlCover:
		"https://www.abacus.coop/dw/image/v2/BDLM_PRD/on/demandware.static/-/Sites-AbacusMaster/default/dwe46f62ab/images/large/1565797.17.jpg?sw=740%22",
	comprar: function () {
		console.log(`Libro de aventuras del autor ${this.autor} comprado`);
	},
	toString: `${this.nombre}-${this.autor}(${this.numPaginas})**${this.forrado}`,
};

const LIBRO4 = {
	nombre: "El Principito",
	color: "Azul oscuro",
	autor: "Antoine de Saint-Expéry",
	numPaginas: 96,
	editorial: "Alma",
	forrado: true,
	urlCover:
		"https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/681b63dd7d9dbb4c4ce5ae76_WJlUnXLgNrZqh3HN_u7WMEnTVs1tV0qKwtUkvXJ2JTk.jpeg%22",
	comprar: function () {
		console.log(`Libro de aventuras del autor ${this.autor} comprado`);
	},
	toString: `${this.nombre}-${this.autor}(${this.numPaginas})**${this.forrado}`,
};

let biblioteca = [LIBRO1, LIBRO2, LIBRO3];

console.log("----- FOREACH BIBLIOTECA -----");
biblioteca.forEach((libro) => toString(libro));

for (let bib of biblioteca) {
	console.log(bib.editorial);
}

biblioteca.forEach((libro) => libro.comprar());

// let checkPages = (libro) => {
//     if(libro.numPaginas > 150){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

let checkPages = (libro) => libro.numPaginas > 150;

console.log("----- FUNCIÓN checkPages() -----");
console.log(checkPages(LIBRO1)); // true
console.log(checkPages(LIBRO2)); // true
console.log(checkPages(LIBRO3)); // true
console.log(checkPages(LIBRO4)); // false

console.log("----- FUNCIÓN checkLibro() -----");
let checkLibro = (biblio, libroNombre) =>
	biblio.some((libro) => libro.nombre == libroNombre);
console.log(checkLibro(biblioteca, "Harry Potter y la Piedra Filosofal"));
console.log(checkLibro(biblioteca, "Libro No Existente"));

// let checkLibro1 = (biblio, libroNombre) => biblio.find(libro => libro.nombre == libroNombre);
let checkLibro1 = (biblio, libroNombre) =>
	biblio.find((libro) => libro.nombre == libroNombre) ? true : false;
console.log(checkLibro1(biblioteca, "Harry Potter y la Piedra Filosofal"));
console.log(checkLibro1(biblioteca, "Libro No Existente"));

console.log("----- foreach antes -----");
for (let bib of biblioteca) {
	console.log(bib.nombre);
}

console.log("----- foreach después -----");

biblioteca = [...biblioteca, LIBRO4];

for (let bib of biblioteca) {
	console.log(bib.nombre);
}

console.log("----- FUNCIÓN checkPaginas() -> filter() -----");

// let checkPaginas = (biblioteca) => biblioteca.filter(libro => checkPages(libro));
// let checkPaginas = (biblioteca) => biblioteca.filter(checkPages); -> también funciona
let librosLargos = biblioteca.filter((libro) => checkPages(libro));

librosLargos.forEach((libro) => {
	console.log(libro.nombre);
});

console.log("----- FUNCIÓN checkAutor() -> find() -----");
let checkAutor = (autorNombre, biblio) =>
	biblio.find((libro) => libro.autor == autorNombre);
console.log(checkAutor("Jane Austen", biblioteca)); // Existe - libro
console.log(checkAutor("Autor no existente", biblioteca)); // No existe - undefined

checkAutor = (autorNombre, biblio) =>
	biblio.find((libro) => libro.autor == autorNombre) ? true : false;
console.log(checkAutor("Jane Austen", biblioteca)); // Existe - true
console.log(checkAutor("Autor no existente", biblioteca)); // No existe - false

console.log("----- FUNCIÓN forraLibro() -----");
let forraLibro = (biblio) => biblio.map((libro) => (libro.forrado = true));
forraLibro(biblioteca);

biblioteca.forEach((libro) => {
	console.log(libro.forrado);
});

// Pasar un libro y eliminarlo
let prestarLibro = (biblio, nombreLibro) => {
	biblio.findIndex((libro) => libro.nombre === nombreLibro);
	if (indice !== 1) {
		biblio.splice(indice, 1);
	}
};
prestarLibro(biblioteca, "Harry Potter y la Piedra Filosofal");

biblioteca.forEach((libro) => {
	console.log(libro.nombre);
});

// devolver el libro
