/*
    make sure the intro texts stay horizontal
*/
function minWidth() 
{
    var a = []; // array to store the width of each element
    var b = 0;    
    var c = 50; // the margin-right!

    $(".intro_essay").each(function () 
    {
        a.push($(this).width() + c); // get the width + margin-right
    });

    for (var i = 0; i < a.length; i++) 
    {
        b = b + a[i];
    }

    $(".intro_wrapper").css('min-width', b + 1); // 1 pixel fail safe

    console.log(a);
    console.log(b);
}

/*
    essay switching function
*/
function switchEssay(a) 
{
    $(".the_essay:visible").fadeOut("slow");


    $('#the_essay' + a + '').fadeIn("slow", function() {
        $.scrollTo(  $('#the_essay' + a + ''), 1000);
    });
}
