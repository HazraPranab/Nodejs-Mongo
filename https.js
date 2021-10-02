const https= require('https');
const fs= require('fs');
var url= "https://jsonplaceholder.typicode.com/posts";
https.get(url, res=>
    {
        res.setEncoding('utf-8');
        var body = '';
        res.on('data', data=> 
        {
            //body += (data); 
            body += data;
            
            
            
        });
        res.on('end', ()=>
        {
            //body= JSON.parse(body);
            //console.log(body);
            
            fs.writeFile('./data.json',body,(err)=>{
                if(err) throw err;
                console.log("Data is in file");
            })
            

        })
        //console.log(body);
        
    });