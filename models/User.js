const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You must provide a username!',
        trim: true
    },
    email: {
        type: String,
        required: 'Your must provide an email!',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
})

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;

