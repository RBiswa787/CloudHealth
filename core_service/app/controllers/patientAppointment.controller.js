const db = require("../models");
const PatientAppointment = db.patientAppointment;

exports.createUpdate = (req, res) => {
    if (!req.body.patientUsername) {
        res.statusCode = 400;
        return res.send({message: "Patient username cannot be empty!"});
    }

    const appointment = new PatientAppointment({
        patientUsername: req.body.patientUsername,
        appointmentId: req.body.appointmentId,
    });

    PatientAppointment.findOne({patientUsername: appointment.patientUsername})
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
                    let listAppointments = data.appointmentId;
                    listAppointments.push.apply(listAppointments, appointment.appointmentId);
                    PatientAppointment.findOneAndUpdate({patientUsername: appointment.patientUsername}, {appointmentId: listAppointments})
                        .then(res.send({message: "Successfully Updated Appointments list"}))
                        .catch(err => {
                            res.statusCode = 500;
                            return res.send({message: err.message});
                        })
                }
            }
        )
};

exports.get = (req, res) => {
    if(!req.body.patientUsername){
        res.statusCode = 400;
        return res.send({message: "Patient username cannot be empty!"});
    }
    PatientAppointment.findOne({patientUsername: req.body.patientUsername})
        .then(
            data => {
                if(!data){
                    res.statusCode = 501;
                    return res.send({message: "Patient Username not present"});
                }
                else{
                    res.send(data);
                }
            }
        )
}