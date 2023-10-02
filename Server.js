



const http = require('http');


const server=http.createServer((req,res)=>{res.writeHead(200,{'content-Type':'text/html' })
res.end('<h1>Hello Node !!!</h1>\n');

});
const port=3000;
server.listen(port,()=>{
console.log(`Server running at http://localhost:${port}/`)

});

// const fs = require('fs');

// fs.writeFileSync('welcome.txt','Hello Node');

// const data=fs.readFilSync('welcome.txt' ,'utf8');
// console.log(data)















