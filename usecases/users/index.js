const User = require("../..models/users").model //Va y busca la estructura del model users

const get = async () =>{
    const allUsers = await User.find({}).exec()
    return allUsers
}

