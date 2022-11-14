const db = require("../models");
const EHR = db.ehr;

exports.create = (req,res) => {
    if(!req.body.patientUsername){
        res.statusCode = 400;
        return res.send({message: "Patient Username cannot be empty!"});
    }

    const ehr = new EHR({
        patientUsername: req.body.patientUsername,
        ehrList : req.body.ehr
    });

    console.log(ehr.ehrList)

    EHR.findOne({patientUsername: ehr.patientUsername}, {_id: 0})
        .then(
            data => {
                if(!data){
                    ehr
                        .save(function(err,data){
                            if(err){
                                res.statusCode = 500;
                                return res.send({message: err.message});
                            }
                            return res.send({message: "Registered Successfully!"});
                        });
                }
                else{
                    let ehr_List = data.ehrList;
                    ehr_List = ehr_List.concat(ehr.ehrList);
                    for(let i = 0; i < ehr_List.length; i++){
                        if(ehr_List[i].hasOwnProperty("_id")){
                            delete ehr_List[i]["_id"];
                        }
                    }
                    console.log(ehr_List);
                    EHR.findOneAndUpdate({patientUsername: ehr.patientUsername}, {ehrList: ehr_List})
                        .then(res.send({message: "Successfully Updated EHR list"}))
                        .catch(err => {
                            res.statusCode = 500;
                            return res.send({message: err.message});
                        })
                }
            }
        )
        .catch(err => {
            res.statusCode = 500;
            return res.send({message: err.message});
        })
};



exports.get = (req, res) => {
    console.log(req.body.patientUsername)
    EHR.findOne({patientUsername: req.body.patientUsername})
        .then(data => {
            if (!data) {
                res.statusCode = 203;
                return res.send({message: "Not found User with username " + req.patientUsername});
            }
            else{
                res.statusCode = 200;
                return res.send(data);
            }
        })
        .catch(err => {
            res.statusCode = 500;
            res.send({ message: err.message});
        });
};

