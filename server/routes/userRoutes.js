const express = require('express');
const userController = require("../controllers/userController");
const authController = require("../controllers/userController");

const routes = express.Router();

routes.post('/login', userController.login);
routes.post('/signup', userController.signup);



module.exports = routes;