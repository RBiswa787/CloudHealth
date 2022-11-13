const db = require("../models");
const Patient = db.patient;

exports.create = (req, res) => {
    if (!req.body.username) {
        res.statusCode = 400;
        return res.send({message: "Username cannot be empty!"});
    }

    const patient = new Patient({
        username: req.body.username,
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        blood_group: req.body.blood_group,
        gender: req.body.gender,
        contacts: req.body.contacts,
        photo_url: req.body.photo_url
    });

    Patient.findOne({username: patient.username})
        .then(
            data => {
                if (!data) {
                    patient
                        .save(function (err, data) {
                            if (err) {
                                res.statusCode = 500;
                                return res.send({message: err});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                } else {
                    res.statusCode = 203;
                    res.send({message: "User already exists with username " + patient.username});
                }
            }
        )
};

exports.update = (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        dob: req.body.dob,
        email: req.body.email,
        blood_group: req.body.blood_group,
        gender: req.body.gender,
        contacts: req.body.contacts,
        photo_url: req.body.photo_url
    });
    Patient.findOneAndUpdate({username: req.body.username}, {
        $set: {
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            blood_group: req.body.blood_group,
            gender: req.body.gender,
            contacts: req.body.contacts,
            photo_url: req.body.photo_url
        }
    })
        .then(res.send("Updated Successfully!"))
        .catch((err) => {
            res.statusCode = 501;
            res.send(err.message);
        })


};

exports.get = (req, res) => {
    Patient.findOne({username: req.body.username})
        .then(data => {
                if (!data) {
                    res.statusCode = 203;
                    return res.send({message: "Not found User with username " + req.body.username});
                } else {
                    return res.send(data);
                }
            }
        )
        .catch(err => {
            res.statusCode = 500;
            res.send({message: err.message});
        });
};