const mongoose= require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({
    firstname : {
        type : String,
        required: true,
        minLength: 4
    },
    lastname : {
        type : String,
        required: true,
        minLength: 4
    },
    isActive: {
        type: Boolean,
        default: false
    }
});

const User= mongoose.model('user', userSchema);
module.exports= User ;

