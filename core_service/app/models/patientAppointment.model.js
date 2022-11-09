module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            patientUsername: {
                type: String,
                required: true,
                unique: true
            },
            appointmentId: {type: [String]}
        }
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("patientAppointment", schema);
};