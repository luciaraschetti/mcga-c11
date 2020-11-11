require('../connection');
const User = require('../models/User');

const someFunction = async () => {
    const result = await User.findOneAndDelete({firstName:'David'})
}

someFunction();