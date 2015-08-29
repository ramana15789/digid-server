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
    var knownForm = $("#personal_fields")
    knownForm.empty()
    for (var field in knownFields) {
        knownForm.append(templates.known_field(knownFields[field]))
        console.log(templates.known_field(knownFields[field]))
    }
}
