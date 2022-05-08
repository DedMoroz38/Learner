const User = require("../models/usersModel");
const bcrypt = require("bcryptjs");
 
exports.addUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.code
        })
    }
}

exports.getUser = async (req, res) => {
    try{
        let {login, password} = req.body;
        const user = await User.find({
            login: login
        });
        const hash = user[0].password;
        const result = await bcrypt.compare(password, hash);
        console.log(result);
        if (!result){
            throw 0
        }

        res.status(200).json({
            status: "success",
            data: { 
                result
            }
        });
    } catch(err) {
        res.status(401).json({
            status: 'fail',
            message: err
        })
    }
}