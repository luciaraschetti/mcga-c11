require('../connection');
const User = require('../models/User');

async function getUser() {
    const user = await User.findOne({firstName:'Fausto'})
    console.log(user)
}   

getUser();