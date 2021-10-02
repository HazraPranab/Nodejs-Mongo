const http= require('http');
const fs= require('fs');

http.createServer((req,res) =>
{
    
    res.writeHead(200, "Success", {'Content-Type': 'text/html'});
    res.write("Test", ()=>{});
    res.end();
    
}).listen(4333)

console.log("Server is up !!");