let factorial = (n, res = 1) => {
    if(n == 1){
        return res;
    }
    else{
        return factorial(n - 1, n * res);
    }
}

console.log(factorial(5));