const mongoose=require('mongoose')

const Formdata =mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        trim:true
    },
    Email:{
        type: String,
        required:true,
        trim:true
    },
    Number:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true,
        minlength:8
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Contact', Formdata)