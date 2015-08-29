var sampleForm = {
    key: "name",
    type: "TEXT",
    label: "Name",
    hint: "name",
    isMandatory: true
}

function fetchFroms() {
    var name = new UserResponse(sampleForm)
    sampleForm.key = age;

    var age = new UserResponse(sampleForm)
    return [name, age];
}

$(function() {
    window.templates = {}
    templates.known_field = Handlebars.compile($("#known_field_tmp").html());
    templates.working_field = Handlebars.compile($("#working_field_tmp").html());

    window.knownFields = fetchFroms();
    renderKnownFields()
})

function renderKnownFields() {
    var knownForm = $("#known_form")
    knownForm.empty()
    for (var field in knownFields) {
        knownForm.append(templates.known_field(knownFields[field]))
        console.log(templates.known_field(knownFields[field]))
    }
}
