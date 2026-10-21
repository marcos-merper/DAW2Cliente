let a = [1, 2, 3, 4];

let f1 = (a) => {
    return a.map(x => x * 3).filter(x => x % 4 == 0);
}
console.log(f1(a));

let f2 = (a) => {
    a.filter(x => x % 2 != 0).forEach(x => console.log(x));
};
f2(a);

let f3 = (a) => {
    return a.filter((_,i) => i % 2 == 0).reduce((ac, n) => ac + n, 0);
};
a.reduce
console.log(f3(a));