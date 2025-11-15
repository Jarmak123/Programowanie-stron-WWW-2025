$(document).ready(function() {
    $('#blok').hover(
        function() {
            $(this).animate({fontSize: '3em'},800);
        },
        function() {
            $(this).animate({fontSize:'1em'}, 800);
        }
    );
});