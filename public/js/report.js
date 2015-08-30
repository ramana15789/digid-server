
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
               url: "../../form?id=853347", success: function (form) {
            var formTmp = templates.table_field(form);
            console.log(formTmp);
            $("#report").append(formTmp);
            renderRows()
        }
           });
}

function renderRows() {
    $.ajax({
        url: "../../user_response?form_id=853347",
        success: function(response) {
            console.log(response)
        }

           })
}





