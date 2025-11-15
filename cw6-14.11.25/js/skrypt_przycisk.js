$(document).ready(function() {
    $('#przycisk').click(
        function() {
            $('#tresc').slideToggle(500);
            if($(this).text() === ">>>"){
                $(this).text("<<<");
            }
            else{
                $(this).text(">>>");
            }
        }
    );
});