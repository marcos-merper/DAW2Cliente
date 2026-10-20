let a = [1, 2, 3, 4];

let f1 = (a) => a.map(x => x * 3).filter(x => x % 4 === 0);
console.log(f1([1,2,3,4])); // [12]

let f2 = (a) => {
    a.filter(x => x % 2 !== 0).forEach(x => console.log(x));
};
f2(a);

const f3 = (a) => {
    let suma = 0;
    for (let i = 0; i < a.length; i += 2) {
        suma += a[i];
    }
    return suma;
};