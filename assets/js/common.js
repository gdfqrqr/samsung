$(function(){

    var menu = ['SFF & SAFE™ Forum 2023', '희망별숲', '아이소셀 포토부스', '비전', 'PIM']
    var swiper1 = new Swiper(".sc-visual .swiper", {
        effect : 'fade',
        navigation: {
            nextEl: ".sc-visual .btn-next",
            prevEl: ".sc-visual .btn-prev",
        },
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: 
                function (index, className) {
                    return '<div class="' + className + '">' + (menu[index])+ '<span></span>' + '</div>' ;
                },
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        
    });

    $(".autoplay.pause").click(function(){
        swiper1.autoplay.stop();
        $('.autoplay.start').addClass('on')
        $('.autoplay.pause').addClass('hidden')
        $('.swiper-pagination-bullet-active span').addClass('paused')
    }); 

    $(".autoplay.start").click(function(){
        swiper1.autoplay.start();
        $('.autoplay.start').removeClass('on')
        $('.autoplay.pause').removeClass('hidden')
        $('.swiper-pagination-bullet-active span').removeClass('paused')
    }); 


    //header

    $('.header .gnb-item').hover(function(){
        $(this).find('.sub-inner').addClass('on')
    }, function(){
        $(this).find('.sub-inner').removeClass('on')
    })


})