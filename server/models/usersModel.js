const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, "A user must have an login"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "A user must have an password"]
    }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;