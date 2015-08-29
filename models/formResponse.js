var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var formResponseSchema = new Schema(
    {
        id: {type: String, required: true},
        formId: {type: String, required: true},
        timeStamp: String,
        values: [{
                     key: String,
                     value: String
                 }]
    });

var FormResponse = mongoose.model("FormResponse", formResponseSchema);

module.exports = FormResponse;