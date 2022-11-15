const db = require("../models");
const Appointment = db.appointments;

exports.create = (req, res) => {
    if (!req.body.appointmentId) {
        res.statusCode = 400;
        return res.send({message: "Appointment ID cannot be empty!"});
    }

    const appointment = new Appointment({
        appointmentId: req.body.appointmentId,
        patientUsername: req.body.patientUsername,
        doctorUsername: req.body.doctorUsername,
        date: req.body.date,
        time: req.body.time,
        patient: req.body.patient,
        doctor: req.body.doctor,
        spec: req.body.spec,
        request: req.body.request,
        meetlink: req.body.meetlink
    });

    Appointment.findOne({appointmentId: appointment.appointmentId})
        .then(
            data => {
                if (!data) {
                    appointment
                        .save(function (err, data) {
                            if (err) {
                                res.statusCode = 500;
                                return res.send({message: err});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                } else {
                    res.statusCode = 501;
                    return res.send({message: "Appointment ID already present!"});
                }
            }
        )
};

exports.get = (req, res) => {
    if(!req.body.appointmentId){
        res.statusCode = 400;
        return res.send({message: "Appointment ID cannot be empty!"});
    }
    Appointment.findOne({appointmentId: req.body.appointmentId})
        .then(
            data => {
                if(!data){
                    res.statusCode = 501;
                    return res.send({message: "Appointment ID not present"});
                }
                else{
                    res.send(data);
                }
            }
        )
}

exports.filter = (req,res) => {
    if(!req.body.appid){
        res.statusCode = 400;
        return res.send({message: "Appointment IDs cannot be empty"});
    }
    Appointment.find({appointmentId: {$in: req.body.appid}})
    .then(
        data => {
            res.send(data);
        }
    )
}

exports.updateRequest = (req, res) => {
    Appointment.findOneAndUpdate({appointmentId: req.body.id}, {
        $set: {
            request: req.body.request
        }
    })
        .then(res.send("Updated Successfully!"))
        .catch((err) => {
            res.statusCode = 501;
            res.send(err.message);
        })


};