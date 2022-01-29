const express= require('express');
const app= express();
const mongoose= require('mongoose');
const LoginUser = require('./loginmodel');
const bodyParser= require('body-parser');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');


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
                {
                    const token= jwt.sign({email: req.body.email, role: user.Role},'secret', {expiresIn: "1h"});
                    //user.token= token 
                    let obj = {
                        message:'Login Successfull !!',
                        token: token
                    }
                    res.status(200).json(obj);
                    //res.status(200).json(user);
                }
                else    
                    res.send("Passsword is Incorrect !!");

            })
        }
        else{
            res.send("User does not exist !!");
        }
    }).catch(err=> `Some Error Occured ${err}`);
 })

 app.get('/view', (req,res)=>
 {
     const token=req.headers["authorization"];
     //console.log(token);
     try{
        if(token)
        {
            const bearer= token.split(' ');
            const decoded= jwt.verify(bearer[1], 'secret');
            res.status(200).json(decoded);
        }
        else
        {
            res.status(401).send("Invalid Token");
        }
    }
    catch(err) { res.status(403).send(err)};
     
 });


app.listen('4441', ()=>
{
    console.log('Listening on 4441');
});

module.exports=app;