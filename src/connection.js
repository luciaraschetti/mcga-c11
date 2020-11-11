const mongoose = require('mongoose');
const uri = 'mongodb+srv://esports-platform:uai2020@cluster0.qcutj.mongodb.net/test?retryWrites=true&w=majority'
const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
    .catch(err=> console.log(err))

db.once('open', _ => {
    console.log('Conectado a la base de datos de eSports-Platform')
})

db.on('error', err => {
    console.log(err)
})