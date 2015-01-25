



window.onresize = function(event){
};

// called when the window is scrolled.

document.addEventListener("touchmove", footer(), false);
document.addEventListener("scroll", footer(), false);
document.addEventListener('gesturechange', footer(),false);

window.onscroll = function (event) {


footer();




};

function footer(){
    var windowScroll = $(window).scrollTop();

    var xxx = $('.wrap').offset().top;
    var wrapheight = $('.wrap').outerHeight();
    var windowheight= $(window).height();
    var lom= (70*windowheight)/100;

    var yes = wrapheight -(windowScroll-xxx)-lom;

    if (yes <0 ) {

        $('#fill').removeClass('fillvis');
        $('#fill').addClass('fillnone');

        $('.gallery').removeClass('galleryFix');
        $('.gallery').addClass('galleryflow');
    }
    else {

        $('.gallery').addClass('galleryFix');
        $('.gallery').removeClass('galleryFlow');

        $('#fill').removeClass('fillnone');
        $('#fill').addClass('fillvis');

    }

};

