require('./connection')
const User = require('./models/User');

async function main() {
    const user = new User({
        id : 1,
        firstName : 'David',
        lastName : 'Curras',
        email : 'davidcurras@gmail.com',
        password : 'uai2020',
        birthday : 14/01/1995,
        govIdType : 'DNI',
        govIdNumber : 32556985,
        country : 'Argentina',
        city : 'Rosario',
        phoneNumber : 3414587452,
        avatar : 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/107.png',
        role : 'Superadmin',
        rating : 'Good',
        status : 'Activo'
    })
    
    const userSaved = await user.save();
    return userSaved;
}

main()
    .then(userSaved => console.log(userSaved))
    .catch(err => console.log(err))
