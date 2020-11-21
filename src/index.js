require('./connection')
const express = require('express');
const app = express();
const morgan = require('morgan');
const User = require('./models/User');

//PROBANDO PROBAN2

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/games',require('./routes/games'));
app.use('/api/tournaments',require('./routes/tournaments'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});

const user = new User({
    id : 0,
    firstName : 'Fausto',
    lastName : 'Azzaretti',
    email : 'faustoazzaretti95@gmail.com',
    password : 'uai2020',
    birthday : 14/01/1995,
    govIdType : 'Dni',
    govIdNumber : 38588565,
    country : 'Argentina',
    city : 'Rosario',
    phoneNumber : 3407494491,
    avatar : 'https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/107.png',
    role : 'Superadmin',
    rating : 'Good',
    status : 'Activo'
})

user.save((err,document)=> {
    if(err) console.log(user);
    console.log(document);
})

console.log(user)