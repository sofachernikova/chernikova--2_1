$(document).ready(function(){

        $("#changeItems").click(function(){
            $("div.horisontal").css("flex-direction", "row-reverse");
    });

    $("#changeItemsVertical").click(function(){
        $("div.vertical").css("flex-direction", "column-reverse");
});

});