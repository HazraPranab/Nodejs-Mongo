const mongoose= require('mongoose');
const User = require('./model/User');
//const user= require('./model/User');

mongoose.connect('mongodb://127.0.0.1:27017/User');
mongoose.connection
        .once('open', () => console.log('CONNECTED'))
        .on('error', (err)=> console.log('Could not connect' + err));

const newUser = new User({
    firstname: 'Pranab',
    lastname : 'Hazra',
    isActive: true
});

newUser.save((err, data)=> 
{
    if(err) throw err;
    console.log('Data is Saved', data);
}
);