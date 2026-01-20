//Iterating array on index

const arr = [10,20,30,40,50];

//index based for loop
for(let i = 0; i < arr.length; i++){
        console.log(`Element = ${arr[i]}`);
}

//for of loop
for(let e of arr){
    console.log(`Element : `, e)
}