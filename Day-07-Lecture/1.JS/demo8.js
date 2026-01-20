//Array Operations

let names = ["Rohan", "Aditya", "Nilesh"];

console.log(names)

//Add elements at end of array => Push
names.push("Yogesh");
names.push("Snehal");

console.log(names)

//Delete & Insert element => Splice method
names.splice(1,2, "Aniket", "Vrushabh")
console.log(names)

//Pop => removes last element from array
names.pop();
console.log(names)

//at() => Access element
console.log(names.at(3));
console.log(names.at(-1));

//Filter => finding
let longName = names.filter(names => names.length > 5)
console.log(longName);

//Map => Transform each element
let upperNames = names.map(names => names.toUpperCase())
console.log(upperNames);
