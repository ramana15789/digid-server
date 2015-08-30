
function fetchFroms() {
    var name = new Form(sampleForm)
    sampleForm.key = "age";
    sampleForm.label = "Age"

    var age = new Form(sampleForm)
    return [name, age];
}

$(function () {
    window.templates = {}
    templates.table_field = Handlebars.compile($("#table-template").html());
    templates.row_field = Handlebars.compile($("#row-template").html());
    renderTable();

})

function renderTable() {
    $.ajax({
               url: "../../form?id="+getParameterByName("form_id"), success: function (form) {
            var formTmp = templates.table_field(form);
            console.log(formTmp);
            $("#report").append(formTmp);
            renderRows()
        }
           });
}

function renderRows() {
    $.ajax({
        url: "../../response?form_id="+getParameterByName("form_id"),
        success: function(fields) {
            console.log(fields)
            for (var x=0; x < fields.length; x++) {
                $("#report_rows").append(templates.row_field(fields[x]))
            }

        }
           })
}

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}




