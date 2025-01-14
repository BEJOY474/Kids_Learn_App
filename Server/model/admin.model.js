const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    email : {
        type : String,
        unique : true,
        require : true
    },

    password :{
        type : String,
        require : true,
        // set: (v) => bcrypt.hashSync(v, salt)
    },


    createdOn :{
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

exports.Admin = mongoose.model("Admin", adminSchema );

