$(document).ready(function (){
    $("#scroll-down-arrow img").click(function (){
        $('html, body').animate({
            scrollTop: $("#section-1").offset().top
        }, 1500);
    });
});
