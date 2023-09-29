const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');
const SALT_FACTOR = 10;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: false
    },

    lastName: {
        type: String,
        required: false
    }
})

userSchema.pre('save', function (next) {
    
    if(!this.isModified('password')) return next();

    bcrypt.hash(this.password, SALT_FACTOR, (err, hash) => {
        if(err) return next(err);

        this.password = hash;

        return next();
    })
});


module.exports = mongoose.model('User', userSchema);