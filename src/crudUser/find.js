require('../connection')
const User = require('../models/User');

async function main() {
    const users =  await User.find()
    console.log(users)
}

main()