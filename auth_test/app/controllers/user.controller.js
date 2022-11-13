// const { mongoose } = require("../models");
const db = require("../models");
const User = db.user;



function makeToken(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

exports.create = (req,res) => {
    if(!req.body.username){
        res.statusCode = 400;
        return res.send({message: "Username cannot be empty!"});
    }
    if(!req.body.password){
        res.statusCode = 400;
        return res.send({message: "Password cannot be empty!"});
    }
    const user = new User({
        username: req.body.username,
        password : req.body.password,
        isDoctor: req.body.isDoctor,
    });

    User.findOne({username: user.username})
        .then(
            data => {
                if(!data){
                    user
                        .save(function(err,data){
                            if(err){
                                res.statusCode = 500;
                                return res.send({message: err.message});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                }
                else{
                    res.statusCode = 203;
                    res.send({ message: "User already exists with username " + user.username});
                }
            }
        )
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    let condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

    User.find(condition)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            res.statusCode = 500;
            return res.send({
                message:
                    err.message || "Some error occurred while retrieving users."
          });
        });
};

exports.findOne = (req, res) => {
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [credusername, credpassword] = credentials.split(':');
    User.findOne({username: credusername})
        .then(data => {
            if (!data) {
                res.statusCode = 203;
                return res.send({message: "Not found User with username " + credusername, access: null});
            }
            else{
                if(data.password === credpassword){
                    const access_token = makeToken(20);
                    User.findOneAndUpdate({username:credusername},{token:access_token})
                        .catch(
                            err => {
                                res.statusCode = 500;
                                return res.send({message: err.message});
                            }
                        );
                    res.statusCode = 200;
                    return res.send({message: "Found",access:access_token,isDoctor:data.isDoctor});
                }
                else{
                    res.statusCode = 203;
                    return res.send({message: "User found but password incorrect", access:null});
                }
            }
        })
        .catch(err => {
            res.statusCode = 500;
            res.send({ message: err.message});
        });
};

exports.signOut = (req,res) => {
    User.findOneAndUpdate({username:req.body.username},{token:null})
        .then(res.send({message: "Successfully signed out!"}))
        .catch(
            err => {
                res.statusCode = 500;
                return res.send({message: err.message});
            }
        );
};