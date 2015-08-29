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

$(function () {
    window.templates = {}

    $.ajax({
               url: "../templates/field.handlebars", success: function (fieldTmp) {
            console.log(fieldTmp);
            templates.known_field = Handlebars.compile(fieldTmp);
            renderKnownFields()
        }
           })

})

function renderKnownFields() {
    $.ajax({
               url: "../../field", success: function (fields) {

            var personal = $("#personal_fields");
            var identity = $("#identifications_fields");
            var visitor = $("#visiting_fields");
            var relation = $("#relationship_fields");
            window.fields = {}
            for (var i in fields) {
                window.fields[fields[i].key] = fields[i];
                $("#" + fields[i].group_name + "_fields").append(templates.known_field(fields[i]))
            }
            createSortable();
        }
           });
}

function createSortable() {
    $("#working_form").sortable({revert: true})
    $(".source-fields")
        .sortable({
                      revert: true,
                      helper: "clone",
                      connectWith: "#working_form",
                      start: function (event, ui) {
                          $(".source-fields li").show();
                      },
                      remove: function (event, ui) {
                          console.log($(ui.item[0]).attr("key"));
                          $(this).sortable("cancel");
                      }
                  })

}
