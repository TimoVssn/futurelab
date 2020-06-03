$(document).ready(function () {
    var $achterImg = $('.wrapper');
    var currentPos = $achterImg.position().left;
    var newPos = 0;

    $("#uithofEnv").get(0).play();

    $(window).scroll(function () {
        var scrollDistance = $(this).scrollLeft()

        console.log('scroll right');
        newPos = (((scrollDistance*100)/$(document).width()) + currentPos + 0.5);
        
        console.log(newPos);
        
        $achterImg.css({
            'background-position': newPos,
        });

    });
    
});
