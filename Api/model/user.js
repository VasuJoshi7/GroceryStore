const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    // address: {
    //     type: String
    // },
    // isActive: {
    //     type: Boolean,
    //     defaulta: true
    // },
    createdDate: {
        type: Date,
        default: Date.now
    }
    ,
    role:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User', userSchema);