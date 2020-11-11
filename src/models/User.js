const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    id : Number,
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    birthday : Date,
    govIdType : String,
    govIdNumber : String,
    country : String,
    city : String,
    phoneNumber : Number,
    avatar : String,
    role : String,
    rating : String,
    status : String
});

module.exports = model('User', userSchema)