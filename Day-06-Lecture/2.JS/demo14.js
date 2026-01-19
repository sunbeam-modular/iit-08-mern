//Higher Order Functions in JavaScript

function arithmetic(fn){
    let result = fn(10, 5);
    console.log(`Result: ${result}`);
}

arithmetic(function(a, b){
    return a + b;
});

arithmetic((a, b) => {return a - b});

arithmetic((a, b) => a * b);

arithmetic((a, b) => a / b);