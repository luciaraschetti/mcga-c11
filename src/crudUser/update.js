require('../connection');
const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({firstName:'David'});
    user.password = 'nuevapassparadavid';
    user.save();
}

async function updateUsers() {
    const user = await User.update({firstName:'Fausto'},{
        password: 'contrasenasegura'
    })
    console.log(user)
}   

someFunction();