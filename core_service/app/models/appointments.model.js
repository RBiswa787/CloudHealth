module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            appointmentId: {
                type: String,
                required: true,
                unique: true
            },
            patientUsername: {type: String},
            doctorUsername: {type: String},
            date: {type: String},
            time: {type: String},
            patient: {type: String},
            doctor: {type: String},
            spec: {type: String},
            request: {type: Number}
        }
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("appointments", schema);
};