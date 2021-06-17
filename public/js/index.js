// topへ移動するスクロールボタンを表示
window.addEventListener('DOMContentLoaded', function(){
    $(".nav-sp__wrap").click(function() {
    $(".icon1").toggleClass("close");
    })

    jQuery(function() {
        var pagetop = $('#topbutton');   
        pagetop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500); //0.5秒かけてトップへ移動
            return false;
        });
    });
});