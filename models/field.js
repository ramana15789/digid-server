var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fieldSchema = new Schema(
    {
        key: {type: String, required: true, unique: true},
        type: {type: String, required: true},
        input_type: String,
        label: String

    });

var Field = mongoose.model("Field", fieldSchema);

module.exports = Field;



