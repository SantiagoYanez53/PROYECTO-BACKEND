const createError = require("http-errors");
const encrypt = require ("../lib/encrypt");
const User = require ("../models/user.models");

async function create(userData) {
    const userFound = await User.findOne({ email: userData.email});

    if (userFound)  {
        throw createError(409, "Email already is use");
    }
    
    userData.password = await encrypt.encrypt(userData.password);
    const newUser = await User.create(userData);
    return newUser
};

async function getById(id){
    const user = await User.findById(id);
    return user;
}

module.exports = {
    create,
    getById
}