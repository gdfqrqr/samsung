//masonry 라이브러리 - 뉴스배치부분
window.onload = function () {
    $('.news-list').masonry({
        itemSelector: '.news-item',
        gutter: '.gutter-sizer',
    });
};

$(function () {

    // 메인비주얼
    var menu = ['SFF & SAFE™ Forum 2023', '희망별숲', '아이소셀 포토부스', '비전', 'PIM']


    a2 = function (index, className) { //작동되게
        return '<div class="' + className + '">' + '<p>' + (menu[index]) + '<span></span>' + '</p>' + '</div>';
    }
    a3 = function (index, className) { //작동안되게
        return '<div class="' + className + '"></div>';
    }

    function initSwiper3(bullet) {
        return swiper1 = new Swiper(".sc-visual .swiper", {
            effect: 'fade',
            navigation: {
                nextEl: ".sc-visual .btn-next",
                prevEl: ".sc-visual .btn-prev",
            },
            pagination: {
                el: ".sc-visual .pagination",
                clickable: true,
                renderBullet: bullet
            },
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
        });
    }

    // 정지재생버튼
    $(".autoplay.pause").click(function () {
        swiper1.autoplay.stop();
        $('.autoplay.start').addClass('on')
        $('.autoplay.pause').addClass('hidden')
        $('.swiper-pagination-bullet-active span').addClass('paused')
    });

    $(".autoplay.start").click(function () {
        swiper1.autoplay.start();
        $('.autoplay.start').removeClass('on')
        $('.autoplay.pause').removeClass('hidden')
        $('.swiper-pagination-bullet-active span').removeClass('paused')
    });


    //header 

    //pc이하 - 헤더 메뉴 호버시 body overflow hidden
    $('.header .gnb-wrap .gnb-item').hover(function () {
        if ($(this).find('.sub-inner').length > 0) {
            $('body').addClass('hidden')
        }

    }, function () {
        $('body').removeClass('hidden')
    })

    // 스크롤 상승시 header 메뉴 fix - sc-info부터 작동
    let lastScroll = 0;
    $(window).scroll(function () {
        curr = $(this).scrollTop();
        startOffset = $('.sc-info').offset().top;

        if (!$('body').hasClass('hidden')) {
            if (curr >= startOffset) {
                $('.header').addClass('fix');

                if (curr > lastScroll) {
                    $('.header').addClass('hide')
                } else {
                    $('.header').removeClass('hide')
                }
                lastScroll = curr;

            } else {
                $('.header').removeClass('fix');
            }
        }
    })

    // 헤더 메뉴 클릭시 새로고침 방지
    $('.header .gnb-item a').click(function (e) {
        e.preventDefault()
    })


    $('.header .gnb-item').mouseover(function () {
        $(this).find('.sub-inner').addClass('on');
    })

    $('.header .gnb-item').mouseleave(function () {
        $(this).find('.sub-inner').removeClass('on');
    })

    $('.header .gnb-item').click(function () {
        $(this).find('.sub-inner').addClass('on');
    })

    $('.header .sub-inner .btn-close').click(function (e) {
        e.stopPropagation(); //충돌방지
        $('.header .sub-inner').removeClass('on');
    })


    // main silde3 -> sc-insight
    // var tab = ['초고화소 이미지센서', '초미세 픽셀 기술', '게이밍 스토리지', '오토모티브', '인공지능', 'EUV']

    let width = window.innerWidth; //내현재 윈도우창위드
    let swiper; //재할당가능한변수선언문
    let mainswiper; //재할당가능한변수선언문

    responsiveSwiper();

    function initSwiper(effect, space, view, touch) {
        if (typeof (swiper) == 'object') swiper.destroy(); // 기존 스와이퍼 죽임 후  밑에서 재실행


        return swiper = new Swiper(".sc-insight .swiper", {
            effect: effect,
            slidesPerView: view,
            centeredSlides: true,
            spaceBetween: space,
            // pagination: {
            //     el: ".sc-insight .tab-list",
            //     clickable: true,
                // renderBullet: function (index, className) {
                //     return '<div class="' + className + '">' + (tab[index]) + '</div>';
                // },
            // },
            touchRatio: touch,
        });
    }

    var tabSwiper = new Swiper(".tab-wrap", {
        slidesPerView: 'auto',
        updateOnWindowResize: true,
        grabCursor: true,
        // centeredSlides: true,
        slidesOffsetAfter: 200,
        centeredSlidesBounds: true,
        initialSlide: 0,
        on: {
            click(event) {
                console.log('event.target',this.clickedIndex);
                tabSwiper.slideTo(this.clickedIndex);	
            },
          },
    });

    $('.sc-insight .tab-item').click(function (e) {
        e.preventDefault();
        idx = $(this).data('go')
        $(this).addClass('on').siblings().removeClass('on');
        swiper.slideToLoop(idx);
    })

    function initSwiper2(num, between) {
        if (typeof (mainswiper) == 'object') mainswiper.destroy(); // 기존 스와이퍼 죽이고 재실행 

        //main silde2 -> sc-info
        return swiper2 = new Swiper(".sc-info .swiper", {
            spaceBetween: between,
            centeredSlides: true,
            slidesPerView: num,
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
    }


    function responsiveSwiper() {
        if (width >= 1024) {
            initSwiper('fade', 0, 'auto', 0);
            initSwiper2('auto', 88)
            initSwiper3(a2)
        } else if (width < 768) {
            initSwiper('slide', 16, 1.03, 1);
            initSwiper2(1, 24)
            initSwiper3(a3)
        } else if (width < 1024) {
            initSwiper('slide', 16, 1.03, 1);
            initSwiper2(1, 24)
            initSwiper3(a2)
        }
    }

    window.addEventListener('resize', function () {
        width = window.innerWidth;
        responsiveSwiper();
    });

    window.addEventListener("orientationchange", (event) => {
        width = window.innerWidth;
        responsiveSwiper();
      }); 

    //aos
    AOS.init();

    //footer menu
    let arr = [{
            name: '제품',
            sub: [{
                    name: "DRAM"
                },
                {
                    name: "SSD"
                },
                {
                    name: "eStorage"
                },
                {
                    name: "오토모티브 메모리"
                },
                {
                    name: "Consumer Storage"
                },
                {
                    name: "프로세서"
                },
                {
                    name: "이미지센서"
                },
                {
                    name: "디스플레이 IC"
                },
                {
                    name: "보안 솔루션"
                },
                {
                    name: "전력관리 IC"
                },
                {
                    name: "LED",
                    arrow: true
                }
            ]
        },
        {
            name: '파운드리',
            sub: [{
                    name: "개요"
                },
                {
                    name: "공정 기술"
                },
                {
                    name: "Advanced Package"
                },
                {
                    name: "SAFE™"
                },
                {
                    name: "제조"
                },
                {
                    name: "응용 서비스"
                },
                {
                    name: "Foundry Event"
                }
            ]
        },
        {
            name: '인사이트',
            sub: [{
                    name: "5G"
                },
                {
                    name: "AI"
                },
                {
                    name: "빅 데이터"
                },
                {
                    name: "이미지 프로세싱"
                },
                {
                    name: "PIM"
                },
                {
                    name: "EUV"
                },
                {
                    name: "스마트폰"
                },
                {
                    name: "서버 & 네트워크"
                },
                {
                    name: "PC"
                },
                {
                    name: "TV & 게이밍"
                },
                {
                    name: "오토모티브"
                }
            ]
        },
        {
            name: '고객지원',
            sub: [{
                    name: "개요"
                },
                {
                    name: "제품 찾기"
                },
                {
                    name: "기술 자료"
                },
                {
                    name: "Consumer Storage 지원"
                },
                {
                    name: "반도체 제조공정"
                },
                {
                    name: "용어 사전"
                },
                {
                    name: "글로벌 네트워크"
                },
                {
                    name: "B2B Workplace",
                    arrow: true
                }
            ]
        },
        {
            name: '지속가능경영',
            sub: [{
                    name: "주요 성과"
                },
                {
                    name: "환경"
                },
                {
                    name: "노동과 인권"
                },
                {
                    name: "사회공헌"
                },
                {
                    name: "지속가능한 공급망"
                }
            ]
        },
        {
            name: '회사 소개',
            sub: [{
                    name: "사업영역"
                },
                {
                    name: "경영진"
                },
                {
                    name: "위치"
                },
                {
                    name: "연혁"
                },
                {
                    name: "채용"
                },
                {
                    name: "뉴스"
                },
                {
                    name: "이벤트"
                },
                {
                    name: "테크블로그"
                },
                {
                    name: "투자자 정보",
                    arrow: true
                },
                {
                    name: "윤리",
                    arrow: true
                },
                {
                    name: "반도체 뉴스룸",
                    arrow: true
                }
            ]
        },
        {
            name: '윤리&준법경영',
            sub: [{
                    name: "경영원칙",
                    arrow: true
                },
                {
                    name: "부정제보",
                    arrow: true
                },
                {
                    name: "법위반제보",
                    arrow: true
                }
            ]
        }
    ]

    let footerHtml = ''
    arr.forEach(el => {
        let innerTemplate = '';


        el.sub.forEach(e => {

            isArrow = (e.arrow) ? `<img src="./assets/img/more-t3.svg" alt="" class="arrow-t2">` : '';

            innerTemplate += `
                <ul class="quick-list">
                    <li class="quick-item">
                        <a href="">${e.name} ${isArrow}</a>
                    </li>
                </ul>`
        })

        let template = '';
        template += `<div class="quick-wrap">
            <h3 class="title-box">${el.name}</h3>
                <div class="quick-inner-wrap">
                ${innerTemplate}
                </div>
            </div>
            `;

        footerHtml += template;

    })
    $('.grid-inner').html(footerHtml)


    //scroll top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.fixed-wrap').addClass('active');
        } else {
            $('.fixed-wrap').removeClass('active');
        }
    });

    $('.fixed-wrap').click(function (e) {
        e.preventdefault()
        $('body,html').scrollTop(0)
    });


    //검색창 팝업
    $('.utils-wrap .btn-search').click(function () {
        $('body').addClass('hidden2');
        $('.search-popup').addClass('on')
    })

    $('.search-popup .btn-close').click(function () {
        $('body').removeClass('hidden2');
        $('.search-popup').removeClass('on')
    })

    $('.search-popup .link-wrap').click(function (e) {
        e.preventdefault()
        $('.search-popup .search-list').hide()
    })

    $('.search-popup input').click(function () {
        $('.search-popup .search-list').show()

        if ($('.search-popup .search-list').css('display') == 'block') {
            $('.search-popup .tag-wrap').hide()
        }
    })



    //언어선택 팝업
    $('.btn-lang').click(function () {
        $('.lang-list').toggleClass('active')
    })

    $('.header').mouseleave(function () {
        $('.lang-list').removeClass('active')
    })

    // 검색창 추천검색어 값 넣기
    $('.sc-search .tag-wrap a').click(function (e) {
        e.preventDefault();
        keyword = $(this).text();
        $('.sc-search input').val(keyword);
    })


    // 푸터 모바일 연결 사이트 아코디언 메뉴 열고닫기
    $('.footer .quick-wrap').click(function () {
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })

    //모바일 햄버거메뉴
    $('.btn-menu').click(function () {
        $('.mob-menu').addClass('on')
        $('body').addClass('hidden')
    })

    $('.mob-menu .btn-close').click(function () {
        $('.mob-menu').removeClass('on')
        $('body').removeClass('hidden')
    })

    $('.mob-menu .link-hover').click(function () {
        $('.mob-menu .sub-wrap').toggleClass('on')
        $(this).toggleClass('on')
        $(this).parent().toggleClass('on')
        $(this).parents().find('.sub-wrap').not($(this).siblings('.sub-wrap')).removeClass('on')
        $(this).parents().find('.gnb-item').not($(this).parent()).removeClass('on')
    })

    $('.mob-menu .link-menu').click(function () {
        $('.mob-menu .depth3-wrap').toggleClass('on')
        $(this).toggleClass('on')
        $(this).parents().find('.depth3-wrap').not($(this).siblings('.depth3-wrap')).removeClass('on')
    })

})