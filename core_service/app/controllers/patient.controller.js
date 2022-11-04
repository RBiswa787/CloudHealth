const db = require("../models");
const Patient = db.patient;

exports.create = (req,res) => {
    console.log("Entered")
    console.log(req)
    if(!req.body.username){
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
                if(!data){
                    patient
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
                    res.send({ message: "User already exists with username " + patient.username});
                }
            }
        )
};