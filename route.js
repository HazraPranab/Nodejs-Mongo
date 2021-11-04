const express= require('express');
const mongoose= require('mongoose');
const User = require('./model/User');

const app= express();
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb://127.0.0.1:27017/User');
mongoose.connection
        .once('open', () => console.log('CONNECTED'))
        .on('error', (err)=> console.log('Could not connect' + err));



//Get Users
app.get('/getUsers', (req, res)=>
{
    User.find({}).then(users=> {
        res.send(users);
    })
});

//Get Users by Id
app.get('/getUsers/:id', (req, res)=>
{
    User.find({"_id": req.params.id}).then(users=> {
            res.send(users);
    }).catch(err=> res.send(`Some Error ! ${err}`));
});


//Post Users
app.post('/saveUsers', (req, res)=>{
        const newUser= new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            isActive: 1
        });
        newUser.save().then(savedUser=>
            {
                res.send("User Saved Successfully !!");
            }).catch(err => {
                res.send(`Some error occureed ${err}`);
            });
});

//Patch Users

app.patch('/updateUser/:id', (req,res)=>
{
    const id= req.params.id;
    let frstname= req.body.firstname;
    User.findOneAndUpdate({_id: id}, {$set: {firstname:frstname}}, {new: true})
    .then(savedUser=> {
        res.send("User Updated Successfully !!");
    }).catch(err => {
                res.send(`Some error occureed ${err}`);
    });
});

//Put Users
app.put('/updateUser', (req,res)=>
{
    let id= req.body._id;
    let frstName= req.body.firstname;
    let lstName= req.body.lastname;

    User.findOne({_id: id}).then(user=>
    {
       user.firstname = frstName;
       user.lastname = lstName;

       user.save().then(userSaved=> {
           res.send('User Updated successfully!!')
       });
    }).catch(err => {
            res.send(`Some error occureed ${err}`);
    });
})

//Delete User
app.delete('/deleteUser/:id', (req,res)=>
{
    const id= req.params.id;
    
    User.findOneAndRemove({_id: id})
    .then(savedRemoved=> {
        res.send("User Deleted Successfully !!");
    }).catch(err => {
        res.send(`Some error occureed ${err}`);
    });
});

app.listen(4444, ()=>
'Listening to port 4444'
);

