function changeText(){
    document.getElementById("message").innerText = "This text is changed with the help of JS."
}

function changeColor(){
    document.getElementById("message").style.color = "green"
}

function showText(){
    let name = document.getElementById("name").value;
    document.getElementById("title").innerText = "Hello, " + name;
}