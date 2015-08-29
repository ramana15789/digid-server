var sampleForm = {
    key: "name",
    type: "TEXT",
    label: "Name",
    hint: "name",
    isMandatory: true
}

function fetchFroms() {
    var name = new Form(sampleForm)
    sampleForm.key = "age";
    sampleForm.label = "Age"

    var age = new Form(sampleForm)
    return [name, age];
}

$(function() {
    window.templates = {}

    $.ajax({url: "../templates/field.handlebars", success : function(fieldTmp) {
        console.log(fieldTmp);
        templates.known_field = Handlebars.compile(fieldTmp);
        window.knownFields = fetchFroms();
        renderKnownFields()
    }})



})

function renderKnownFields() {
    $.ajax({url: "../../field", success: function(fields){
        var personal = $("#personal_fields");
        var identity = $("#identifications_fields");
        var visitor = $("#visiting_fields");
        var relation = $("#relationship_fields");


    }});

    var knownForm = $("#personal_fields")
    knownForm.empty()
    for (var field in knownFields) {
        knownForm.append(templates.known_field(knownFields[field]))
        console.log(templates.known_field(knownFields[field]))
    }
}
