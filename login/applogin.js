const express= require('express');
const app= express();
const mongoose= require('mongoose');
const LoginUser = require('./loginmodel');
const bodyParser= require('body-parser');
const bcrypt= require('bcrypt');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect('mongodb://127.0.0.1:27017/User');
mongoose.connection
        .once('open', () => console.log('CONNECTED'))
        .on('error', (err)=> console.log('Could not connect' + err));

//#region RegisterUser
app.post('/register', (req, res)=>
{
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(req.body.Password ,salt,(err,hash)=> {
            if(err) return err;
            const newUser= new LoginUser({
                email: req.body.email,
                UserName: req.body.UserName,
                Password: hash,
            });
            newUser.save().then(()=>
            {
                res.send('User Registration Successfull !!');
            }).catch((err)=> res.send(`Some error occuerd ${err}`));
                })
    })
})

//#endregion
 app.post('/login', (req, res)=>{
    LoginUser.findOne({email: req.body.email}).then(user=>{
        if(user)
        {
            bcrypt.compare(req.body.Password,user.Password, (err, matched)=>{
                if(err)
                    return err;
                if(matched)
                    res.send("Login Successfull !!");
                else    
                    res.send("Passsword is Incorrect !!");

            })
        }
        else{
            res.send("User does not exist !!");
        }
    }).catch(err=> `Some Error Occured ${err}`);
 })

app.listen('4441', ()=>
{
    console.log('Listening on 4441');
});