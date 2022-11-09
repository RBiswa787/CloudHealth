const db = require("../models");
const DoctorAppointment = db.doctorAppointment;

exports.createUpdate = (req, res) => {
    if (!req.body.doctorUsername) {
        res.statusCode = 400;
        return res.send({message: "Doctor username cannot be empty!"});
    }

    const appointment = new DoctorAppointment({
        doctorUsername: req.body.doctorUsername,
        appointmentId: req.body.appointmentId,
    });

    DoctorAppointment.findOne({doctorUsername: appointment.doctorUsername})
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
                    console.log(listAppointments)
                    listAppointments.push.apply(appointment.appointmentId);
                    console.log(appointment.appointmentId);
                    console.log(listAppointments)
                    DoctorAppointment.findOneAndUpdate({doctorUsername: appointment.doctorUsername}, {appointmentId: listAppointments})
                        .then(res.send({message: "Successfully Updated Appointments list"}))
                        .catch(err => {
                            res.statusCode = 500;
                            return res.send({message: err.message});
                        })
                }
            }
        )
};