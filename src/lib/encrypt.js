const bcrypt = require ("bcryptjs");

const SALT_ROUNDS = 10;

function encrypt(txt) {
    return bcrypt.hash(txt, SALT_ROUNDS);
};

function compare(plaintTxt, hash) {
    return bcrypt.compare(plaintTxt,hash);
};

module.exports = {
    encrypt,
    compare
}