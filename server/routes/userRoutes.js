const express = require('express');
const {addUser, getUser} = require("../controllers/userController");

const routes = express.Router();

routes.route('/register')
    .post(addUser);

routes.route('/login')
    .post(getUser);


module.exports = routes;