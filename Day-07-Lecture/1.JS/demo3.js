//Constructor Function

function Student(name,age){
    this.name = name;
    this.age = age;
}

const s1 = new Student();
console.log(`type of s1 : ${typeof(s1)}`);
console.log(s1);

const s2 = new Student("John", 27);
console.log(s2);

const s3 = new Student("Harshit", 28);
s3.mobile = 9845631252;
s3["email"] = "harsh@gmail.com";

console.log(s3);
