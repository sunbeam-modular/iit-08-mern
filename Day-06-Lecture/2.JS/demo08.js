//Function Return

function add(a, b) {
    let sum = a + b;
    console.log(`Addition: ${a} & ${b} = ${sum}`);
}
// add(5, 10);
let result = add(5, 10);
console.log(`Result: ${result}`);

// The function 'add' does not return a value, so 'result' will be undefined.

//To fix this, we can add a return statement to the function:
function sum(a,b){
    let sum = a + b;
    return sum; 
}

let addition = sum(5, 10);
console.log(`Addition Result: ${addition}`);