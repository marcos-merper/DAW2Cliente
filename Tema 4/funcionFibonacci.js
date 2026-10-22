let fibonacci = (qty) => {
    let first = 0;
    let second = 1;
    console.log(second);
    for(let i = 0; i < qty - 1; i++){
        result = first + second;
        console.log(result);
        first = second;
        second = result;
    }
}

fibonacci(10);