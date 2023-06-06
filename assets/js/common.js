$(function(){

    var menu = ['SFF & SAFE™ Forum 2023', '희망별숲', '아이소셀 포토부스', '비전', 'PIM']
    var swiper1 = new Swiper(".sc-visual .swiper", {
        effect : 'fade',
        navigation: {
            nextEl: ".sc-visual .btn-next",
            prevEl: ".sc-visual .btn-prev",
        },
        pagination: {
            el: ".sc-visual .pagination",
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

    //main silde2
    var swiper2 = new Swiper(".sc-info .swiper", {
        spaceBetween: 88,
        navigation: {
            nextEl: ".sc-info .btn-next",
            prevEl: ".sc-info .btn-prev",
        },
        pagination: {
            el: ".sc-info .pagination",
            clickable: true,
        },
        loop: true,
    });


    // main silde3
    var tab = ['초고화소 이미지센서', '초미세 픽셀 기술', '게이밍 스토리지', '오토모티브', '인공지능', 'EUV']
    var swiper3 = new Swiper(".sc-insight .swiper", {
        effect : 'fade',
        pagination: {
            el: ".sc-insight .tab-list",
            clickable: true,
            renderBullet: 
                function (index, className) {
                    return '<div class="' + className + '">' + (tab[index]) + '</div>' ;
                },
        },
        touchRatio:0,
        loop: true,
    });

    //aos
    AOS.init();

    //footer menu
    let arr = [
       {name: "DRAM"},
       {name: "SSD"},
       {name: "eStorage"},
       {name: "오토모티브 메모리"},
       {name: "Consumer Storage"},
       {name: "프로세서"},
       {name: "이미지센서"},
       {name: "디스플레이 IC"},
       {name: "보안 솔루션"}
    ]

    let footerHtml = ''
   arr.forEach(el => {

    const template = `<li class="quick-item"><a href="">${el.name}</a></li>`
        footerHtml += template
    })

   $('.grid-inner .quick-list').html(footerHtml)
   

   //scroll top
   $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { // 스크롤 내릴 표시
            $('.fixed-wrap').addClass('active');
        }else {
            $('.fixed-wrap').removeClass('active');
        }
    });     

    $('.fixed-wrap').click(function(e){
        e.preventdefault()
        $('body,html').scrollTop(0)
    });


    //검색창 팝업
    $('.utils-wrap .btn-search').click(function(){
        $('.search-popup').addClass('on')
    })
    
    $('.search-popup .btn-close').click(function(){
        $('.search-popup').removeClass('on')
    })

    $('.search-popup .link-wrap').click(function(e){
        e.preventdefault()
        $('.search-popup .search-list').style.display = 'none';
    })

    //언어선택 팝업
    $('.btn-lang').click(function(){
        $('.lang-list').toggleClass('active')
    })






})