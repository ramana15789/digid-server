var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fieldSchema = new Schema(
    {
        key: {type: String, required: true},
        field_type: {type: String, required: true},
        label: String,
        hint: String,
        is_local: Boolean,
        is_mandatory: Boolean,
        group_name: String,
        options: [String]
    });

var Field = mongoose.model("Field", fieldSchema);

module.exports.model = Field;
module.exports.schema = fieldSchema;



