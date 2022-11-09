module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            doctorUsername: {
                type: String,
                required: true,
                createIndexes: {unique: true},
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

    return mongoose.model("doctorAppointment", schema);
};