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
        {
            name:'제품',
            sub:[   
                {name: "DRAM"},
                {name: "SSD"},
                {name: "eStorage"},
                {name: "오토모티브 메모리"},
                {name: "Consumer Storage"},
                {name: "프로세서"},
                {name: "이미지센서"},
                {name: "디스플레이 IC"},
                {name: "보안 솔루션"},
                {name: "전력관리 IC"},
                {name: "LED", arrow: true}
            ]
        },
        {
            name:'파운드리',
            sub:[
               {name: "개요"},
               {name: "공정 기술"},
               {name: "Advanced Package"},
               {name: "SAFE™"},
               {name: "제조"},
               {name: "응용 서비스"},
               {name: "Foundry Event"}
            ]
        },
        {
            name:'인사이트',
            sub:[
               {name: "5G"},
               {name: "AI"},
               {name: "빅 데이터"},
               {name: "이미지 프로세싱"},
               {name: "PIM"},
               {name: "EUV"},
               {name: "스마트폰"},
               {name: "서버 & 네트워크"},
               {name: "PC"},
               {name: "TV & 게이밍"},
               {name: "오토모티브"}
            ]
        },
        {
            name:'고객지원',
            sub:[
               {name: "개요"},
               {name: "제품 찾기"},
               {name: "기술 자료"},
               {name: "Consumer Storage 지원"},
               {name: "반도체 제조공정"},
               {name: "용어 사전"},
               {name: "글로벌 네트워크"},
               {name: "B2B Workplace", arrow:true}
            ]
        },
        {
            name:'지속가능경영',
            sub:[
                {name:"주요 성과"},
                {name:"환경"},
                {name:"노동과 인권"},
                {name:"사회공헌"},
                {name:"지속가능한 공급망"}
            ]
        },
        {
            name:'회사 소개',
            sub:[
               {name:"사업영역"},
               {name:"경영진"},
               {name:"위치"},
               {name:"연혁"},
               {name:"채용"},
               {name:"뉴스"},
               {name:"이벤트"},
               {name:"테크블로그"},
               {name:"투자자 정보", arrow:true},
               {name:"윤리", arrow:true},
               {name:"반도체 뉴스룸", arrow:true}
            ]
        },
        {
            name:'윤리&준법경영',
            sub:[
               {name:"경영원칙", arrow:true},
               {name:"부정제보", arrow:true},
               {name:"법위반제보", arrow:true}
            ]
        }
    ]

    let footerHtml = ''
        arr.forEach(el => {
            let innerTemplate = '';

            
            el.sub.forEach(e => {

                isArrow = (e.arrow)?`<img src="./assets/img/more-t3.svg" alt="" class="arrow-t2">`:'';

                innerTemplate +=`
                <ul class="quick-list">
                    <li class="quick-item">
                        <a href="">${e.name} ${isArrow}</a>
                    </li>
                </ul>`
            })

            let template = '';
            template += `<div class="quick-wrap">
            <h3 class="title-box">${el.name}</h3>
            ${innerTemplate}
            </div>
            `;
            
            footerHtml += template;

        })
        $('.grid-inner').html(footerHtml)
   

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