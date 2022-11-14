const db = require("../models");
const Doctor = db.doctor;

exports.create = (req,res) => {
    if(!req.body.username){
        res.statusCode = 400;
        return res.send({message: "Username cannot be empty!"});
    }

    const doctor = new Doctor({
        username: req.body.username,
        name: req.body.name,
        reg_no: req.body.reg_no,
        specialisation: req.body.specialisation,
        dob: req.body.dob,
        experience: req.body.experience,
        email: req.body.email,
        contact: req.body.contact,
        qualification: req.body.qualification,
        gender: req.body.gender,
        description: req.body.description,
        photo_url: req.body.photo_url,
        slots: req.body.slots,
        booked: req.body.booked
    });

    Doctor.findOne({username: doctor.username})
        .then(
            data => {
                if(!data){
                    doctor
                        .save(function(err,data){
                            if(err){
                                res.statusCode = 500;
                                return res.send({message: err});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                }
                else{
                    res.statusCode = 203;
                    res.send({ message: "User already exists with username " + doctor.username});
                }
            }
        )
};

exports.update = (req,res) => {
    const doctor = new Doctor({
        name: req.body.name,
        reg_no: req.body.reg_no,
        specialisation: req.body.specialisation,
        dob: req.body.dob,
        experience: req.body.experience,
        email: req.body.email,
        contact: req.body.contact,
        qualification: req.body.qualification,
        gender: req.body.gender,
        description: req.body.description,
        photo_url: req.body.photo_url,
        slots: req.body.slots
    });
    Doctor.findOneAndUpdate({username:req.body.username},{$set: {
        name: req.body.name,
        reg_no: req.body.reg_no,
        specialisation: req.body.specialisation,
        dob: req.body.dob,
        experience: req.body.experience,
        email: req.body.email,
        contact: req.body.contact,
        qualification: req.body.qualification,
        gender: req.body.gender,
        description: req.body.description,
        photo_url: req.body.photo_url,
        slots: req.body.slots
    }})
    .then(res.send("Updated Successfully!"))
    .catch((err) => {res.statusCode = 501;
    res.send(err.message); 
    })
    
    
};

exports.get = (req, res) => {
    Doctor.findOne({username: req.body.username})
        .then(data => {
            if (!data) {
                res.statusCode = 203;
                return res.send({message: "Not found User with username " + req.body.username});
            }
            else{
                return res.send(data);
                }
            }
        )
        .catch(err => {
            res.statusCode = 500;
            res.send({ message: err.message});
        });
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    let condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};

    Doctor.find(condition)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            res.statusCode = 500;
            return res.send({
                message:
                    err.message || "Some error occurred while retrieving doctors."
          });
        });
};

exports.updateBooking = (req,res) => {
    Doctor.findOneAndUpdate({username:req.body.username},{$set: {
        booked: req.body.booked
    }})
    .then(res.send("Updated Successfully!"))
    .catch((err) => {res.statusCode = 501;
    res.send(err.message); 
    })
    
    
};