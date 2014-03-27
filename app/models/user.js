var mongoose = require("mongoose");

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
	name: {
		first: {
			type: String
		},
		last: {
			type: String
		}
	}
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
