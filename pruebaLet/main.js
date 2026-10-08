let a = 1;

(function f() {
    let a = 2;
    console.log(a);
    if (true) {
        let a = 3;
        console.log(a);
    }
    console.log(a);
    let a = 4;
    console.log(a);
})();