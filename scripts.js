$(document).ready(function(){
    let count = 0;
    $(".lang-link").click(function () { 
        if (count == 0) {
            $('.dansk').removeClass('on');
            $('.dansk').addClass('off');
            $('.english').removeClass('off');
            $('.english').addClass('on');
        } else {
            $('.english').removeClass('on');
            $('.english').addClass('off');
            $('.dansk').removeClass('off');
            $('.dansk').addClass('on');
        }
        count ++;
        count = count > 1 ? 0 : 1;
    })
}); 