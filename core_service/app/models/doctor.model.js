// module.exports = mongoose => {
//     let schema = mongoose.Schema(
//         {
//             username: {
//                 type: String,
//                 required: true,
//                 createIndexes: {unique: true},
//                 unique: true
//             },
//             name: {type: String},
//             reg_no: {type: String},
//             specialisation: {type: String},
//             dob: {type: Date},
//             experience: {type: Number},
//             email: {type: String},
//             contact: {type: String},
//             qualification: {type: String},
//             gender: {type: String},
//             description: {type: String},
//             photo_url: {type: String}
//         }
//     );
//
//     schema.method("toJSON", function () {
//         const {__v, _id, ...object} = this.toObject();
//         object.id = _id;
//         return object;
//     });
//
//     const Doctor = mongoose.model("doctor", schema);
//     return Doctor;
// };