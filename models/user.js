const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let user ;

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        min :6,
        max:15
    },
    password :{
        type: String,
        required:true
    },
    email :{
        type: String,
        required:true
    },
   
     roles:[
        {type:mongoose.Schema.Types.ObjectId,ref: 'Role'}
     ]});

     
          
             user= mongoose.model('User', UserSchema)
             module.exports= user;