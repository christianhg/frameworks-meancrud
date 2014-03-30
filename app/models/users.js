var mongoose = require("mongoose");
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
	username: {
		type: String,
        trim: true
	},
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String
    },
	provider: {
		type: String,
		required: 'Provider is required'
	},
	salt: {
		type: String
	},
	name: {
		first: {
			type: String
		},
		last: {
			type: String
		}
	},
	created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.pre('save', function(next) {
	if(this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}

	next();
});

UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

var User = mongoose.model("User", UserSchema);
module.exports = User;
