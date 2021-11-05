const mongoose= require('mongoose');
const {Schema} = mongoose;

const LoginUserSchema= new Schema(
{
    email:{
        type: String,
        unique: true,
        trim: true,
        minlength: 4,
        required: true
    },
    UserName: {
        type: String,
        unique: true,
        trim: true,
        minlength: 4,
        required: true
    },
    Password:
    {
        type: String,
        minlength: 6,
        required: true
    }
    
});

const LoginUser= mongoose.model('login', LoginUserSchema);

module.exports= LoginUser;