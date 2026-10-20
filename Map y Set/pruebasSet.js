let setPaises = new Set();

setPaises.add("Spain");
setPaises.add("Germany");
setPaises.add("Japan");
setPaises.add("Norway");
setPaises.add("France");

console.log("Hay " + setPaises.size + " paises");

setPaises.delete("France");

console.log(setPaises.has("Spain"));

for(let pais of setPaises.values()) {
    console.log(pais);
}

setPaises.clear();