/*
 * module dependencies
 */
var mongoose = require("mongoose");
var bcrypt = require('bcrypt-nodejs');

// user schema
var userSchema = new mongoose.Schema({
	local: {
        username: String,
        password: String
    }
});

// generate password hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
