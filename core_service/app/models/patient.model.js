module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            username: {
                type: String,
                required: true,
                createIndexes: {unique: true},
                unique: true
            },
            name: {type: String},
            dob: {type: Date},
            email: {type: String},
            blood_group: {type: String},
            gender: {type: String},
            contact: {type: String},
            photo_url: {type: String}
        }
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("patient", schema);
};