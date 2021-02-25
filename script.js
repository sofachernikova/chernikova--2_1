$(document).ready(function(){

        $("#changeItems").click(function(){
            $("section.horisontal").css("flex-direction", "row-reverse");
    });

    $("#changeItemsVertical").click(function(){
        $("section.vertical").css("flex-direction", "column-reverse");
});

});