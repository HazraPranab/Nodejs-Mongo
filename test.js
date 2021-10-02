
/*const { stdin, stdout } = require('process');
const rl= require('readline');

var readl= rl.createInterface(stdin,stdout);

readl.question("Please Enter Your Name?", (name)=> 
{
    //console.log("You have entered : " +name);
   // read1.promt();
    readl.question(`${name}, How old are u?` ,(age)=> 
    {
        if(age >= 18)
            console.log(`${name} your registration is successfull. Enjoy ...!`);
        else
            console.log(`Sorry !!..Cant allow u in , because You are ${age} years old`);
        readl.close();
    })
   
})*/

// var nam = "pranab";
// var new_name= nam.toUpperCase();
// console.log(new_name);

const my_module= require('./exportmodule');
//console.log(my_module.sum(11,11));
//console.log(my_module.text);
console.log(my_module.obj);
