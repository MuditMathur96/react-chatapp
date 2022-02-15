import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        unique:true,
        trim:true
    },
    username:{
        type:String,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
    }


},{timestamps:true});

export default mongoose.model("User",userSchema);