//Functions

//Types of Functions 1. Parameterized Function 2. Non-Parameterized Function

//1. Non-Parameterized Function
function f1(){
    console.log("Non-Parameterized Function");
}

f1(); //Function Call

//2. Parameterized Function
function f2(name,age){
    console.log("Parameterized Function");
    console.log("Name: " + name);
    console.log("Age: " + age); 
}

f2("John", 25); //Function Call with Arguments
f2("Bob"); //Function Call with some Argument