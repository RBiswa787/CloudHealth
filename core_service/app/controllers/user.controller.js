// const { mongoose } = require("../models");
const db = require("../models");
const User = db.user;

exports.create = (req,res) => {
    console.log("Entered")
    console.log(req)
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

exports.updateToken = (req,res) => {
    if(!req.body.username){
        res.statusCode = 400;
        return res.send({message: "Username cannot be empty!"});
    }
    if(!req.body.token){
        res.statusCode = 400;
        return res.send({message: "Token cannot be empty!"});
    }
    User.findOneAndUpdate({username:req.body.username},{token:req.body.token})
    .then(res.send({message: "Successfully updated token!"}))
    .catch(
        err => {
            res.statusCode = 500;
            return res.send({message: err.message});
        }
    );
}



