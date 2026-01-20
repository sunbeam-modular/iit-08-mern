//Array Traversal
let names = ["Rohan", "Aditya", "Nilesh", "Vrushabh", "Snehal"];

console.log(`name at 2nd index: ${names[2]}`)

//Forward Traversal
for(let i = 0; i < names.length; i++){
    console.log(`fwd : ${names[i]}`);
}

//Backward Traversal
for(let i = 0; i < names.length; i++){
    console.log(`rev : ${names.at(-i - 1)}`);
}