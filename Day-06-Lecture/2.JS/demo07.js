//Default Parameters
function add(x = 1, y, z = 1){
    let sum = x + y + z;
    console.log(`Sum : ${x} + ${y} + ${z} = ${sum}`);
}

add(5, 3, 2)
add(5)
add(3, 4)