const express= require('express');

let app= express();

app.get('/' ,(req,res) =>
{
    res.send("<b> Home Page </b>");
    res.end();
});

app.get('/api' ,(req,res) =>
{
    let json= {"name" : "Pranab", "age": 25};
    //res.send("<b> API Page </b>");
    res.json(json);

    res.end();
});


app.get('/api/:id/:categoryId' ,(req,res) =>
{
    res.send(`
        Id is :  ${req.params.id}
        
        Category is :  ${req.params.categoryId}`
    );
    res.end();
});


app.listen(8888);

console.log("Server is up at 8888");
