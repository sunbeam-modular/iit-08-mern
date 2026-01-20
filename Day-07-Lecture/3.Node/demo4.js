//Create server by importing http module

//1.Import http module
const http = require(`node:http`);


//2.create server
const server = http.createServer((req,res)=>{
    console.log(`new request`);
    console.log(`http method ${req.method}`);
    console.log(`http url ${req.url}`);

    res.end(`Hello from NodeJS...!`);
})


//3.start server
server.listen(3000,`0.0.0.0`, () =>{
    console.log(`server started on port no 3000`);
    
})


