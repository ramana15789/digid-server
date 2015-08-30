var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var fieldSchema = require("./field").schema;

var formSchema = new Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true},
        success_message: String,
        fields: [fieldSchema]
    });

var Form = mongoose.model("Form", formSchema);

module.exports.model = Form;
module.exports.schema = formSchema;



