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
            dateTime: {type: Date}
        }
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("appointments", schema);
};