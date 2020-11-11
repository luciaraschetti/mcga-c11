require('../connection');
const User = require('../models/User');

const createUsers = async () => {
    const user = new User({
        id : 3,
        firstName : 'Lucia',
        lastName : 'Raschetti',
        email : 'luhacker@gmail.com',
        password : 'uai2020',
        birthday : 14/01/1995,
        govIdType : 'DNI',
        govIdNumber : 32556985,
        country : 'Argentina',
        city : 'San Nicolas',
        phoneNumber : 3364785412,
        avatar : 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/107.png',
        role : 'Admin',
        rating : 'Good',
        status : 'Activo'
    })
    await user.save();
}   

createUsers();