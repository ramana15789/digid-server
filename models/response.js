var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var responseSchema = new Schema(
    {
        form_id: {type: String, required: true},
        timestamp: String,
        values: [{
                     key: String,
                     value: String
                 }]
    });

var Response = mongoose.model("Response", responseSchema);

module.exports.model = Response;