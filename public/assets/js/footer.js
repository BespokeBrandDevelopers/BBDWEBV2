$(window).scroll(function () {
        if ($(this).scrollTop()  <= 0 ){
            $("#alllayers").fadeIn(1000);
        }
        else {
            $("#alllayers").fadeOut(1000);
        }
    });