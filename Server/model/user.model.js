const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
    name :{
        type : String,
        require : true
    },

    email : {
        type : String,
        unique : true,
        require : true
    },

    mobile :{
        type : String,
        require : true,
       
    },

    password :{
        type : String,
        require : true,
        set: (v) => bcrypt.hashSync(v, salt)
    },

    image: {
        type: String,
        default : 'null'
    },
 
    gender :{
        type : String, 
        default: 'undefiend'
    },

    profession :{
        type : String,
        default: 'undefiend'
    },

    isBanned: {
        type : Boolean,
        default: false
    },

    createdOn :{
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

exports.User = mongoose.model("User", userSchema );

