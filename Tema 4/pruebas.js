const c = [10, 20, 30];

c.reduce((ac) => {
	console.log(ac);
	return ac;
});

console.log(c.reduce(hacerFelizALaura));

function hacerFelizALaura(ac, n, i, a){
    return ac + n + i + a[2];
}