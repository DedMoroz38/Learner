const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.signup = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const newUser = await User.create({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });

    const token = signToken(newUser._id);

    res.status(201 ).json({
        status: "success",
        token,
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync(async (req, res, next) => {
    let {login, password} = req.body;

    if(!login || !password) {
        return next(new AppError("Please provide login and password!", 400));
    }

    const user = await User.findOne({ login }).select("+password");

    if(!user || !(await user.checkPassword(password, user.password))){
        return next(new AppError("Incorrect email or password!", 401));
    }

    const token = signToken(user._id);
    res.status(200).json({
        status: "success",
        token
    });
});

exports.protect = catchAsync((req, res, next) => {
    next();
});