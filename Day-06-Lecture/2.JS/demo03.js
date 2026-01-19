//Data Types in JavaScript

// 1. Number => Integer + Flating point
let age = 25;
console.log(`Age: ${age}, Type of variable: ${typeof age}`);

let price = 19.99;
console.log(`Price: ${price}, Type of variable: ${typeof price}`);

// 2. String
let firstName = "Yogesh";
console.log(`First Name: ${firstName}, Type of variable: ${typeof firstName}`);

// 3. Boolean
let isLoggedIn = true;
console.log(`Is Logged In: ${isLoggedIn}, Type of variable: ${typeof isLoggedIn}`);

// 4. Undefined
let middleName;
console.log(`Middle Name: ${middleName}, Type of variable: ${typeof middleName}`);

// 5. Null
let lastName = null;
console.log(`Last Name: ${lastName}, Type of variable: ${typeof lastName}`);

let employeeList = {
    emp1: "Yogesh",
    emp2: "Amit",
    emp3: "Sonal"
};
console.log(`Employee List: ${JSON.stringify(employeeList)}, Type of variable: ${typeof employeeList}`);