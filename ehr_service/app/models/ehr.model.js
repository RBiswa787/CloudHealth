module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            patientUsername:{
                type: String,
                required: true,
                createIndexes: { unique: true },
                unique:  true
            },
            ehrList :  [{description: String, link: String}]
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const ehr = mongoose.model("ehr", schema);
    return ehr;
};