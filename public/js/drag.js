$(function() {
    $( "#destination" ).sortable({
                                  revert: true

                              });
    $( "#source" ).sortable({
                                    connectWith: "#destination",
                                    helper2: function(a,b) {
                                        console.log(a);
                                        console.log(b);
                                        return this;
                                    },
                                    helper: "clone",
                                    start : function() {
                                        $("#source li").show();
                                    },
                                    stop2: function(event, ui) {
                                        var idx = $('#destination').children().index($(ui.item[0]))-1,
                                            elm = $(ui.item[0]).clone(true);
                                        $('#destination').children(':eq('+idx+')').after(elm);
                                        console.log("adding child" + elm.html())
                                        $(this).sortable('cancel');
                                    },
                                    remove: function(event, ui) {
                                      console.log($(ui.item[0]).html());
                                        var idx = $('#source').children().index($(ui.item[0])),
                                            elm = $(ui.item[0]).clone(true);
                                        console.log(idx)
                                        console.log($('#source').children().index($(ui.placeholder)))
                                        console.log($('#source').children().index($(ui.helper)))
                                        $('#source').children(':eq('+idx+')').after(elm);
                                        console.log("adding child" + elm.html())

                                    },
                                    revert: "true"
                                });
    $( "ul, li" ).disableSelection();
});
