//메뉴 클릭시 해당 섹션 이동
$(function(){
    let menu = $('header li');
    let sections = $('section');
    menu.click(function() {
        menu.find('a').removeClass('active');
        $(this).find('a').addClass('active');

        let target = $(this).find('a').attr('href');
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top},700);
        return false;
    });

    $(window).on('scroll', function() {
        let top = $(this).scrollTop();
        
        sections.each(function() {
            let sectionTop = $(this).offset().top-50; 
            
            if (top >= sectionTop) {
                let targetId = $(this).attr('id');
                menu.find('a').removeClass('active');
                menu.find('a[href="#' + targetId + '"]').addClass('active');
            }
        });
    });
});

//타이핑 효과
$(function(){
    let content = "안녕하세요,\n 박제혁 입니다. ";
    let text = $(".text");
    let i = 0;
    let typingInterval;

    function typing() {
        let txt = content[i++];
        text.append(txt === "\n" ? "<br/>" : txt);
        if (i >= content.length) {
            clearInterval(typingInterval);
        }
    }
    setTimeout(function () {
        setInterval(typing, 100);
    }, 1600);
});

//원형 그래프
$(function(){
    let chart = $('.chart');
    let chartOst = chart.offset().top-500;
    let excuted =false;
    
    $(window).scroll(function(){
        let currentSct = $(this).scrollTop();
    
        if(currentSct >=chartOst){
            if(excuted == false){
                chart.each(function(){
                    let item = $(this);
                    let title = item.find('h3');
                    let targetNum = title.attr('data-num');
                    let circle = item.find('circle');
            
                    $({rate:0}).animate({rate:targetNum},
                        {
                            duration:1500,
                            progress:function(){
                                let now = this.rate;
                                let amount= 400-(400*now/100);
                                title.text(Math.floor(now));
                                circle.css({strokeDashoffset:amount});
                            }
                    });
                });
                excuted=true;
            }else{
                excuted=false;
            }
        }
    });
});

//포트폴리오 탭메뉴
$(function(){
    $('.pfMenu li').click(function(e){
        e.preventDefault();
        let tab_id = $(this).attr('data-tab');

        $('.pfMenu li').removeClass('on');
        $('.pfContents').removeClass('on');

        $('.pfMenu li').find('a').removeClass('active');
        $(this).find('a').addClass('active');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
    });
});


//스크롤 하면 나타나는 효과
$(window).scroll(function(){
    let section = $('section');
    let wScroll = $(this).scrollTop();
    /*about*/
    if (wScroll >= section.eq(1).offset().top - 500) {
        $('#about h2').addClass('show');
        $('.myImg img').addClass('on');
        $('.hashtag').addClass('show');
        $('.myinfo').addClass('show');
    }else {
        $('#about h2').removeClass('show');
        $('.myImg img').removeClass('on');
        $('.hashtag').removeClass('show');
        $('.myinfo').removeClass('show');
    }
    /*skill*/
    if (wScroll >= section.eq(2).offset().top - 700) {
        /*about 안보이게*/
        $('#about h2').removeClass('show');
        $('.myImg img').removeClass('on');
        $('.hashtag').removeClass('show');
        $('.myinfo').removeClass('show');
        /*skill 보이게*/
        $('#skill h2').addClass('show');
        $('.charts').addClass('show');
        $('.explain').addClass('show');
    }else {
        $('#skill h2').removeClass('show');
        $('.charts').removeClass('show');
        $('.explain').removeClass('show');
    }
    /*portfoilo*/
    if (wScroll >= section.eq(3).offset().top - 500) {
        /*skill 안보이게*/
        $('#skill h2').removeClass('show');
        $('.charts').removeClass('show');
        $('.explain').removeClass('show');
        /*portfoilo 보이게*/
        $('#portfolio h2').addClass('show');
        $('#portfolio li').addClass('show');
        $('#portfolio .project').addClass('show');
        $('#portfolio .projectImg1').addClass('show');
        $('#portfolio .projectImg2').addClass('show');
    }
    else {
        $('#portfolio h2').removeClass('show');
        $('#portfolio li').removeClass('show');
        $('#portfolio .project').removeClass('show');
        $('#portfolio .projectImg1').removeClass('show');
        $('#portfolio .projectImg2').removeClass('show');
    }
    /*contact*/
    if (wScroll >= section.eq(4).offset().top - 500) {
        /*portfoilo 안보이게*/
        $('#portfolio h2').removeClass('show');
        $('#portfolio li').removeClass('show');
        $('#portfolio .project').removeClass('show');
        $('#portfolio .projectImg1').removeClass('show');
        $('#portfolio .projectImg2').removeClass('show');
        /*contact 보이게*/
        $('.contact-inner h2').addClass('show');
        $('.contact-inner li').addClass('show');
        $('.sendMail').addClass('show');
    }else {
        $('.contact-inner h2').removeClass('show');
        $('.contact-inner li').removeClass('show');
        $('.sendMail').removeClass('show');
    }
});

//light박스 만들기
$(function(){
    $('.more').click(function(e){
        e.preventDefault();
        $('.lightbox').addClass('hide');
        $('html').css({'overflow' : 'hidden'});
    });
    $('.more2').click(function(e){
        e.preventDefault();
        $('.lightbox2').addClass('hide');
        $('html').css({'overflow' : 'hidden'});
    });
    $('.lightbox').click(function() {
        $(this).removeClass('hide');
        $('html').css({'overflow' : 'auto'});
    });
    $('.lightbox2').click(function() {
        $(this).removeClass('hide');
        $('html').css({'overflow' : 'auto'});
    });
});

//모바일 메뉴
$(function(){
    $(".hamburger").click(function(e){
        e.preventDefault();
        $(this).toggleClass("is-active");
        $('.gnb').toggleClass('on');
        $('header').toggleClass('on');

        if ($(this).hasClass("is-active")) {
            $('html').css({'overflow' : 'hidden'});
        } else {
            $('html').css({'overflow' : 'auto'});
        }

        $('header li').find('a').click(function(){
            $('html').css({'overflow' : 'auto'});
            $(".hamburger").removeClass("is-active");
            $('header').removeClass('on');
            $('.gnb').removeClass('on');
        });
    });
});


/*로딩*/
$(function(){
    $('html').css({'overflow' : 'hidden'});
    $(function() {
        setTimeout(function() {
            $('#loading-screen').fadeOut();
            $('html').css({'overflow' : 'auto'});
        }, 1500); 
    });
});

/*alert */
$(function(){
    $('.send').click(function(){
        alert('이메일 보내기 기능은 구현하지 않았습니다');
        console.log('asdsad');
    });
});




