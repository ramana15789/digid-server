var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var formResponseSchema = new Schema(
    {
        form_id: {type: String, required: true},
        timestamp: String,
        values: [{
                     key: String,
                     value: String
                 }]
    });

var FormResponse = mongoose.model("FormResponse", formResponseSchema);

module.exports.model = FormResponse;