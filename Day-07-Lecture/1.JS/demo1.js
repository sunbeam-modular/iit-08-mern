//JavaScript Object
const s1 = {} //Empty object
s1.name = "Anil"; //Adding Properties
s1.age = 35; //Adding Properties
console.log(s1) //Printing
console.log(`type of s1: ${typeof(s1)}`)

const s2 = {}
s2.name = "Ram";
s2.age = 25;
s2.mobile = "9877445566"
console.log(s2) //Printing

const s3 ={}
s3["name"] = "Suresh";
s3["age"] = 28;
console.log(s3) //Printing

//JSON 
const s5 = {
    "name" : "Om",
    "age" : 28,
    "canVote" : true,
    "skills" : ["CPP", "HTML", "JS", "MySQL" ]
}

s5.mobile = "9855664411"
s5["city"] = "Pune"

console.log(s5)