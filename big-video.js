
//I was testing something out
$("arrow1").click(function(){
    scrolled=scrolled-300;
    $("body").animate({
        scrollTop: scrolled
    });
});