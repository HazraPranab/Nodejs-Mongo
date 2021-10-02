const fs= require('fs');

date = new Date().toString(); 

// fs.writeFile(`./log.txt` , 'My first log in Node.js \n','UTF-8',(err)=> 
// {
//     if(err)
//     {
//         console.log(err);
//         return err;
//     }
//     console.log("New File Created");
// });

// fs.appendFile('./log.txt', `Appended log for ${date}`, (err) =>
// {
//     if(err)
//     {
//         console.log(err);
//         return err;
//     }
//     console.log("Log is working");
// });

// fs.readFile('./log.txt', 'utf-8',(err,data)=>
// {
//     if(err)
//     {
//         throw err;
//     }
//     else
//     {
//         console.log(data);
//     }
// });

// buffer= fs.readFileSync('./log.txt', 'utf-8');
// console.log(buffer);


// try{
// fs.renameSync('./myDir/log.txt', './log1.txt');
// console.log("Succesfully renamed");
// }
// catch(ex)
// {
//     console.log('Got a error', ex.message);
// }

fs.rename('./log1.txt', './myDir/log.txt', (err)=>{
    if(err)
        throw err;
    console.log("File Copied Succesfully");
})

