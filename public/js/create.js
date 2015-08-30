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
    templates.known_field = Handlebars.compile($("#field-template").html());
    templates.form_field = Handlebars.compile($("#form-template").html());
    renderKnownFields();

    $("#create_form").click(function(){saveForm()})



})

function renderKnownFields() {
    $.ajax({
               url: "../../field", success: function (fields) {

            window.fields = {}
            window.formFields = {}
            for (var i in fields) {
                window.fields[fields[i].key] = fields[i];
                $("#" + fields[i].group_name + "_fields").append(templates.known_field(fields[i]))
            }
            createSortable();
        }
           });
}

function createSortable() {

    makeWorkingSortable()
    $(".source-fields")
        .sortable({
                      revert: false,
                      helper: "clone",
                      connectWith: "#working_form",
                      start: function (event, ui) {
                          $(".source-fields li").show();
                      },
                      remove: function (event, ui) {
                          console.log($(ui.item[0]).attr("key"));
                          $(this).sortable("cancel");
                          var field = window.fields[$(ui.item[0]).attr("key")];
                          if (!window.formFields[field.key]) {
                              window.formFields[field.key] = field;
                              $("#working_form").append(templates.form_field(field));
                              makeWorkingSortable();
                          }

                      }
                  })

}

function makeWorkingSortable() {
    $("#working_form").sortable({revert: false, handle: ".holder"})
    $("#working_form .remove-btn").click(function(){
        $(this).parent().parent().parent().remove();
    })
    $("#working_form").disableSelection()
    $(".mandatory-btn").off("click")
    $(".mandatory-btn").click(function() {
        if($(this).is(".is_mandatory")) {
            $(this).removeClass("glyphicon-star")
            $(this).removeClass("is_mandatory")
            $(this).addClass("glyphicon-star-empty")
        }
        else {
            $(this).removeClass("glyphicon-star-empty")
            $(this).addClass("glyphicon-star")
            $(this).addClass("is_mandatory")
        }
    })
}


function saveForm() {
    var fields = $("#working_form").children();
    var saveFields = [];
    for( var x =0; x < fields.length; x++) {

        var field = window.fields[$(fields[x]).find(".fieldKey").attr("key")]
        field = new Form(field);
        var helperText = $(fields[x]).find(".helpText input").val();
        if (helperText.length > 0) {
            field.hint = helperText;
        }
        else {
            field.hint = $(fields[x]).find(".helpText input").attr("placeholder");
        }
        field.is_mandatory = $(fields[x]).find(".is_mandatory").length > 0
        saveFields.push(field)
    }
    console.log(saveFields);
    var req = {}
    req.id = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0;
    req.name = $("#name_form").val();
    req.success_message = $("#name_form").val();
    req.fields = saveFields;

    $.ajax({
               url: "../../form",
               type: "POST",
               data: JSON.stringify(req),
               success: function(a,b){
                   console.log(b)
                   $("#qrcode a").html(req.id);
                   $("#qrcode a").attr("href", "./adminReporting.html?form_id="+req.id)
                   $('#qrcode img').attr('src', 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=' + req.id + '&choe=UTF-8');

               },
               contentType:"application/json; charset=utf-8",
               dataType:"json"
           });

}