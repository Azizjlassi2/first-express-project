const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            required:[true,"Email is required"], // message d'error
            unique:true

        },
        age:{
            type:Number
        },
        created_at:{
            type:Date,
            default:Date.now(),
        }
        
    }
)

const User = mongoose.model("User",userSchema)

module.exports = User
