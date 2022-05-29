const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required "]
    },
    login: {
        type: String,
        // required: [true, "A user must have a login"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, "A user must have a password"],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password!"],
        validate: {
            validator: function(el) {
                return el === this.password;
            },
            massage: "Passwords are not the same!"
        }
    }
});

usersSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    this.passwordConfirm = undefined;
    next();
});

usersSchema.methods.checkPassword = async function(
    candidatePassowrd,
    userPassword
){
    return await bcrypt.compare(candidatePassowrd, userPassword);
}

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;